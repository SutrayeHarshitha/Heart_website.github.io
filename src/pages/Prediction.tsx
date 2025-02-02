import React, { useState } from 'react';
import { Activity, AlertCircle, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Prediction = () => {
  const [formData, setFormData] = useState({
    age: '',
    sex: 'male',
    chestPainType: 'typical',
    restingBP: '',
    cholesterol: '',
    fastingBP: '',
    maxHeartRate: '',
    thalassemia: 'normal',
    diabetes: 'no',
    smoking: 'no',
    obesity: 'no'
  });

  const [showResult, setShowResult] = useState(false);
  const [predictionResult, setPredictionResult] = useState<{
    riskLevel: 'Low' | 'Moderate' | 'High';
    score: number;
    analysis: string;
    recommendations: string[];
  } | null>(null);

  const calculateRisk = () => {
    let riskScore = 0;
    
    // Age factor
    const age = parseInt(formData.age);
    if (age > 60) riskScore += 3;
    else if (age > 40) riskScore += 2;
    else riskScore += 1;

    // Sex factor (men have higher risk)
    if (formData.sex === 'male') riskScore += 1;

    // Chest pain type factor
    switch (formData.chestPainType) {
      case 'typical': riskScore += 3; break;
      case 'atypical': riskScore += 2; break;
      case 'nonanginal': riskScore += 1; break;
    }

    // Blood pressure factors
    const restingBP = parseInt(formData.restingBP);
    const fastingBP = parseInt(formData.fastingBP);
    if (restingBP > 140 || fastingBP > 130) riskScore += 3;
    else if (restingBP > 120 || fastingBP > 110) riskScore += 2;

    // Cholesterol factor
    const cholesterol = parseInt(formData.cholesterol);
    if (cholesterol > 240) riskScore += 3;
    else if (cholesterol > 200) riskScore += 2;

    // Max heart rate factor
    const maxHR = parseInt(formData.maxHeartRate);
    if (maxHR > 220 - age) riskScore += 2;

    // Thalassemia factor
    if (formData.thalassemia === 'fixed') riskScore += 3;
    else if (formData.thalassemia === 'reversible') riskScore += 2;

    // Other risk factors
    if (formData.diabetes === 'yes') riskScore += 2;
    if (formData.smoking === 'yes') riskScore += 2;
    if (formData.obesity === 'yes') riskScore += 2;

    // Calculate risk level
    let riskLevel: 'Low' | 'Moderate' | 'High';
    if (riskScore <= 8) riskLevel = 'Low';
    else if (riskScore <= 15) riskLevel = 'Moderate';
    else riskLevel = 'High';

    // Generate recommendations
    const recommendations = [];
    if (cholesterol > 200) recommendations.push("Consider dietary changes to lower cholesterol levels");
    if (restingBP > 120) recommendations.push("Monitor blood pressure regularly and maintain a healthy lifestyle");
    if (formData.smoking === 'yes') recommendations.push("Quit smoking to significantly reduce heart disease risk");
    if (formData.obesity === 'yes') recommendations.push("Work on weight management through diet and exercise");
    if (maxHR > 220 - age) recommendations.push("Consider a cardiac stress test to evaluate your heart rate response");
    if (formData.thalassemia !== 'normal') recommendations.push("Regular follow-up with a cardiologist for thalassemia management");

    // Generate analysis text
    const analysis = `Based on your health data, you show a ${riskLevel.toLowerCase()} risk of heart disease. 
    Your cholesterol level of ${cholesterol} mg/dL ${cholesterol > 200 ? 'is above' : 'is within'} the recommended range. 
    Resting blood pressure of ${restingBP} mmHg ${restingBP > 120 ? 'indicates prehypertension' : 'is normal'}. 
    ${formData.chestPainType !== 'asymptomatic' ? `The presence of ${formData.chestPainType} chest pain requires attention. ` : ''}
    ${formData.thalassemia !== 'normal' ? `Your thalassemia status requires monitoring. ` : ''}
    ${formData.smoking === 'yes' ? 'Smoking significantly increases your risk.' : ''} 
    ${formData.diabetes === 'yes' ? 'Having diabetes is a significant risk factor that requires careful management.' : ''}`;

    return {
      riskLevel,
      score: riskScore,
      analysis,
      recommendations
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateRisk();
    setPredictionResult(result);
    setShowResult(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'Low': return 'text-green-500';
      case 'Moderate': return 'text-yellow-500';
      case 'High': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Activity className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Predict Your Heart Disease Risk</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below with your health information. Our model will analyze your data 
            and provide a comprehensive risk assessment.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="space-y-8 bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="sex" className="block text-sm font-medium text-gray-700">Gender</label>
                  <select
                    id="sex"
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="chestPainType" className="block text-sm font-medium text-gray-700">
                    Chest Pain Type
                  </label>
                  <select
                    id="chestPainType"
                    name="chestPainType"
                    value={formData.chestPainType}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="typical">Typical Angina</option>
                    <option value="atypical">Atypical Angina</option>
                    <option value="nonanginal">Non-anginal Pain</option>
                    <option value="asymptomatic">Asymptomatic</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="restingBP" className="block text-sm font-medium text-gray-700">
                    Resting Blood Pressure (mmHg)
                  </label>
                  <input
                    type="number"
                    id="restingBP"
                    name="restingBP"
                    value={formData.restingBP}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="fastingBP" className="block text-sm font-medium text-gray-700">
                    Fasting Blood Pressure (mmHg)
                  </label>
                  <input
                    type="number"
                    id="fastingBP"
                    name="fastingBP"
                    value={formData.fastingBP}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="cholesterol" className="block text-sm font-medium text-gray-700">
                    Serum Cholesterol (mg/dL)
                  </label>
                  <input
                    type="number"
                    id="cholesterol"
                    name="cholesterol"
                    value={formData.cholesterol}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="maxHeartRate" className="block text-sm font-medium text-gray-700">
                    Maximum Heart Rate
                  </label>
                  <input
                    type="number"
                    id="maxHeartRate"
                    name="maxHeartRate"
                    value={formData.maxHeartRate}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="thalassemia" className="block text-sm font-medium text-gray-700">
                    Thalassemia
                  </label>
                  <select
                    id="thalassemia"
                    name="thalassemia"
                    value={formData.thalassemia}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="normal">Normal</option>
                    <option value="fixed">Fixed Defect</option>
                    <option value="reversible">Reversible Defect</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Diabetes</label>
                  <div className="mt-2 space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="diabetes"
                        value="yes"
                        checked={formData.diabetes === 'yes'}
                        onChange={handleChange}
                        className="form-radio text-red-500"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="diabetes"
                        value="no"
                        checked={formData.diabetes === 'no'}
                        onChange={handleChange}
                        className="form-radio text-red-500"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Smoking</label>
                  <div className="mt-2 space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="smoking"
                        value="yes"
                        checked={formData.smoking === 'yes'}
                        onChange={handleChange}
                        className="form-radio text-red-500"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="smoking"
                        value="no"
                        checked={formData.smoking === 'no'}
                        onChange={handleChange}
                        className="form-radio text-red-500"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Obesity</label>
                  <div className="mt-2 space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="obesity"
                        value="yes"
                        checked={formData.obesity === 'yes'}
                        onChange={handleChange}
                        className="form-radio text-red-500"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="obesity"
                        value="no"
                        checked={formData.obesity === 'no'}
                        onChange={handleChange}
                        className="form-radio text-red-500"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* <div className="flex items-center bg-yellow-50 p-4 rounded-md">
                <AlertCircle className="h-5 w-5 text-yellow-400 mr-3" />
                <p className="text-sm text-yellow-700">
                  This tool is for educational purposes only. Always consult with healthcare professionals 
                  for medical advice.
                </p>
              </div> */}

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn btn-primary px-8 py-3 text-base"
                >
                  Get Prediction
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">Your Heart Health Analysis</h2>
                  <button
                    onClick={() => setShowResult(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Back to Form
                  </button>
                </div>
              </div>

              <div className="p-6">
                {predictionResult && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-center space-x-4">
                      {/* <Heart className={`h-12 w-12 ${getRiskColor(predictionResult.riskLevel)}`} /> */}
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-1">
                          <span className={getRiskColor(predictionResult.riskLevel)}>
                            {predictionResult.riskLevel} Risk
                          </span>
                        </h3>
                        <p className="text-gray-600">Risk Score: {predictionResult.score}/25</p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Doctor's Analysis</h4>
                      <p className="text-gray-700">{predictionResult.analysis}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Recommendations</h4>
                      <div className="space-y-2">
                        {predictionResult.recommendations.map((rec, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                            <p className="text-gray-700">{rec}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Next Steps</h4>
                      <p className="text-blue-700">
                        Schedule a consultation with your healthcare provider to discuss these results 
                        and develop a personalized health plan. Regular check-ups and lifestyle 
                        modifications can significantly improve your heart health.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Prediction;