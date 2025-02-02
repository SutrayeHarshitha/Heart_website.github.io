import React from 'react';
import { Heart, Activity } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* What is Heart Disease Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">What is Heart Disease?</h1>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 leading-relaxed">
              Heart disease refers to various conditions that affect your heart's structure and function. 
              It remains one of the leading causes of death globally, but early detection and lifestyle 
              changes can significantly reduce risks.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Common types include coronary artery disease, heart rhythm problems (arrhythmias), 
              and heart valve disease. Understanding your risk factors is crucial for prevention 
              and early intervention.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <Activity className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Data Collection</h3>
              <p className="text-gray-600">
                We collect various health metrics including age, cholesterol levels, blood pressure, 
                and other relevant factors through a simple questionnaire.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Analysis</h3>
              <p className="text-gray-600">
                Our machine learning model processes your data, comparing it with patterns 
                identified from extensive medical research and real-world cases.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Risk Assessment</h3>
              <p className="text-gray-600">
                Based on the analysis, we provide a comprehensive risk assessment along 
                with personalized recommendations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
              <p className="text-gray-600">
                You'll receive actionable insights and suggestions to help maintain 
                or improve your heart health.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;