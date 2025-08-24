import { useState, useRef } from 'react';
import { ArrowLeft, Download, Copy, Shuffle, Settings, Check } from 'lucide-react';
import IllusionPreview from './IllusionPreview';
import IllusionGallery from './IllusionGallery';
import ControlPanel from './ControlPanel';

export interface IllusionConfig {
  type: 'checkerboard' | 'spiral' | 'moire' | 'waves' | 'tunnel' | 
        'cafe-wall' | 'zollner' | 'hering' | 'wavy-grid' |
        'rotating-snakes' | 'pinna-brelstaff' | 'shimmering-grid' |
        'penrose-triangle' | 'impossible-stairs' | 'endless-corridor' |
        'floating-cube' | 'depth-checkerboard' |
        // Playful / Experimental
        'infinity-mirror' | 'wobbling-rings' | 'shifting-moire' |
        // Additional Geometric / Grid
        'bulging-grid' | 'twisting-lines' | 'checkerboard-vortex' | 'triangle-expansion' |
        // Motion / Perceived Motion
        'rotating-rings' | 'drifting-dots' | 'ripple-illusion' | 'flowing-spiral' |
        // Additional Impossible / Perspective
        'infinite-loop-ladder' | 'impossible-hexagon' | 'depth-paradox' | 'recursive-staircase' |
        // Color / Contrast
        'neon-afterimage' | 'checker-shadow' | 'rotating-color-wheels' | 'vibrating-lines' |
        // Additional Experimental / Playful
        'magic-eye-pattern' | 'blinking-grid' | 'warped-circles' | 'impossible-star' |
        'shifting-checker' | 'curved-lines-illusion' |
        // Advanced 3D and Dynamic Illusions
        'rotating-3d-impossible' | 'depth-warp-tunnel' | 'advanced-color-contrast' |
        'motion-induced-blindness' | 'dynamic-moire-interference';
  colors: [string, string];
  intensity: number;
  speed: number;
  scale: number;
  angle: number;
}

export default function Generator({ onBack }: { onBack: () => void }) {
  const [config, setConfig] = useState<IllusionConfig>({
    type: 'checkerboard',
    colors: ['#ff00ff', '#00ffff'],
    intensity: 50,
    speed: 50,
    scale: 50,
    angle: 0
  });
  const [copiedCSS, setCopiedCSS] = useState(false);

  const previewRef = useRef<HTMLDivElement>(null);

  const randomizeConfig = () => {
    const types: IllusionConfig['type'][] = [
      'checkerboard', 'spiral', 'moire', 'waves', 'tunnel',
      'cafe-wall', 'zollner', 'hering', 'wavy-grid',
      'rotating-snakes', 'pinna-brelstaff', 'shimmering-grid',
      'penrose-triangle', 'impossible-stairs', 'endless-corridor',
      'floating-cube', 'depth-checkerboard',
      'infinity-mirror', 'wobbling-rings', 'shifting-moire',
      'bulging-grid', 'twisting-lines', 'checkerboard-vortex', 'triangle-expansion',
      'rotating-rings', 'drifting-dots', 'ripple-illusion', 'flowing-spiral',
      'infinite-loop-ladder', 'impossible-hexagon', 'depth-paradox', 'recursive-staircase',
      'neon-afterimage', 'checker-shadow', 'rotating-color-wheels', 'vibrating-lines',
      'magic-eye-pattern', 'blinking-grid', 'warped-circles', 'impossible-star',
      'shifting-checker', 'curved-lines-illusion',
      'rotating-3d-impossible', 'depth-warp-tunnel', 'advanced-color-contrast',
      'motion-induced-blindness', 'dynamic-moire-interference'
    ];
    const colors = [
      ['#ff00ff', '#00ffff'],
      ['#ff0080', '#00ff80'],
      ['#8000ff', '#ff8000'],
      ['#ff4080', '#40ff80'],
      ['#ff0040', '#0040ff']
    ];
    
    setConfig({
      type: types[Math.floor(Math.random() * types.length)],
      colors: colors[Math.floor(Math.random() * colors.length)] as [string, string],
      intensity: Math.floor(Math.random() * 100),
      speed: Math.floor(Math.random() * 100),
      scale: Math.floor(Math.random() * 100),
      angle: Math.floor(Math.random() * 360)
    });
  };

  const exportCSS = async () => {
    const css = generateCSS(config);
    try {
      await navigator.clipboard.writeText(css);
      setCopiedCSS(true);
      setTimeout(() => setCopiedCSS(false), 2000);
    } catch (err) {
      console.error('Failed to copy CSS:', err);
    }
  };

  const exportPNG = async () => {
    if (!previewRef.current) return;
    
    // This would require html2canvas or similar library
    // For now, just show a placeholder
    console.log('Export PNG functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          
          <div className="flex items-center gap-3">
            <button
              onClick={randomizeConfig}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <Shuffle className="w-4 h-4" />
              Surprise Me
            </button>
            
            <button
              onClick={exportCSS}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                copiedCSS 
                  ? 'bg-green-500/20 border border-green-500/40' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {copiedCSS ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy CSS
                </>
              )}
            </button>
            
            <button
              onClick={exportPNG}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Download className="w-4 h-4" />
              Export PNG
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Sidebar - Gallery */}
        <div className="w-80 bg-black/20 backdrop-blur-lg border-r border-white/10 p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Illusion Gallery
          </h2>
          <IllusionGallery currentType={config.type} onTypeChange={(type) => setConfig({...config, type})} />
        </div>

        {/* Center - Preview */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div ref={previewRef} className="w-full max-w-2xl aspect-square">
            <IllusionPreview config={config} />
          </div>
        </div>

        {/* Right Sidebar - Controls */}
        <div className="w-80 bg-black/20 backdrop-blur-lg border-l border-white/10 p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Customize
          </h2>
          <ControlPanel config={config} onChange={setConfig} />
        </div>
      </div>
    </div>
  );
}

