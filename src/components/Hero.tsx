// Hero.tsx - Main landing section with personal introduction
import React from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Turning Data into
              <span className="text-navy-600 dark:text-blue-400">
                {' '}
                Actionable Insights
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Passionate Data Scientist specializing in AI and machine learning
              solutions. Transforming complex data challenges into valuable
              business insights.
            </p>
            <a
              href="https://drive.google.com/file/d/1TJk0rsSz8ipvDmGhs1x5cfXsarpyJv6_/view?usp=sharing"
              download
              className="inline-flex items-center px-6 py-3 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </a>
          </div>

          {/* Profile image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="/public/Profile.jpg"
                alt="Profile Picture"
                class="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
