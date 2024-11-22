// About.tsx - Detailed information about professional background
import React from 'react';
import { Brain, Code, Database } from 'lucide-react';

const About: React.FC = () => {
  // Key features/strengths
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Expertise',
      description: 'Specialized in developing cutting-edge AI solutions and machine learning models.',
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Full-Stack Data Science',
      description: 'From data collection to deployment, handling end-to-end data science projects.',
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Big Data Analytics',
      description: 'Experience with large-scale data processing and analytics frameworks.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-navy-600 rounded-lg flex items-center justify-center mb-4">
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            As a Data Scientist with a passion for AI and machine learning, I've dedicated my career
            to solving complex problems through data-driven approaches. My experience spans from
            developing sophisticated machine learning models to implementing practical business solutions.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I specialize in computer vision, natural language processing, and predictive analytics,
            with a track record of successful projects in image recognition, text analysis, and
            time series forecasting. My work has helped businesses optimize their operations and
            make data-informed decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;