import { useState } from 'react';
import { ArrowRight, Sparkles, Download, Copy } from 'lucide-react';
import IllusionBackground from '@/react-app/components/IllusionBackground';
import Generator from '@/react-app/components/Generator';

export default function Home() {
  const [showGenerator, setShowGenerator] = useState(false);

  if (showGenerator) {
    return <Generator onBack={() => setShowGenerator(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-[#0F0F0F] overflow-hidden">
      <IllusionBackground />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-white font-medium tracking-wide">ILLUSION LAB</span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 bg-clip-text text-transparent leading-tight">
            Generate Mind-Bending CSS Illusions
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            A free playground for designers, powered by pure CSS.<br />
            Create optical illusions that will mesmerize your audience.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setShowGenerator(true)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/25"
          >
            <span>Create Your Illusion</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Multiple Illusions</h3>
              <p className="text-gray-400 text-sm">Choose from checkerboard, spiral, moiré, waves, and tunnel effects</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                <Copy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Export Ready</h3>
              <p className="text-gray-400 text-sm">Copy CSS code or download PNG images for your projects</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Fully Customizable</h3>
              <p className="text-gray-400 text-sm">Adjust colors, intensity, speed, and animation parameters</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
