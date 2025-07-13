import React from 'react';
import { Code, Sparkles, Zap } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Main heading with typing effect */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
          <TypingAnimation
            text="Modern Web Design"
            speed={100}
            delay={1000}
            className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          />
        </h1>

        {/* Subheading with typing effect */}
        <div className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          <TypingAnimation
            text="Experience the magic of typography with smooth animations that bring your content to life"
            speed={60}
            delay={3000}
            className="leading-relaxed"
          />
        </div>

        {/* Feature icons */}
        <div className="flex justify-center space-x-8 mb-12 opacity-0 animate-fadeIn delay-6000">
          <div className="flex flex-col items-center text-white">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
              <Code className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Clean Code</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
              <Sparkles className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Beautiful Design</span>
          </div>
          <div className="flex flex-col items-center text-white">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mb-3 transform hover:scale-110 transition-transform duration-300">
              <Zap className="w-8 h-8" />
            </div>
            <span className="text-sm font-medium">Fast Performance</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="opacity-0 animate-fadeIn delay-7000 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;