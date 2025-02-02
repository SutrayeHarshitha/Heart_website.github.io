import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
            alt="Medical background"
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <Heart className="h-16 w-16 mx-auto mb-8 text-red-500 animate-pulse" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Heart Disease Disease Prediction 
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200">
            Predict your heart disease risk.
          </p>
          <Link
            to="/predict"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Start Your Risk Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600">
              Advanced technology meets healthcare for better prevention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Analysis',
                description: 'Advanced machine learning algorithms process your health data for accurate predictions',
                icon: '🤖',
              },
              {
                title: 'Quick Results',
                description: 'Get your risk assessment in minutes with detailed explanations',
                icon: '⚡',
              },
              {
                title: 'Expert Insights',
                description: 'Based on real medical data and validated by healthcare professionals',
                icon: '👨‍⚕️',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;