function generateCSS(config: IllusionConfig): string {
  const { type, colors, intensity, speed, scale, angle } = config;
  const [color1, color2] = colors;
  const opacity = intensity / 100;
  const animationDuration = `${(100 - speed) / 10 + 1}s`;
  const scaleValue = scale / 50;

  let css = `/* Generated by Illusion Lab - ${new Date().toISOString()} */\n\n`;
  
  switch (type) {
    case 'checkerboard':
      css += `.illusion-checkerboard {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  transform: rotate(${angle}deg) scale(${scaleValue});
  background-image: 
    linear-gradient(45deg, ${color1} 25%, transparent 25%), 
    linear-gradient(-45deg, ${color1} 25%, transparent 25%), 
    linear-gradient(45deg, transparent 75%, ${color2} 75%), 
    linear-gradient(-45deg, transparent 75%, ${color2} 75%);
  background-size: ${60 * scaleValue}px ${60 * scaleValue}px;
  background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
  animation: checkerboardMove ${animationDuration} linear infinite;
}

@keyframes checkerboardMove {
  0% { 
    transform: translateX(0) translateY(0) rotate(${angle}deg) scale(${scaleValue}); 
  }
  100% { 
    transform: translateX(60px) translateY(60px) rotate(${angle}deg) scale(${scaleValue}); 
  }
}`;
      break;

    case 'spiral':
      css += `.illusion-spiral {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: conic-gradient(from ${angle}deg, ${color1}, ${color2}, ${color1});
  animation: spiralRotate ${animationDuration} linear infinite;
}

@keyframes spiralRotate {
  0% { 
    transform: rotate(${angle}deg) scale(${scaleValue}); 
  }
  100% { 
    transform: rotate(${angle + 360}deg) scale(${scaleValue}); 
  }
}`;
      break;

    case 'moire':
      css += `.illusion-moire {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-moire::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${angle}deg,
    ${color1} 0px,
    ${color1} ${2 * scaleValue}px,
    transparent ${2 * scaleValue}px,
    transparent ${4 * scaleValue}px
  );
  animation: moireShift1 ${animationDuration} ease-in-out infinite alternate;
}

.illusion-moire::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    ${angle + 90}deg,
    ${color2} 0px,
    ${color2} ${2 * scaleValue}px,
    transparent ${2 * scaleValue}px,
    transparent ${4 * scaleValue}px
  );
  animation: moireShift2 ${animationDuration} ease-in-out infinite alternate-reverse;
}

@keyframes moireShift1 {
  0% { transform: translateX(0); }
  100% { transform: translateX(${20 * scaleValue}px); }
}

@keyframes moireShift2 {
  0% { transform: translateY(0); }
  100% { transform: translateY(${20 * scaleValue}px); }
}`;
      break;

    case 'waves':
      css += `.illusion-waves {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    radial-gradient(circle at 25% 25%, ${color1} 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, ${color2} 0%, transparent 50%),
    radial-gradient(circle at 75% 25%, ${color1} 0%, transparent 50%),
    radial-gradient(circle at 25% 75%, ${color2} 0%, transparent 50%);
  animation: wavePulse ${animationDuration} ease-in-out infinite;
}

@keyframes wavePulse {
  0%, 100% { 
    transform: rotate(${angle}deg) scale(${scaleValue}); 
  }
  50% { 
    transform: rotate(${angle}deg) scale(${scaleValue * 1.2}); 
  }
}`;
      break;

    case 'tunnel':
      css += `.illusion-tunnel {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: repeating-conic-gradient(
    from ${angle}deg,
    ${color1} 0deg 20deg,
    ${color2} 20deg 40deg,
    transparent 40deg 60deg
  );
  background-size: ${100 * scaleValue}% ${100 * scaleValue}%;
  animation: tunnelZoom ${animationDuration} ease-in-out infinite;
}

@keyframes tunnelZoom {
  0%, 100% { 
    transform: scale(${scaleValue}) rotate(${angle}deg); 
  }
  50% { 
    transform: scale(${scaleValue * 1.5}) rotate(${angle + 180}deg); 
  }
}`;
      break;

    case 'cafe-wall':
      css += `.illusion-cafe-wall {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: repeating-linear-gradient(
    0deg,
    ${color1} 0px,
    ${color1} ${20 * scaleValue}px,
    ${color2} ${20 * scaleValue}px,
    ${color2} ${40 * scaleValue}px
  );
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-cafe-wall::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent ${19 * scaleValue}px,
    #000 ${19 * scaleValue}px,
    #000 ${21 * scaleValue}px
  );
  transform: translateY(${10 * scaleValue}px);
  animation: cafeWallShift ${animationDuration} linear infinite;
}

@keyframes cafeWallShift {
  0% { transform: translateY(${10 * scaleValue}px) translateX(0); }
  100% { transform: translateY(${10 * scaleValue}px) translateX(${40 * scaleValue}px); }
}`;
      break;

    case 'zollner':
      css += `.illusion-zollner {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent ${18 * scaleValue}px,
    ${color1} ${18 * scaleValue}px,
    ${color1} ${22 * scaleValue}px
  );
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-zollner::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent 0px,
    transparent ${8 * scaleValue}px,
    ${color2} ${8 * scaleValue}px,
    ${color2} ${12 * scaleValue}px
  );
  animation: zollnerShift ${animationDuration} linear infinite;
}

@keyframes zollnerShift {
  0% { transform: translateX(0); }
  100% { transform: translateX(${20 * scaleValue}px); }
}`;
      break;

    case 'hering':
      css += `.illusion-hering {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    repeating-conic-gradient(
      from ${angle}deg at center,
      transparent 0deg,
      transparent 5deg,
      ${color2} 5deg,
      ${color2} 7deg
    ),
    repeating-linear-gradient(
      90deg,
      transparent ${38 * scaleValue}px,
      ${color1} ${38 * scaleValue}px,
      ${color1} ${42 * scaleValue}px
    );
  transform: scale(${scaleValue});
  animation: heringPulse ${animationDuration} ease-in-out infinite;
}

@keyframes heringPulse {
  0%, 100% { transform: scale(${scaleValue}); }
  50% { transform: scale(${scaleValue * 1.1}); }
}`;
      break;

    case 'wavy-grid':
      css += `.illusion-wavy-grid {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    repeating-linear-gradient(
      0deg,
      ${color1} 0px,
      ${color1} 1px,
      transparent 1px,
      transparent ${20 * scaleValue}px
    ),
    repeating-linear-gradient(
      90deg,
      ${color2} 0px,
      ${color2} 1px,
      transparent 1px,
      transparent ${20 * scaleValue}px
    );
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: wavyGridDistort ${animationDuration} ease-in-out infinite;
}

@keyframes wavyGridDistort {
  0%, 100% { 
    background-position: 0 0, 0 0;
    transform: rotate(${angle}deg) scale(${scaleValue});
  }
  25% { 
    background-position: ${5 * scaleValue}px ${2 * scaleValue}px, ${2 * scaleValue}px ${5 * scaleValue}px;
    transform: rotate(${angle}deg) scale(${scaleValue});
  }
  50% { 
    background-position: 0 ${5 * scaleValue}px, ${5 * scaleValue}px 0;
    transform: rotate(${angle}deg) scale(${scaleValue});
  }
  75% { 
    background-position: -${5 * scaleValue}px ${2 * scaleValue}px, ${2 * scaleValue}px -${5 * scaleValue}px;
    transform: rotate(${angle}deg) scale(${scaleValue});
  }
}`;
      break;

    case 'rotating-snakes':
      css += `.illusion-rotating-snakes {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    radial-gradient(circle at 25% 25%, ${color1} 0%, transparent 20%),
    radial-gradient(circle at 75% 25%, ${color2} 0%, transparent 20%),
    radial-gradient(circle at 25% 75%, ${color2} 0%, transparent 20%),
    radial-gradient(circle at 75% 75%, ${color1} 0%, transparent 20%),
    conic-gradient(from ${angle}deg, ${color1}, ${color2}, ${color1});
  transform: scale(${scaleValue});
  animation: rotatingSnakes ${animationDuration} linear infinite;
}

@keyframes rotatingSnakes {
  0% { 
    transform: scale(${scaleValue}) rotate(${angle}deg);
    background-position: 0 0, 0 0, 0 0, 0 0, center;
  }
  50% { 
    transform: scale(${scaleValue * 1.1}) rotate(${angle + 180}deg);
    background-position: ${10 * scaleValue}px ${10 * scaleValue}px, 
                        -${10 * scaleValue}px ${10 * scaleValue}px,
                        ${10 * scaleValue}px -${10 * scaleValue}px,
                        -${10 * scaleValue}px -${10 * scaleValue}px, center;
  }
  100% { 
    transform: scale(${scaleValue}) rotate(${angle + 360}deg);
    background-position: 0 0, 0 0, 0 0, 0 0, center;
  }
}`;
      break;

    case 'pinna-brelstaff':
      css += `.illusion-pinna-brelstaff {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    repeating-conic-gradient(
      from 0deg,
      ${color1} 0deg 10deg,
      ${color2} 10deg 20deg
    ),
    repeating-radial-gradient(
      circle,
      transparent 0px,
      transparent ${30 * scaleValue}px,
      rgba(255,255,255,0.1) ${30 * scaleValue}px,
      rgba(255,255,255,0.1) ${32 * scaleValue}px
    );
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: pinnaBrelstaff ${animationDuration} linear infinite;
}

@keyframes pinnaBrelstaff {
  0% { transform: rotate(${angle}deg) scale(${scaleValue}); }
  100% { transform: rotate(${angle + 360}deg) scale(${scaleValue}); }
}`;
      break;

    case 'shimmering-grid':
      css += `.illusion-shimmering-grid {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    repeating-linear-gradient(
      0deg,
      ${color1} 0px,
      ${color1} 1px,
      transparent 1px,
      transparent ${30 * scaleValue}px
    ),
    repeating-linear-gradient(
      90deg,
      ${color1} 0px,
      ${color1} 1px,
      transparent 1px,
      transparent ${30 * scaleValue}px
    );
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-shimmering-grid::after {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at ${30 * scaleValue}px ${30 * scaleValue}px, ${color2} 2px, transparent 2px),
    radial-gradient(circle at ${60 * scaleValue}px ${60 * scaleValue}px, ${color2} 2px, transparent 2px);
  background-size: ${30 * scaleValue}px ${30 * scaleValue}px;
  animation: shimmerFlash ${animationDuration} ease-in-out infinite;
}

@keyframes shimmerFlash {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}`;
      break;

    case 'penrose-triangle':
      css += `.illusion-penrose-triangle {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-penrose-triangle::before {
  content: '';
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;
  background: linear-gradient(120deg, ${color1} 50%, ${color2} 50%);
  clip-path: polygon(50% 0%, 0% 100%, 25% 100%, 50% 35%, 75% 100%, 100% 100%);
  animation: penroseRotate ${animationDuration} ease-in-out infinite;
}

.illusion-penrose-triangle::after {
  content: '';
  position: absolute;
  top: 20%;
  left: 20%;
  width: 60%;
  height: 60%;
  background: linear-gradient(-120deg, ${color2} 50%, ${color1} 50%);
  clip-path: polygon(50% 0%, 0% 100%, 25% 100%, 50% 35%, 75% 100%, 100% 100%);
  animation: penroseRotate ${animationDuration} ease-in-out infinite reverse;
}

@keyframes penroseRotate {
  0%, 100% { transform: rotate(0deg); }
  33% { transform: rotate(120deg); }
  66% { transform: rotate(240deg); }
}`;
      break;

    case 'impossible-stairs':
      css += `.illusion-impossible-stairs {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    repeating-linear-gradient(
      45deg,
      ${color1} 0px,
      ${color1} ${20 * scaleValue}px,
      ${color2} ${20 * scaleValue}px,
      ${color2} ${40 * scaleValue}px
    );
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: impossibleStairs ${animationDuration} linear infinite;
}

.illusion-impossible-stairs::after {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    repeating-linear-gradient(
      -45deg,
      transparent 0px,
      transparent ${18 * scaleValue}px,
      rgba(0,0,0,0.3) ${18 * scaleValue}px,
      rgba(0,0,0,0.3) ${22 * scaleValue}px
    );
}

@keyframes impossibleStairs {
  0% { background-position: 0 0; }
  100% { background-position: ${40 * scaleValue}px ${40 * scaleValue}px; }
}`;
      break;

    case 'endless-corridor':
      css += `.illusion-endless-corridor {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    repeating-linear-gradient(
      0deg,
      ${color1} 0%,
      ${color1} 5%,
      ${color2} 5%,
      ${color2} 10%
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0%,
      transparent 20%,
      rgba(0,0,0,0.2) 20%,
      rgba(0,0,0,0.2) 25%
    );
  transform: 
    rotate(${angle}deg) 
    scale(${scaleValue})
    perspective(1000px) 
    rotateX(30deg);
  animation: endlessCorridor ${animationDuration} linear infinite;
}

@keyframes endlessCorridor {
  0% { 
    background-size: 100% 100%, 100% 100%;
    transform: 
      rotate(${angle}deg) 
      scale(${scaleValue})
      perspective(1000px) 
      rotateX(30deg);
  }
  50% { 
    background-size: 80% 80%, 90% 90%;
    transform: 
      rotate(${angle}deg) 
      scale(${scaleValue * 0.8})
      perspective(1000px) 
      rotateX(30deg);
  }
  100% { 
    background-size: 100% 100%, 100% 100%;
    transform: 
      rotate(${angle}deg) 
      scale(${scaleValue})
      perspective(1000px) 
      rotateX(30deg);
  }
}`;
      break;

    case 'floating-cube':
      css += `.illusion-floating-cube {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
  transform-style: preserve-3d;
  animation: floatingCube ${animationDuration} ease-in-out infinite;
}

.illusion-floating-cube::before {
  content: '';
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  background: linear-gradient(135deg, ${color1} 50%, ${color2} 50%);
  transform: rotateY(45deg) rotateX(30deg);
}

.illusion-floating-cube::after {
  content: '';
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  background: linear-gradient(45deg, ${color2} 50%, ${color1} 50%);
  transform: rotateY(-45deg) rotateX(-30deg);
}

@keyframes floatingCube {
  0%, 100% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) rotateX(0deg) rotateY(0deg);
  }
  25% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) rotateX(90deg) rotateY(0deg);
  }
  50% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) rotateX(90deg) rotateY(90deg);
  }
  75% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) rotateX(0deg) rotateY(90deg);
  }
}`;
      break;

    case 'depth-checkerboard':
      css += `.illusion-depth-checkerboard {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background-image: 
    linear-gradient(45deg, ${color1} 25%, transparent 25%), 
    linear-gradient(-45deg, ${color1} 25%, transparent 25%), 
    linear-gradient(45deg, transparent 75%, ${color2} 75%), 
    linear-gradient(-45deg, transparent 75%, ${color2} 75%);
  background-size: ${60 * scaleValue}px ${60 * scaleValue}px;
  background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
  transform: rotate(${angle}deg) scale(${scaleValue}) perspective(500px) rotateX(20deg);
  animation: depthCheckerboard ${animationDuration} ease-in-out infinite;
}

@keyframes depthCheckerboard {
  0%, 100% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) perspective(500px) rotateX(20deg);
    background-size: ${60 * scaleValue}px ${60 * scaleValue}px;
  }
  50% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) perspective(500px) rotateX(-20deg);
    background-size: ${40 * scaleValue}px ${40 * scaleValue}px;
  }
}`;
      break;

    // Playful / Experimental
    case 'infinity-mirror':
      css += `.illusion-infinity-mirror {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
  background: radial-gradient(circle, ${color1} 0%, ${color2} 50%, transparent 100%);
  box-shadow: 
    inset 0 0 ${20 * scaleValue}px ${color1},
    inset 0 0 ${40 * scaleValue}px ${color2},
    inset 0 0 ${60 * scaleValue}px ${color1},
    inset 0 0 ${80 * scaleValue}px ${color2},
    inset 0 0 ${100 * scaleValue}px ${color1};
  animation: infinityMirror ${animationDuration} ease-in-out infinite;
}

@keyframes infinityMirror {
  0%, 100% { 
    transform: rotate(${angle}deg) scale(${scaleValue});
    box-shadow: 
      inset 0 0 ${20 * scaleValue}px ${color1},
      inset 0 0 ${40 * scaleValue}px ${color2},
      inset 0 0 ${60 * scaleValue}px ${color1},
      inset 0 0 ${80 * scaleValue}px ${color2},
      inset 0 0 ${100 * scaleValue}px ${color1};
  }
  50% { 
    transform: rotate(${angle}deg) scale(${scaleValue * 0.8});
    box-shadow: 
      inset 0 0 ${40 * scaleValue}px ${color2},
      inset 0 0 ${60 * scaleValue}px ${color1},
      inset 0 0 ${80 * scaleValue}px ${color2},
      inset 0 0 ${100 * scaleValue}px ${color1},
      inset 0 0 ${120 * scaleValue}px ${color2};
  }
}`;
      break;

    case 'wobbling-rings':
      css += `.illusion-wobbling-rings {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    radial-gradient(circle at center, transparent ${20 * scaleValue}px, ${color1} ${22 * scaleValue}px, ${color1} ${28 * scaleValue}px, transparent ${30 * scaleValue}px),
    radial-gradient(circle at center, transparent ${40 * scaleValue}px, ${color2} ${42 * scaleValue}px, ${color2} ${48 * scaleValue}px, transparent ${50 * scaleValue}px),
    radial-gradient(circle at center, transparent ${60 * scaleValue}px, ${color1} ${62 * scaleValue}px, ${color1} ${68 * scaleValue}px, transparent ${70 * scaleValue}px);
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: wobblingRings ${animationDuration} ease-in-out infinite;
}

@keyframes wobblingRings {
  0%, 100% { 
    transform: rotate(${angle}deg) scale(${scaleValue});
  }
  25% { 
    transform: rotate(${angle}deg) scale(${scaleValue * 1.1});
  }
  50% { 
    transform: rotate(${angle}deg) scale(${scaleValue * 0.9});
  }
  75% { 
    transform: rotate(${angle}deg) scale(${scaleValue * 1.05});
  }
}`;
      break;

    case 'shifting-moire':
      css += `.illusion-shifting-moire {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-shifting-moire::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    0deg,
    ${color1} 0px,
    ${color1} ${3 * scaleValue}px,
    transparent ${3 * scaleValue}px,
    transparent ${6 * scaleValue}px
  );
}

.illusion-shifting-moire::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    2deg,
    ${color2} 0px,
    ${color2} ${3 * scaleValue}px,
    transparent ${3 * scaleValue}px,
    transparent ${6 * scaleValue}px
  );
  animation: shiftingMoire ${animationDuration} linear infinite;
}

@keyframes shiftingMoire {
  0% { transform: translateX(0) translateY(0); }
  100% { transform: translateX(${50 * scaleValue}px) translateY(${50 * scaleValue}px); }
}`;
      break;

    // Additional Geometric / Grid
    case 'bulging-grid':
      css += `.illusion-bulging-grid {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    repeating-linear-gradient(0deg, ${color1} 0px, ${color1} 1px, transparent 1px, transparent ${20 * scaleValue}px),
    repeating-linear-gradient(90deg, ${color1} 0px, ${color1} 1px, transparent 1px, transparent ${20 * scaleValue}px);
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-bulging-grid::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, ${color2} 0%, transparent 50%);
  transform: scale(0.8);
  animation: bulgingGrid ${animationDuration} ease-in-out infinite;
}

@keyframes bulgingGrid {
  0%, 100% { transform: scale(0.8); }
  50% { transform: scale(1.2); }
}`;
      break;

    case 'twisting-lines':
      css += `.illusion-twisting-lines {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent ${18 * scaleValue}px,
    ${color1} ${18 * scaleValue}px,
    ${color1} ${22 * scaleValue}px
  );
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: twistingLines ${animationDuration} ease-in-out infinite;
}

.illusion-twisting-lines::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    transparent 30%,
    ${color2} 30%,
    ${color2} 35%,
    transparent 35%,
    transparent 70%,
    ${color2} 70%,
    ${color2} 75%,
    transparent 75%
  );
}

@keyframes twistingLines {
  0%, 100% { transform: rotate(${angle}deg) scale(${scaleValue}); }
  50% { transform: rotate(${angle + 5}deg) scale(${scaleValue}); }
}`;
      break;

    case 'checkerboard-vortex':
      css += `.illusion-checkerboard-vortex {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    conic-gradient(from ${angle}deg, ${color1}, ${color2}, ${color1}),
    repeating-linear-gradient(45deg, transparent 0px, transparent ${30 * scaleValue}px, rgba(0,0,0,0.3) ${30 * scaleValue}px, rgba(0,0,0,0.3) ${60 * scaleValue}px);
  transform: scale(${scaleValue});
  animation: checkerboardVortex ${animationDuration} linear infinite;
}

@keyframes checkerboardVortex {
  0% { 
    transform: scale(${scaleValue}) rotate(${angle}deg);
    background-size: 100% 100%, ${60 * scaleValue}px ${60 * scaleValue}px;
  }
  100% { 
    transform: scale(${scaleValue}) rotate(${angle + 360}deg);
    background-size: 100% 100%, ${30 * scaleValue}px ${30 * scaleValue}px;
  }
}`;
      break;

    case 'triangle-expansion':
      css += `.illusion-triangle-expansion {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-triangle-expansion::before {
  content: '';
  position: absolute;
  top: 30%;
  left: 40%;
  width: 20%;
  height: 20%;
  background: ${color1};
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.illusion-triangle-expansion::after {
  content: '';
  position: absolute;
  top: 20%;
  left: 30%;
  width: 40%;
  height: 40%;
  background: ${color2};
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  animation: triangleExpansion ${animationDuration} ease-in-out infinite;
}

@keyframes triangleExpansion {
  0%, 100% { 
    top: 20%;
    left: 30%;
    width: 40%;
    height: 40%;
  }
  50% { 
    top: 10%;
    left: 20%;
    width: 60%;
    height: 60%;
  }
}`;
      break;

    // Motion / Perceived Motion
    case 'rotating-rings':
      css += `.illusion-rotating-rings {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    radial-gradient(circle, transparent ${30 * scaleValue}px, ${color1} ${32 * scaleValue}px, ${color1} ${38 * scaleValue}px, transparent ${40 * scaleValue}px),
    radial-gradient(circle, transparent ${50 * scaleValue}px, ${color2} ${52 * scaleValue}px, ${color2} ${58 * scaleValue}px, transparent ${60 * scaleValue}px),
    radial-gradient(circle, transparent ${70 * scaleValue}px, ${color1} ${72 * scaleValue}px, ${color1} ${78 * scaleValue}px, transparent ${80 * scaleValue}px);
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: rotatingRings ${animationDuration} linear infinite;
}

@keyframes rotatingRings {
  0% { 
    transform: rotate(${angle}deg) scale(${scaleValue});
    background-position: center, center, center;
  }
  33% { 
    transform: rotate(${angle + 120}deg) scale(${scaleValue});
    background-position: ${10 * scaleValue}px ${10 * scaleValue}px, -${10 * scaleValue}px -${10 * scaleValue}px, center;
  }
  66% { 
    transform: rotate(${angle + 240}deg) scale(${scaleValue});
    background-position: -${10 * scaleValue}px ${10 * scaleValue}px, ${10 * scaleValue}px -${10 * scaleValue}px, center;
  }
  100% { 
    transform: rotate(${angle + 360}deg) scale(${scaleValue});
    background-position: center, center, center;
  }
}`;
      break;

    case 'drifting-dots':
      css += `.illusion-drifting-dots {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    repeating-linear-gradient(0deg, transparent 0px, transparent ${18 * scaleValue}px, rgba(128,128,128,0.3) ${18 * scaleValue}px, rgba(128,128,128,0.3) ${22 * scaleValue}px),
    repeating-linear-gradient(90deg, transparent 0px, transparent ${18 * scaleValue}px, rgba(128,128,128,0.3) ${18 * scaleValue}px, rgba(128,128,128,0.3) ${22 * scaleValue}px),
    radial-gradient(circle at ${20 * scaleValue}px ${20 * scaleValue}px, ${color1} 2px, transparent 2px),
    radial-gradient(circle at ${40 * scaleValue}px ${40 * scaleValue}px, ${color2} 2px, transparent 2px);
  background-size: ${40 * scaleValue}px ${40 * scaleValue}px, ${40 * scaleValue}px ${40 * scaleValue}px, ${20 * scaleValue}px ${20 * scaleValue}px, ${20 * scaleValue}px ${20 * scaleValue}px;
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: driftingDots ${animationDuration} linear infinite;
}

@keyframes driftingDots {
  0% { 
    background-position: 0 0, 0 0, 0 0, 0 0;
  }
  100% { 
    background-position: ${40 * scaleValue}px ${40 * scaleValue}px, ${40 * scaleValue}px ${40 * scaleValue}px, ${20 * scaleValue}px ${20 * scaleValue}px, ${20 * scaleValue}px ${20 * scaleValue}px;
  }
}`;
      break;

    case 'ripple-illusion':
      css += `.illusion-ripple-illusion {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    radial-gradient(circle at center, ${color1} 0%, transparent 10%),
    radial-gradient(circle at center, transparent 15%, ${color2} 20%, transparent 25%),
    radial-gradient(circle at center, transparent 30%, ${color1} 35%, transparent 40%),
    radial-gradient(circle at center, transparent 45%, ${color2} 50%, transparent 55%);
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: rippleIllusion ${animationDuration} ease-out infinite;
}

@keyframes rippleIllusion {
  0% { 
    transform: rotate(${angle}deg) scale(${scaleValue * 0.5});
    opacity: ${opacity};
  }
  50% { 
    transform: rotate(${angle}deg) scale(${scaleValue * 1.5});
    opacity: ${opacity * 0.7};
  }
  100% { 
    transform: rotate(${angle}deg) scale(${scaleValue * 2});
    opacity: 0;
  }
}`;
      break;

    case 'flowing-spiral':
      css += `.illusion-flowing-spiral {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    conic-gradient(from 0deg, ${color1} 0deg, ${color2} 60deg, ${color1} 120deg, ${color2} 180deg, ${color1} 240deg, ${color2} 300deg, ${color1} 360deg),
    radial-gradient(circle, transparent 20%, rgba(255,255,255,0.1) 40%, transparent 60%);
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: flowingSpiral ${animationDuration} linear infinite;
}

@keyframes flowingSpiral {
  0% { 
    transform: rotate(${angle}deg) scale(${scaleValue});
    background-size: 100% 100%, 50% 50%;
  }
  50% { 
    transform: rotate(${angle + 180}deg) scale(${scaleValue * 0.8});
    background-size: 80% 80%, 100% 100%;
  }
  100% { 
    transform: rotate(${angle + 360}deg) scale(${scaleValue});
    background-size: 100% 100%, 50% 50%;
  }
}`;
      break;

    // Additional Impossible / Perspective
    case 'infinite-loop-ladder':
      css += `.illusion-infinite-loop-ladder {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    repeating-linear-gradient(
      30deg,
      ${color1} 0px,
      ${color1} ${15 * scaleValue}px,
      ${color2} ${15 * scaleValue}px,
      ${color2} ${30 * scaleValue}px
    );
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue}) perspective(1000px) rotateX(45deg) rotateY(15deg);
  animation: infiniteLoopLadder ${animationDuration} linear infinite;
}

.illusion-infinite-loop-ladder::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    150deg,
    transparent 0px,
    transparent ${13 * scaleValue}px,
    rgba(0,0,0,0.4) ${13 * scaleValue}px,
    rgba(0,0,0,0.4) ${17 * scaleValue}px
  );
}

@keyframes infiniteLoopLadder {
  0% { background-position: 0 0; }
  100% { background-position: ${30 * scaleValue}px ${30 * scaleValue}px; }
}`;
      break;

    case 'impossible-hexagon':
      css += `.illusion-impossible-hexagon {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-impossible-hexagon::before {
  content: '';
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  background: linear-gradient(60deg, ${color1} 30%, ${color2} 70%);
  clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
}

.illusion-impossible-hexagon::after {
  content: '';
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  background: linear-gradient(-60deg, ${color2} 30%, ${color1} 70%);
  clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
  animation: impossibleHexagon ${animationDuration} ease-in-out infinite;
}

@keyframes impossibleHexagon {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(60deg); }
}`;
      break;

    case 'depth-paradox':
      css += `.illusion-depth-paradox {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    linear-gradient(135deg, ${color1} 0%, ${color2} 50%, ${color1} 100%),
    repeating-linear-gradient(45deg, transparent 0px, transparent ${20 * scaleValue}px, rgba(255,255,255,0.1) ${20 * scaleValue}px, rgba(255,255,255,0.1) ${40 * scaleValue}px);
  transform: rotate(${angle}deg) scale(${scaleValue}) perspective(1000px) rotateX(30deg) rotateY(15deg);
  animation: depthParadox ${animationDuration} ease-in-out infinite;
}

@keyframes depthParadox {
  0%, 100% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) perspective(1000px) rotateX(30deg) rotateY(15deg);
  }
  50% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) perspective(1000px) rotateX(-30deg) rotateY(-15deg);
  }
}`;
      break;

    case 'recursive-staircase':
      css += `.illusion-recursive-staircase {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    repeating-linear-gradient(
      45deg,
      ${color1} 0px,
      ${color1} ${25 * scaleValue}px,
      ${color2} ${25 * scaleValue}px,
      ${color2} ${50 * scaleValue}px
    );
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: recursiveStaircase ${animationDuration} linear infinite;
}

.illusion-recursive-staircase::after {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    repeating-linear-gradient(
      -45deg,
      transparent 0px,
      transparent ${20 * scaleValue}px,
      rgba(0,0,0,0.3) ${20 * scaleValue}px,
      rgba(0,0,0,0.3) ${30 * scaleValue}px
    );
  transform: scale(0.8);
}

@keyframes recursiveStaircase {
  0% { 
    background-position: 0 0;
    background-size: ${50 * scaleValue}px ${50 * scaleValue}px;
  }
  100% { 
    background-position: ${50 * scaleValue}px ${50 * scaleValue}px;
    background-size: ${25 * scaleValue}px ${25 * scaleValue}px;
  }
}`;
      break;

    // Color / Contrast
    case 'neon-afterimage':
      css += `.illusion-neon-afterimage {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    linear-gradient(0deg, ${color1} 0%, transparent 5%, transparent 95%, ${color1} 100%),
    linear-gradient(90deg, ${color2} 0%, transparent 5%, transparent 95%, ${color2} 100%);
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
  filter: brightness(150%) saturate(200%);
  animation: neonAfterimage ${animationDuration} ease-in-out infinite;
}

.illusion-neon-afterimage::after {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(45deg, transparent 40%, ${color1} 45%, ${color1} 55%, transparent 60%),
    linear-gradient(-45deg, transparent 40%, ${color2} 45%, ${color2} 55%, transparent 60%);
  animation: neonFlicker ${animationDuration} ease-in-out infinite;
}

@keyframes neonAfterimage {
  0%, 100% { filter: brightness(150%) saturate(200%); }
  50% { filter: brightness(250%) saturate(300%) blur(1px); }
}

@keyframes neonFlicker {
  0%, 90%, 100% { opacity: 1; }
  95% { opacity: 0.7; }
}`;
      break;

    case 'checker-shadow':
      css += `.illusion-checker-shadow {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    linear-gradient(45deg, ${color1} 25%, transparent 25%), 
    linear-gradient(-45deg, ${color1} 25%, transparent 25%), 
    linear-gradient(45deg, transparent 75%, ${color1} 75%), 
    linear-gradient(-45deg, transparent 75%, ${color1} 75%);
  background-size: ${40 * scaleValue}px ${40 * scaleValue}px;
  background-position: 0 0, 0 20px, 20px -20px, -20px 0px;
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-checker-shadow::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 30%, ${color2} 40%, transparent 70%);
  mix-blend-mode: multiply;
  animation: checkerShadow ${animationDuration} ease-in-out infinite;
}

@keyframes checkerShadow {
  0%, 100% { transform: translateX(0) translateY(0); }
  50% { transform: translateX(${20 * scaleValue}px) translateY(${20 * scaleValue}px); }
}`;
      break;

    case 'rotating-color-wheels':
      css += `.illusion-rotating-color-wheels {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: conic-gradient(
    from ${angle}deg,
    ${color1} 0deg,
    ${color2} 60deg,
    ${color1} 120deg,
    ${color2} 180deg,
    ${color1} 240deg,
    ${color2} 300deg,
    ${color1} 360deg
  );
  transform: scale(${scaleValue});
  animation: rotatingColorWheels ${animationDuration} linear infinite;
  filter: hue-rotate(0deg);
}

@keyframes rotatingColorWheels {
  0% { 
    transform: scale(${scaleValue}) rotate(${angle}deg);
    filter: hue-rotate(0deg);
  }
  25% { 
    transform: scale(${scaleValue}) rotate(${angle + 90}deg);
    filter: hue-rotate(90deg);
  }
  50% { 
    transform: scale(${scaleValue}) rotate(${angle + 180}deg);
    filter: hue-rotate(180deg);
  }
  75% { 
    transform: scale(${scaleValue}) rotate(${angle + 270}deg);
    filter: hue-rotate(270deg);
  }
  100% { 
    transform: scale(${scaleValue}) rotate(${angle + 360}deg);
    filter: hue-rotate(360deg);
  }
}`;
      break;

    case 'vibrating-lines':
      css += `.illusion-vibrating-lines {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: repeating-linear-gradient(
    90deg,
    ${color1} 0px,
    ${color1} ${2 * scaleValue}px,
    ${color2} ${2 * scaleValue}px,
    ${color2} ${4 * scaleValue}px
  );
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: vibratingLines ${animationDuration} ease-in-out infinite;
}

@keyframes vibratingLines {
  0%, 100% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) translateX(0);
  }
  25% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) translateX(${2 * scaleValue}px);
  }
  50% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) translateX(0);
  }
  75% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) translateX(-${2 * scaleValue}px);
  }
}`;
      break;

    // Additional Experimental / Playful
    case 'magic-eye-pattern':
      css += `.illusion-magic-eye-pattern {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    radial-gradient(circle at 10% 10%, ${color1} 1px, transparent 1px),
    radial-gradient(circle at 30% 20%, ${color2} 1px, transparent 1px),
    radial-gradient(circle at 50% 30%, ${color1} 1px, transparent 1px),
    radial-gradient(circle at 70% 40%, ${color2} 1px, transparent 1px),
    radial-gradient(circle at 90% 50%, ${color1} 1px, transparent 1px);
  background-size: 
    ${20 * scaleValue}px ${20 * scaleValue}px,
    ${25 * scaleValue}px ${25 * scaleValue}px,
    ${30 * scaleValue}px ${30 * scaleValue}px,
    ${35 * scaleValue}px ${35 * scaleValue}px,
    ${40 * scaleValue}px ${40 * scaleValue}px;
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: magicEyePattern ${animationDuration} linear infinite;
}

@keyframes magicEyePattern {
  0% { 
    background-position: 0 0, ${5 * scaleValue}px 0, ${10 * scaleValue}px 0, ${15 * scaleValue}px 0, ${20 * scaleValue}px 0;
  }
  100% { 
    background-position: ${20 * scaleValue}px 0, ${25 * scaleValue}px 0, ${30 * scaleValue}px 0, ${35 * scaleValue}px 0, ${40 * scaleValue}px 0;
  }
}`;
      break;

    case 'blinking-grid':
      css += `.illusion-blinking-grid {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    repeating-linear-gradient(0deg, ${color1} 0px, ${color1} 1px, transparent 1px, transparent ${20 * scaleValue}px),
    repeating-linear-gradient(90deg, ${color1} 0px, ${color1} 1px, transparent 1px, transparent ${20 * scaleValue}px);
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-blinking-grid::after {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at ${10 * scaleValue}px ${10 * scaleValue}px, ${color2} 3px, transparent 3px),
    radial-gradient(circle at ${30 * scaleValue}px ${30 * scaleValue}px, ${color2} 3px, transparent 3px);
  background-size: ${20 * scaleValue}px ${20 * scaleValue}px;
  animation: blinkingGrid ${animationDuration} step-end infinite;
}

@keyframes blinkingGrid {
  0%, 50% { opacity: 0; }
  51%, 100% { opacity: 1; }
}`;
      break;

    case 'warped-circles':
      css += `.illusion-warped-circles {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    radial-gradient(ellipse 60% 80% at center, transparent ${30 * scaleValue}px, ${color1} ${32 * scaleValue}px, ${color1} ${38 * scaleValue}px, transparent ${40 * scaleValue}px),
    radial-gradient(ellipse 80% 60% at center, transparent ${50 * scaleValue}px, ${color2} ${52 * scaleValue}px, ${color2} ${58 * scaleValue}px, transparent ${60 * scaleValue}px);
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: warpedCircles ${animationDuration} ease-in-out infinite;
}

@keyframes warpedCircles {
  0%, 100% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) skew(0deg, 0deg);
  }
  25% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) skew(5deg, 0deg);
  }
  50% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) skew(0deg, 5deg);
  }
  75% { 
    transform: rotate(${angle}deg) scale(${scaleValue}) skew(-5deg, 0deg);
  }
}`;
      break;

    case 'impossible-star':
      css += `.illusion-impossible-star {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-impossible-star::before {
  content: '';
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  background: linear-gradient(72deg, ${color1} 40%, ${color2} 60%);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.illusion-impossible-star::after {
  content: '';
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  background: linear-gradient(-72deg, ${color2} 40%, ${color1} 60%);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  animation: impossibleStar ${animationDuration} ease-in-out infinite;
}

@keyframes impossibleStar {
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(72deg); }
}`;
      break;

    case 'shifting-checker':
      css += `.illusion-shifting-checker {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    linear-gradient(45deg, ${color1} 25%, transparent 25%), 
    linear-gradient(-45deg, ${color1} 25%, transparent 25%), 
    linear-gradient(45deg, transparent 75%, ${color2} 75%), 
    linear-gradient(-45deg, transparent 75%, ${color2} 75%);
  background-size: ${30 * scaleValue}px ${30 * scaleValue}px;
  background-position: 0 0, 0 15px, 15px -15px, -15px 0px;
  transform: rotate(${angle}deg) scale(${scaleValue});
  animation: shiftingChecker ${animationDuration} ease-in-out infinite;
}

.illusion-shifting-checker:hover {
  animation-play-state: paused;
  transform: rotate(${angle}deg) scale(${scaleValue}) translateX(${15 * scaleValue}px) translateY(${15 * scaleValue}px);
}

@keyframes shiftingChecker {
  0%, 100% { 
    background-position: 0 0, 0 15px, 15px -15px, -15px 0px;
  }
  50% { 
    background-position: ${15 * scaleValue}px ${15 * scaleValue}px, ${15 * scaleValue}px ${30 * scaleValue}px, ${30 * scaleValue}px 0px, 0px ${15 * scaleValue}px;
  }
}`;
      break;

    case 'curved-lines-illusion':
      css += `.illusion-curved-lines-illusion {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  background: 
    repeating-linear-gradient(
      0deg,
      transparent 0px,
      transparent ${18 * scaleValue}px,
      ${color1} ${18 * scaleValue}px,
      ${color1} ${22 * scaleValue}px
    ),
    repeating-linear-gradient(
      90deg,
      transparent 0px,
      transparent ${8 * scaleValue}px,
      ${color2} ${8 * scaleValue}px,
      ${color2} ${12 * scaleValue}px,
      transparent ${12 * scaleValue}px,
      transparent ${28 * scaleValue}px,
      ${color2} ${28 * scaleValue}px,
      ${color2} ${32 * scaleValue}px
    );
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-curved-lines-illusion::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent 0px,
    transparent ${4 * scaleValue}px,
    rgba(255,255,255,0.1) ${4 * scaleValue}px,
    rgba(255,255,255,0.1) ${8 * scaleValue}px
  );
  animation: curvedLinesIllusion ${animationDuration} ease-in-out infinite;
}

@keyframes curvedLinesIllusion {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(${10 * scaleValue}px); }
}`;
      break;

    // Advanced 3D and Dynamic Illusions
    case 'rotating-3d-impossible':
      css += `.illusion-rotating-3d-impossible {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
  transform-style: preserve-3d;
  perspective: 1000px;
}

.illusion-rotating-3d-impossible::before {
  content: '';
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  background: linear-gradient(135deg, ${color1} 30%, ${color2} 70%);
  transform: translateZ(50px);
  clip-path: polygon(0% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 100%, 30% 100%, 30% 70%, 0% 70%);
}

.illusion-rotating-3d-impossible::after {
  content: '';
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  background: linear-gradient(-135deg, ${color2} 30%, ${color1} 70%);
  transform: translateZ(-50px) rotateY(180deg);
  clip-path: polygon(0% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 100%, 30% 100%, 30% 70%, 0% 70%);
  animation: rotating3DImpossible ${animationDuration} linear infinite;
}

@keyframes rotating3DImpossible {
  0% { 
    transform: translateZ(-50px) rotateY(180deg) rotateX(0deg) rotateZ(0deg);
  }
  25% { 
    transform: translateZ(-50px) rotateY(180deg) rotateX(90deg) rotateZ(90deg);
  }
  50% { 
    transform: translateZ(-50px) rotateY(180deg) rotateX(180deg) rotateZ(180deg);
  }
  75% { 
    transform: translateZ(-50px) rotateY(180deg) rotateX(270deg) rotateZ(270deg);
  }
  100% { 
    transform: translateZ(-50px) rotateY(180deg) rotateX(360deg) rotateZ(360deg);
  }
}`;
      break;

    case 'depth-warp-tunnel':
      css += `.illusion-depth-warp-tunnel {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
  perspective: 1000px;
  background: conic-gradient(from ${angle}deg, ${color1} 0deg, ${color2} 180deg, ${color1} 360deg);
  animation: depthWarpRotation ${animationDuration} linear infinite;
}

.illusion-depth-warp-tunnel::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 80%;
  border: ${2 * scaleValue}px solid ${color1};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: depthWarpTunnel1 ${animationDuration} ease-in-out infinite;
}

.illusion-depth-warp-tunnel::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 60%;
  border: ${2 * scaleValue}px solid ${color2};
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: depthWarpTunnel2 ${animationDuration} ease-in-out infinite;
  animation-delay: 0.2s;
}

@keyframes depthWarpRotation {
  0% { 
    transform: rotate(${angle}deg) scale(${scaleValue});
  }
  100% { 
    transform: rotate(${angle + 360}deg) scale(${scaleValue});
  }
}

@keyframes depthWarpTunnel1 {
  0% { 
    transform: translate(-50%, -50%) scale(1) perspective(1000px) rotateX(0deg);
  }
  50% { 
    transform: translate(-50%, -50%) scale(0.8) perspective(1000px) rotateX(10deg);
  }
  100% { 
    transform: translate(-50%, -50%) scale(1.2) perspective(1000px) rotateX(0deg);
  }
}

@keyframes depthWarpTunnel2 {
  0% { 
    transform: translate(-50%, -50%) scale(1.2) perspective(1000px) rotateX(0deg);
  }
  50% { 
    transform: translate(-50%, -50%) scale(0.6) perspective(1000px) rotateX(-10deg);
  }
  100% { 
    transform: translate(-50%, -50%) scale(1.4) perspective(1000px) rotateX(0deg);
  }
}`;
      break;

    case 'advanced-color-contrast':
      css += `.illusion-advanced-color-contrast {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
  background-image: 
    linear-gradient(45deg, ${color1} 25%, transparent 25%), 
    linear-gradient(-45deg, ${color1} 25%, transparent 25%), 
    linear-gradient(45deg, transparent 75%, ${color1} 75%), 
    linear-gradient(-45deg, transparent 75%, ${color1} 75%);
  background-size: ${30 * scaleValue}px ${30 * scaleValue}px;
  background-position: 0 0, 0 15px, 15px -15px, -15px 0px;
}

.illusion-advanced-color-contrast::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(135deg, transparent 20%, ${color2} 30%, transparent 40%),
    linear-gradient(-45deg, transparent 60%, ${color2} 70%, transparent 80%);
  mix-blend-mode: multiply;
  filter: brightness(120%) contrast(180%);
  animation: advancedColorContrast ${animationDuration} ease-in-out infinite;
}

.illusion-advanced-color-contrast::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 30%, ${color2} 0%, transparent 40%);
  mix-blend-mode: screen;
  animation: contrastPulse ${animationDuration} ease-in-out infinite alternate;
}

@keyframes advancedColorContrast {
  0%, 100% { 
    filter: brightness(120%) contrast(180%) hue-rotate(0deg);
    background-position: 0% 0%, 100% 100%;
  }
  25% { 
    filter: brightness(140%) contrast(200%) hue-rotate(90deg);
    background-position: 25% 25%, 75% 75%;
  }
  50% { 
    filter: brightness(160%) contrast(220%) hue-rotate(180deg);
    background-position: 50% 50%, 50% 50%;
  }
  75% { 
    filter: brightness(140%) contrast(200%) hue-rotate(270deg);
    background-position: 75% 75%, 25% 25%;
  }
}

@keyframes contrastPulse {
  0% { 
    opacity: 0.3;
    transform: scale(0.8);
  }
  100% { 
    opacity: 0.8;
    transform: scale(1.2);
  }
}`;
      break;

    case 'motion-induced-blindness':
      css += `.illusion-motion-induced-blindness {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
  background: conic-gradient(from 0deg, ${color1} 0deg, ${color2} 90deg, ${color1} 180deg, ${color2} 270deg);
  animation: motionBackground ${animationDuration} linear infinite;
}

.illusion-motion-induced-blindness::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background: #ffffff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  box-shadow: 0 0 10px ${color1};
}

.illusion-motion-induced-blindness::after {
  content: '';
  position: absolute;
  top: 20%;
  left: 20%;
  width: 6px;
  height: 6px;
  background: ${color1};
  border-radius: 50%;
  animation: motionInducedBlindness ${animationDuration} ease-in-out infinite;
  box-shadow: 
    0 0 0 0 ${color2},
    60% 0 0 0 ${color1},
    0 60% 0 0 ${color2},
    60% 60% 0 0 ${color1},
    30% -10% 0 0 ${color2},
    30% 70% 0 0 ${color1},
    -10% 30% 0 0 ${color2},
    70% 30% 0 0 ${color1};
}

@keyframes motionBackground {
  0% { 
    transform: rotate(${angle}deg) scale(${scaleValue});
  }
  100% { 
    transform: rotate(${angle + 360}deg) scale(${scaleValue});
  }
}

@keyframes motionInducedBlindness {
  0%, 20% { 
    opacity: 1;
    transform: scale(1);
  }
  40%, 60% { 
    opacity: 0.1;
    transform: scale(0.5);
  }
  80%, 100% { 
    opacity: 1;
    transform: scale(1);
  }
}`;
      break;

    case 'dynamic-moire-interference':
      css += `.illusion-dynamic-moire-interference {
  width: 100%;
  height: 100%;
  opacity: ${opacity};
  position: relative;
  transform: rotate(${angle}deg) scale(${scaleValue});
}

.illusion-dynamic-moire-interference::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-conic-gradient(
    from 0deg,
    ${color1} 0deg 5deg,
    transparent 5deg 10deg
  );
  animation: moireLayer1 ${animationDuration} linear infinite;
}

.illusion-dynamic-moire-interference::after {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    repeating-conic-gradient(
      from 45deg,
      ${color2} 0deg 5deg,
      transparent 5deg 10deg
    ),
    repeating-radial-gradient(
      circle,
      transparent 0px,
      transparent ${8 * scaleValue}px,
      rgba(255,255,255,0.2) ${8 * scaleValue}px,
      rgba(255,255,255,0.2) ${10 * scaleValue}px
    );
  animation: moireLayer2 ${(100 - speed) / 10 * 1.3 + 1}s linear infinite reverse,
             moireInterference ${(100 - speed) / 10 * 0.7 + 1}s ease-in-out infinite alternate;
}

@keyframes moireLayer1 {
  0% { 
    transform: rotate(0deg) scale(1);
  }
  100% { 
    transform: rotate(360deg) scale(1);
  }
}

@keyframes moireLayer2 {
  0% { 
    transform: rotate(45deg) scale(0.9);
  }
  100% { 
    transform: rotate(-315deg) scale(1.1);
  }
}

@keyframes moireInterference {
  0% { 
    background-size: auto, ${8 * scaleValue}px ${8 * scaleValue}px;
    opacity: 0.5;
  }
  100% { 
    background-size: auto, ${16 * scaleValue}px ${16 * scaleValue}px;
    opacity: 0.8;
  }
}`;
      break;

    default:
      css += `.illusion-default {
  background: linear-gradient(45deg, ${color1}, ${color2});
}`;
  }

  css += `\n\n/* Usage: Apply the .illusion-${type} class to any HTML element */`;
  
  return css;
}
