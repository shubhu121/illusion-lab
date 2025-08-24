import { useState, useEffect } from 'react';

const illusions = [
  'checkerboard',
  'spiral',
  'moire',
  'waves',
  'tunnel'
];

export default function IllusionBackground() {
  const [currentIllusion, setCurrentIllusion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIllusion((prev) => (prev + 1) % illusions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const renderIllusion = (type: string) => {
    switch (type) {
      case 'checkerboard':
        return (
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #ff00ff 25%, transparent 25%), 
                linear-gradient(-45deg, #ff00ff 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, #00ffff 75%), 
                linear-gradient(-45deg, transparent 75%, #00ffff 75%)
              `,
              backgroundSize: '60px 60px',
              backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
              animation: 'checkerboardMove 8s linear infinite'
            }}
          />
        );
      
      case 'spiral':
        return (
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              background: `conic-gradient(from 0deg, #ff00ff, #00ffff, #00ff00, #ff00ff)`,
              animation: 'spiralRotate 10s linear infinite'
            }}
          />
        );
      
      case 'moire':
        return (
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  #ff00ff 0px,
                  #ff00ff 2px,
                  transparent 2px,
                  transparent 4px
                )`,
                animation: 'moireShift1 6s ease-in-out infinite alternate'
              }}
            />
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  #00ffff 0px,
                  #00ffff 2px,
                  transparent 2px,
                  transparent 4px
                )`,
                animation: 'moireShift2 6s ease-in-out infinite alternate-reverse'
              }}
            />
          </div>
        );
      
      case 'waves':
        return (
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              background: `
                radial-gradient(circle at 25% 25%, #ff00ff 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, #00ffff 0%, transparent 50%),
                radial-gradient(circle at 75% 25%, #00ff00 0%, transparent 50%),
                radial-gradient(circle at 25% 75%, #ffff00 0%, transparent 50%)
              `,
              animation: 'wavePulse 8s ease-in-out infinite'
            }}
          />
        );
      
      case 'tunnel':
        return (
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                repeating-conic-gradient(
                  from 0deg,
                  #ff00ff 0deg 10deg,
                  #00ffff 10deg 20deg,
                  #00ff00 20deg 30deg,
                  transparent 30deg 40deg
                )
              `,
              animation: 'tunnelZoom 12s ease-in-out infinite'
            }}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      <div className="absolute inset-0">
        {renderIllusion(illusions[currentIllusion])}
      </div>
      
      <style>{`
        @keyframes checkerboardMove {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(60px) translateY(60px); }
        }
        
        @keyframes spiralRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes moireShift1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(20px); }
        }
        
        @keyframes moireShift2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(20px); }
        }
        
        @keyframes wavePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes tunnelZoom {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.5) rotate(180deg); }
        }
      `}</style>
    </>
  );
}
