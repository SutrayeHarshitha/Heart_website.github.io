import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      category: "Heart Health Basics",
      items: [
        {
          title: "Understanding Heart Disease",
          source: "American Heart Association",
          url: "https://www.heart.org",
          description: "Comprehensive guide to heart disease, its types, and prevention strategies."
        },
        {
          title: "Heart Disease Prevention",
          source: "CDC",
          url: "https://www.cdc.gov/heartdisease",
          description: "Official CDC resources on heart disease prevention and risk factors."
        }
      ]
    },
    {
      category: "Lifestyle & Prevention",
      items: [
        {
          title: "Heart-Healthy Diet",
          source: "National Heart, Lung, and Blood Institute",
          url: "https://www.nhlbi.nih.gov",
          description: "Dietary guidelines and meal planning for heart health."
        },
        {
          title: "Exercise Guidelines",
          source: "WHO",
          url: "https://www.who.int",
          description: "Physical activity recommendations for cardiovascular health."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <BookOpen className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Heart Health Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated collection of trusted resources to learn more about heart health 
            and disease prevention.
          </p>
        </div>

        <div className="space-y-12">
          {resources.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-red-500 px-6 py-4">
                <h2 className="text-xl font-bold text-white">{section.category}</h2>
              </div>
              <div className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                    >
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">Source: {item.source}</p>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-red-500 hover:text-red-600"
                      >
                        Learn More
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-50 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-yellow-800 mb-2">Disclaimer</h2>
          <p className="text-yellow-700">
            The resources provided here are for informational purposes only. Always consult with 
            healthcare professionals for medical advice and treatment decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resources;