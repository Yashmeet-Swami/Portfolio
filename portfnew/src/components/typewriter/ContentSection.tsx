import React from 'react';
import TypewriterSection from './TypewriterSection';
import { ChevronDown } from 'lucide-react';

const ContentSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <ChevronDown className="w-8 h-8 text-gray-400 mx-auto mb-8 animate-bounce" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            The Art of Typography
          </h2>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
          <TypewriterSection />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Smooth Animations</h3>
            <p className="text-blue-800 leading-relaxed">
              Every letter appears with perfect timing, creating a mesmerizing visual experience that captivates your audience.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-purple-900 mb-4">Customizable Speed</h3>
            <p className="text-purple-800 leading-relaxed">
              Control the pace of your typing animation to match your content's rhythm and create the perfect user experience.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-pink-900 mb-4">Production Ready</h3>
            <p className="text-pink-800 leading-relaxed">
              Built with React and TypeScript, optimized for performance and ready to deploy in your production applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;