// Projects.tsx - Showcase of data science projects
import React from 'react';
import { ExternalLink, Brain, MessageSquare } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Fruit & Vegetable Classifier',
      description: 'Advanced CNN model for accurate classification of fruits and vegetables. Utilizing deep learning techniques to identify various produce types, enabling automated sorting and quality control in agricultural applications.',
      icon: <Brain className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800",
      link: 'https://github.com/shadowTEM/Fruit-and-Vegetable-Image-Recognition'
    },
    {
      title: 'RAG Chatbot with LLaMA',
      description: 'Implemented a sophisticated RAG (Retrieval-Augmented Generation) chatbot using LLaMA 3.2 and Vector Database. This AI-powered assistant provides accurate, context-aware responses by combining LLM capabilities with efficient information retrieval.',
      icon: <MessageSquare className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      link: 'https://huggingface.co/ShadowTEM'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-navy-600 rounded-lg flex items-center justify-center mr-4">
                    <div className="text-white">{project.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-navy-600 text-white rounded-lg hover:bg-navy-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;