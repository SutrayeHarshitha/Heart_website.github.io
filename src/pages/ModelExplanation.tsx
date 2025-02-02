import React from 'react';
import { Brain, BarChart2, Database, Award } from 'lucide-react';

const ModelExplanation = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Brain className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How the Model Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced machine learning model uses state-of-the-art algorithms to predict 
            heart disease risk based on various health parameters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Database className="h-8 w-8 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Data Collection & Processing</h2>
            <p className="text-gray-600">
              Our model is trained on a comprehensive dataset of medical records, including:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Patient demographics</li>
              <li>• Clinical measurements</li>
              <li>• Laboratory results</li>
              <li>• Medical history</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Brain className="h-8 w-8 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Machine Learning Algorithm</h2>
            <p className="text-gray-600">
              We use an ensemble of algorithms including:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Random Forest</li>
              <li>• Gradient Boosting</li>
              {/* <li>• Neural Networks</li> */}
              <li>• KNN</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <BarChart2 className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Model Performance</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">95%</div>
              <p className="text-gray-600">Accuracy</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">93%</div>
              <p className="text-gray-600">Sensitivity</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">94%</div>
              <p className="text-gray-600">Specificity</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Award className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Validation & Testing</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our model undergoes rigorous testing and validation processes, including cross-validation 
            and independent test set evaluation, to ensure reliable and consistent predictions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelExplanation;