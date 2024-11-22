// Skills.tsx - Technical skills and tools showcase
import React from 'react';
import { Code, Database, Brain, BarChart } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6" />,
      skills: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas']
    },
    {
      title: 'Machine Learning',
      icon: <Brain className="w-6 h-6" />,
      skills: ['Deep Learning', 'Computer Vision', 'NLP', 'CNN', 'Transfer Learning']
    },
    {
      title: 'Data Analysis',
      icon: <BarChart className="w-6 h-6" />,
      skills: ['Power BI', 'Data Visualization', 'Statistical Analysis', 'Feature Engineering']
    },
    {
      title: 'Tools & Platforms',
      icon: <Database className="w-6 h-6" />,
      skills: ['Jupyter', 'Azure', 'Docker', 'Git', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-navy-600 rounded-lg flex items-center justify-center mr-3">
                  <div className="text-white">{category.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-navy-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;