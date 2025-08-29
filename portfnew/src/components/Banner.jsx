import React from 'react'
import LeftBanner from './LeftBanner'
import RightBanner from './RightBanner'

const Banner = () => {
  return (
    <section id="home" className="w-full min-h-screen flex items-center py-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative overflow-hidden bg-[var(--color-body)]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-designColor opacity-5 animate-float"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-16 relative z-10">
        <LeftBanner />
        <RightBanner />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
          }
          25% { 
            transform: translate(-10px, -20px) rotate(5deg); 
          }
          50% { 
            transform: translate(5px, -10px) rotate(-5deg); 
          }
          75% { 
            transform: translate(-5px, -15px) rotate(3deg); 
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          70%, 100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  )
}

export default Banner