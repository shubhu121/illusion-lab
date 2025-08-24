import { IllusionConfig } from './Generator';

const illusionTypes = [
  // Classic Illusions
  {
    type: 'checkerboard' as const,
    name: 'Checkerboard',
    description: 'Classic optical illusion with moving patterns',
    category: 'Classic'
  },
  {
    type: 'spiral' as const,
    name: 'Spiral',
    description: 'Rotating spiral creating motion illusion',
    category: 'Classic'
  },
  {
    type: 'moire' as const,
    name: 'Moiré',
    description: 'Interference patterns creating shimmer effect',
    category: 'Classic'
  },
  {
    type: 'waves' as const,
    name: 'Waves',
    description: 'Pulsing radial gradients',
    category: 'Classic'
  },
  {
    type: 'tunnel' as const,
    name: 'Tunnel',
    description: 'Zooming tunnel effect',
    category: 'Classic'
  },
  
  // Geometric / Grid-Based
  {
    type: 'cafe-wall' as const,
    name: 'Café Wall',
    description: 'Staggered checkerboard rows look slanted',
    category: 'Geometric'
  },
  {
    type: 'zollner' as const,
    name: 'Zöllner',
    description: 'Parallel lines look diagonal due to crossing lines',
    category: 'Geometric'
  },
  {
    type: 'hering' as const,
    name: 'Hering',
    description: 'Straight lines appear curved due to radial background',
    category: 'Geometric'
  },
  {
    type: 'wavy-grid' as const,
    name: 'Wavy Grid',
    description: 'Uniform grid looks warped',
    category: 'Geometric'
  },
  {
    type: 'bulging-grid' as const,
    name: 'Bulging Grid',
    description: 'Square grid that appears convex or concave',
    category: 'Geometric'
  },
  {
    type: 'twisting-lines' as const,
    name: 'Twisting Lines',
    description: 'Parallel lines that seem to twist around a point',
    category: 'Geometric'
  },
  {
    type: 'checkerboard-vortex' as const,
    name: 'Checkerboard Vortex',
    description: 'Checkerboard squares spiraling inward',
    category: 'Geometric'
  },
  {
    type: 'triangle-expansion' as const,
    name: 'Triangle Expansion',
    description: 'Triangles appear larger or smaller due to surroundings',
    category: 'Geometric'
  },
  
  // Motion Illusions
  {
    type: 'rotating-snakes' as const,
    name: 'Rotating Snakes',
    description: 'Circular patterns that seem to spin',
    category: 'Motion'
  },
  {
    type: 'pinna-brelstaff' as const,
    name: 'Pinna-Brelstaff',
    description: 'Concentric circles appear to rotate',
    category: 'Motion'
  },
  {
    type: 'shimmering-grid' as const,
    name: 'Shimmering Grid',
    description: 'Intersections look like they\'re flashing',
    category: 'Motion'
  },
  {
    type: 'rotating-rings' as const,
    name: 'Rotating Rings',
    description: 'Concentric rings appear to rotate in opposite directions',
    category: 'Motion'
  },
  {
    type: 'drifting-dots' as const,
    name: 'Drifting Dots',
    description: 'Dots in a grid appear to move diagonally',
    category: 'Motion'
  },
  {
    type: 'ripple-illusion' as const,
    name: 'Ripple Illusion',
    description: 'Circles expand outward creating wave effect',
    category: 'Motion'
  },
  {
    type: 'flowing-spiral' as const,
    name: 'Flowing Spiral',
    description: 'Spiral pattern looks like it\'s moving inward',
    category: 'Motion'
  },
  
  // Impossible Shapes
  {
    type: 'penrose-triangle' as const,
    name: 'Penrose Triangle',
    description: 'Impossible triangle that defies perspective',
    category: 'Impossible'
  },
  {
    type: 'impossible-stairs' as const,
    name: 'Impossible Stairs',
    description: 'Escher-style endless staircase',
    category: 'Impossible'
  },
  {
    type: 'endless-corridor' as const,
    name: 'Endless Corridor',
    description: 'Infinite perspective corridor',
    category: 'Impossible'
  },
  {
    type: 'infinite-loop-ladder' as const,
    name: 'Infinite Loop Ladder',
    description: 'Ladder that goes up endlessly in a loop',
    category: 'Impossible'
  },
  {
    type: 'impossible-hexagon' as const,
    name: 'Impossible Hexagon',
    description: 'Hexagon edges look inconsistent creating impossible shape',
    category: 'Impossible'
  },
  {
    type: 'depth-paradox' as const,
    name: 'Depth Paradox',
    description: 'Flat 2D shapes appear 3D',
    category: 'Impossible'
  },
  {
    type: 'recursive-staircase' as const,
    name: 'Recursive Staircase',
    description: 'Staircase loops back onto itself infinitely',
    category: 'Impossible'
  },
  
  // Depth & Perspective
  {
    type: 'floating-cube' as const,
    name: 'Floating Cube',
    description: 'Cube that flips between 2D and 3D',
    category: 'Depth'
  },
  {
    type: 'depth-checkerboard' as const,
    name: 'Depth Checkerboard',
    description: 'Checkerboard with 3D depth illusion',
    category: 'Depth'
  },
  
  // Playful / Experimental
  {
    type: 'infinity-mirror' as const,
    name: 'Infinity Mirror',
    description: 'Concentric frames shrinking inward forever',
    category: 'Playful'
  },
  {
    type: 'wobbling-rings' as const,
    name: 'Wobbling Rings',
    description: 'Concentric circles breathe in and out',
    category: 'Playful'
  },
  {
    type: 'shifting-moire' as const,
    name: 'Shifting Moiré',
    description: 'Two overlapping grids create living interference',
    category: 'Playful'
  },
  {
    type: 'magic-eye-pattern' as const,
    name: 'Magic Eye Pattern',
    description: 'Stereogram-like dots that appear 3D',
    category: 'Playful'
  },
  {
    type: 'blinking-grid' as const,
    name: 'Blinking Grid',
    description: 'Grid cells appear to flicker even though static',
    category: 'Playful'
  },
  {
    type: 'warped-circles' as const,
    name: 'Warped Circles',
    description: 'Concentric circles look elliptical or warped',
    category: 'Playful'
  },
  {
    type: 'impossible-star' as const,
    name: 'Impossible Star',
    description: 'Star shape with impossible overlapping points',
    category: 'Playful'
  },
  {
    type: 'shifting-checker' as const,
    name: 'Shifting Checker',
    description: 'Checkerboard squares move when eyes track cursor',
    category: 'Playful'
  },
  {
    type: 'curved-lines-illusion' as const,
    name: 'Curved Lines',
    description: 'Straight parallel lines appear curved over wavy background',
    category: 'Playful'
  },
  
  // Color / Contrast
  {
    type: 'neon-afterimage' as const,
    name: 'Neon Afterimage',
    description: 'Bright lines leave an apparent ghost trail',
    category: 'Color'
  },
  {
    type: 'checker-shadow' as const,
    name: 'Checker Shadow',
    description: 'Same color squares appear different due to shadows',
    category: 'Color'
  },
  {
    type: 'rotating-color-wheels' as const,
    name: 'Rotating Color Wheels',
    description: 'Color sectors appear to shift hue as they spin',
    category: 'Color'
  },
  {
    type: 'vibrating-lines' as const,
    name: 'Vibrating Lines',
    description: 'High-contrast parallel lines appear to wiggle',
    category: 'Color'
  },
  
  // Advanced 3D and Dynamic Illusions
  {
    type: 'rotating-3d-impossible' as const,
    name: 'Rotating 3D Impossible',
    description: 'Impossible cube that rotates in 3D space without breaking illusion',
    category: 'Advanced'
  },
  {
    type: 'depth-warp-tunnel' as const,
    name: 'Depth Warp Tunnel',
    description: 'Tunnel illusion that looks like it\'s receding infinitely',
    category: 'Advanced'
  },
  {
    type: 'advanced-color-contrast' as const,
    name: 'Advanced Color Contrast',
    description: 'Advanced checker shadow with animated gradients',
    category: 'Advanced'
  },
  {
    type: 'motion-induced-blindness' as const,
    name: 'Motion-Induced Blindness',
    description: 'Dots disappear when you stare at the central point',
    category: 'Advanced'
  },
  {
    type: 'dynamic-moire-interference' as const,
    name: 'Dynamic Moiré Interference',
    description: 'Overlapping grids create complex interference patterns',
    category: 'Advanced'
  }
];

interface IllusionGalleryProps {
  currentType: IllusionConfig['type'];
  onTypeChange: (type: IllusionConfig['type']) => void;
}

export default function IllusionGallery({ currentType, onTypeChange }: IllusionGalleryProps) {
  const categories = ['Classic', 'Geometric', 'Motion', 'Impossible', 'Depth', 'Playful', 'Color', 'Advanced'];
  
  const renderPreview = (type: IllusionConfig['type']) => {
    const isActive = type === currentType;
    
    switch (type) {
      case 'checkerboard':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #ff00ff 25%, transparent 25%), 
                linear-gradient(-45deg, #ff00ff 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, #00ffff 75%), 
                linear-gradient(-45deg, transparent 75%, #00ffff 75%)
              `,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
              opacity: isActive ? 1 : 0.6
            }}
          />
        );
      
      case 'spiral':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `conic-gradient(from 0deg, #ff00ff, #00ffff, #ff00ff)`,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );
      
      case 'moire':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  #ff00ff 0px,
                  #ff00ff 1px,
                  transparent 1px,
                  transparent 2px
                )`,
                opacity: isActive ? 0.8 : 0.5
              }}
            />
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  #00ffff 0px,
                  #00ffff 1px,
                  transparent 1px,
                  transparent 2px
                )`,
                opacity: isActive ? 0.8 : 0.5
              }}
            />
          </div>
        );
      
      case 'waves':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, #ff00ff 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, #00ffff 0%, transparent 50%)
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );
      
      case 'tunnel':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                repeating-conic-gradient(
                  from 0deg,
                  #ff00ff 0deg 15deg,
                  #00ffff 15deg 30deg,
                  transparent 30deg 45deg
                )
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );
      
      case 'cafe-wall':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(0deg, #ff00ff 0px, #ff00ff 10px, #00ffff 10px, #00ffff 20px)`,
                opacity: isActive ? 0.8 : 0.5
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(90deg, transparent 0px, transparent 9px, #000 9px, #000 11px)`,
                transform: 'translateY(5px)',
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );
      
      case 'zollner':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(0deg, transparent 0px, transparent 9px, #ff00ff 9px, #ff00ff 11px)`,
                opacity: isActive ? 0.8 : 0.5
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(45deg, transparent 0px, transparent 4px, #00ffff 4px, #00ffff 6px)`,
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );
      
      case 'hering':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                repeating-conic-gradient(from 0deg at center, transparent 0deg, transparent 5deg, #00ffff 5deg, #00ffff 7deg),
                repeating-linear-gradient(90deg, transparent 19px, #ff00ff 19px, #ff00ff 21px)
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );
      
      case 'wavy-grid':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                repeating-linear-gradient(0deg, #ff00ff 0px, #ff00ff 1px, transparent 1px, transparent 10px),
                repeating-linear-gradient(90deg, #00ffff 0px, #00ffff 1px, transparent 1px, transparent 10px)
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );
      
      case 'rotating-snakes':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at 25% 25%, #ff00ff 0%, transparent 20%),
                radial-gradient(circle at 75% 75%, #00ffff 0%, transparent 20%),
                conic-gradient(from 0deg, #ff00ff, #00ffff, #ff00ff)
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );
      
      case 'pinna-brelstaff':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                repeating-conic-gradient(from 0deg, #ff00ff 0deg 10deg, #00ffff 10deg 20deg),
                repeating-radial-gradient(circle, transparent 0px, transparent 15px, rgba(255,255,255,0.2) 15px, rgba(255,255,255,0.2) 16px)
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );
      
      case 'shimmering-grid':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-linear-gradient(0deg, #ff00ff 0px, #ff00ff 1px, transparent 1px, transparent 15px),
                  repeating-linear-gradient(90deg, #ff00ff 0px, #ff00ff 1px, transparent 1px, transparent 15px)
                `,
                opacity: isActive ? 0.8 : 0.5
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at 15px 15px, #00ffff 1px, transparent 1px)`,
                backgroundSize: '15px 15px',
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );
      
      case 'penrose-triangle':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '60%',
                height: '60%',
                background: `linear-gradient(120deg, #ff00ff 50%, #00ffff 50%)`,
                clipPath: 'polygon(50% 0%, 0% 100%, 25% 100%, 50% 35%, 75% 100%, 100% 100%)',
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );
      
      case 'impossible-stairs':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                repeating-linear-gradient(45deg, #ff00ff 0px, #ff00ff 10px, #00ffff 10px, #00ffff 20px),
                repeating-linear-gradient(-45deg, transparent 0px, transparent 9px, rgba(0,0,0,0.3) 9px, rgba(0,0,0,0.3) 11px)
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );
      
      case 'endless-corridor':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                repeating-linear-gradient(0deg, #ff00ff 0%, #ff00ff 5%, #00ffff 5%, #00ffff 10%),
                repeating-linear-gradient(90deg, transparent 0%, transparent 20%, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.2) 25%)
              `,
              transform: 'perspective(100px) rotateX(15deg)',
              opacity: isActive ? 1 : 0.6
            }}
          />
        );
      
      case 'floating-cube':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: '50%',
                height: '50%',
                background: `linear-gradient(135deg, #ff00ff 50%, #00ffff 50%)`,
                transform: 'rotateY(25deg) rotateX(15deg)',
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );
      
      case 'depth-checkerboard':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #ff00ff 25%, transparent 25%), 
                linear-gradient(-45deg, #ff00ff 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, #00ffff 75%), 
                linear-gradient(-45deg, transparent 75%, #00ffff 75%)
              `,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
              transform: 'perspective(100px) rotateX(10deg)',
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      // Playful / Experimental
      case 'infinity-mirror':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `radial-gradient(circle, #ff00ff 0%, #00ffff 50%, transparent 100%)`,
              boxShadow: `inset 0 0 10px #ff00ff, inset 0 0 20px #00ffff, inset 0 0 30px #ff00ff`,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      case 'wobbling-rings':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at center, transparent 10px, #ff00ff 12px, #ff00ff 18px, transparent 20px),
                radial-gradient(circle at center, transparent 25px, #00ffff 27px, #00ffff 33px, transparent 35px)
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      case 'shifting-moire':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(0deg, #ff00ff 0px, #ff00ff 2px, transparent 2px, transparent 4px)`,
                opacity: isActive ? 0.8 : 0.5
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(2deg, #00ffff 0px, #00ffff 2px, transparent 2px, transparent 4px)`,
                opacity: isActive ? 0.8 : 0.5
              }}
            />
          </div>
        );

      // Additional Geometric / Grid
      case 'bulging-grid':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-linear-gradient(0deg, #ff00ff 0px, #ff00ff 1px, transparent 1px, transparent 15px),
                  repeating-linear-gradient(90deg, #ff00ff 0px, #ff00ff 1px, transparent 1px, transparent 15px)
                `,
                opacity: isActive ? 0.8 : 0.5
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at center, #00ffff 0%, transparent 50%)`,
                transform: 'scale(0.6)',
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );

      case 'twisting-lines':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(0deg, transparent 0px, transparent 9px, #ff00ff 9px, #ff00ff 11px)`,
                opacity: isActive ? 0.8 : 0.5
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at center, transparent 30%, #00ffff 35%, transparent 40%)`,
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );

      case 'checkerboard-vortex':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                conic-gradient(from 0deg, #ff00ff, #00ffff, #ff00ff),
                repeating-linear-gradient(45deg, transparent 0px, transparent 15px, rgba(0,0,0,0.3) 15px, rgba(0,0,0,0.3) 30px)
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      case 'triangle-expansion':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                top: '30%',
                left: '40%',
                width: '20%',
                height: '20%',
                background: '#ff00ff',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                opacity: isActive ? 1 : 0.6
              }}
            />
            <div 
              style={{
                position: 'absolute',
                top: '20%',
                left: '30%',
                width: '40%',
                height: '40%',
                background: '#00ffff',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                opacity: isActive ? 0.7 : 0.4
              }}
            />
          </div>
        );

      // Motion / Perceived Motion
      case 'rotating-rings':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                radial-gradient(circle, transparent 15px, #ff00ff 17px, #ff00ff 23px, transparent 25px),
                radial-gradient(circle, transparent 30px, #00ffff 32px, #00ffff 38px, transparent 40px)
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      case 'drifting-dots':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-linear-gradient(0deg, transparent 0px, transparent 9px, rgba(128,128,128,0.3) 9px, rgba(128,128,128,0.3) 11px),
                  repeating-linear-gradient(90deg, transparent 0px, transparent 9px, rgba(128,128,128,0.3) 9px, rgba(128,128,128,0.3) 11px)
                `,
                opacity: isActive ? 0.8 : 0.5
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(circle at 10px 10px, #ff00ff 1px, transparent 1px),
                  radial-gradient(circle at 20px 20px, #00ffff 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );

      case 'ripple-illusion':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at center, #ff00ff 0%, transparent 10%),
                radial-gradient(circle at center, transparent 15%, #00ffff 20%, transparent 25%),
                radial-gradient(circle at center, transparent 30%, #ff00ff 35%, transparent 40%)
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      case 'flowing-spiral':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                conic-gradient(from 0deg, #ff00ff 0deg, #00ffff 60deg, #ff00ff 120deg, #00ffff 180deg, #ff00ff 240deg, #00ffff 300deg, #ff00ff 360deg),
                radial-gradient(circle, transparent 20%, rgba(255,255,255,0.1) 40%, transparent 60%)
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      // Additional Impossible / Perspective
      case 'infinite-loop-ladder':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `repeating-linear-gradient(30deg, #ff00ff 0px, #ff00ff 8px, #00ffff 8px, #00ffff 16px)`,
              transform: 'perspective(100px) rotateX(30deg) rotateY(10deg)',
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      case 'impossible-hexagon':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: '50%',
                height: '50%',
                background: `linear-gradient(60deg, #ff00ff 30%, #00ffff 70%)`,
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );

      case 'depth-paradox':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                linear-gradient(135deg, #ff00ff 0%, #00ffff 50%, #ff00ff 100%),
                repeating-linear-gradient(45deg, transparent 0px, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)
              `,
              transform: 'perspective(100px) rotateX(20deg) rotateY(10deg)',
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      case 'recursive-staircase':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                repeating-linear-gradient(45deg, #ff00ff 0px, #ff00ff 12px, #00ffff 12px, #00ffff 24px),
                repeating-linear-gradient(-45deg, transparent 0px, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 15px)
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      // Color / Contrast
      case 'neon-afterimage':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                linear-gradient(0deg, #ff00ff 0%, transparent 5%, transparent 95%, #ff00ff 100%),
                linear-gradient(90deg, #00ffff 0%, transparent 5%, transparent 95%, #00ffff 100%)
              `,
              filter: 'brightness(150%) saturate(200%)',
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      case 'checker-shadow':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(45deg, #ff00ff 25%, transparent 25%), 
                  linear-gradient(-45deg, #ff00ff 25%, transparent 25%), 
                  linear-gradient(45deg, transparent 75%, #ff00ff 75%), 
                  linear-gradient(-45deg, transparent 75%, #ff00ff 75%)
                `,
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                opacity: isActive ? 0.8 : 0.5
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, transparent 30%, #00ffff 40%, transparent 70%)`,
                mixBlendMode: 'multiply',
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );

      case 'rotating-color-wheels':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `conic-gradient(from 0deg, #ff00ff 0deg, #00ffff 60deg, #ff00ff 120deg, #00ffff 180deg, #ff00ff 240deg, #00ffff 300deg, #ff00ff 360deg)`,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      case 'vibrating-lines':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `repeating-linear-gradient(90deg, #ff00ff 0px, #ff00ff 2px, #00ffff 2px, #00ffff 4px)`,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      // Additional Experimental / Playful
      case 'magic-eye-pattern':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at 10% 10%, #ff00ff 1px, transparent 1px),
                radial-gradient(circle at 30% 20%, #00ffff 1px, transparent 1px),
                radial-gradient(circle at 50% 30%, #ff00ff 1px, transparent 1px),
                radial-gradient(circle at 70% 40%, #00ffff 1px, transparent 1px)
              `,
              backgroundSize: '10px 10px, 12px 12px, 14px 14px, 16px 16px',
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      case 'blinking-grid':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-linear-gradient(0deg, #ff00ff 0px, #ff00ff 1px, transparent 1px, transparent 15px),
                  repeating-linear-gradient(90deg, #ff00ff 0px, #ff00ff 1px, transparent 1px, transparent 15px)
                `,
                opacity: isActive ? 0.8 : 0.5
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at 7px 7px, #00ffff 2px, transparent 2px)`,
                backgroundSize: '15px 15px',
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );

      case 'warped-circles':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                radial-gradient(ellipse 60% 80% at center, transparent 15px, #ff00ff 17px, #ff00ff 23px, transparent 25px),
                radial-gradient(ellipse 80% 60% at center, transparent 25px, #00ffff 27px, #00ffff 33px, transparent 35px)
              `,
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      case 'impossible-star':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: '50%',
                height: '50%',
                background: `linear-gradient(72deg, #ff00ff 40%, #00ffff 60%)`,
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );

      case 'shifting-checker':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(45deg, #ff00ff 25%, transparent 25%), 
                linear-gradient(-45deg, #ff00ff 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, #00ffff 75%), 
                linear-gradient(-45deg, transparent 75%, #00ffff 75%)
              `,
              backgroundSize: '15px 15px',
              backgroundPosition: '0 0, 0 7px, 7px -7px, -7px 0px',
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      case 'curved-lines-illusion':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(0deg, transparent 0px, transparent 9px, #ff00ff 9px, #ff00ff 11px)`,
                opacity: isActive ? 0.8 : 0.5
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(45deg, transparent 0px, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 8px)`,
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );

      // Advanced 3D and Dynamic Illusions
      case 'rotating-3d-impossible':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '60%',
                height: '60%',
                background: `linear-gradient(135deg, #ff00ff 30%, #00ffff 70%)`,
                transformStyle: 'preserve-3d',
                transform: 'rotateX(30deg) rotateY(45deg)',
                opacity: isActive ? 1 : 0.6
              }}
            />
            <div 
              style={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: '50%',
                height: '50%',
                background: `linear-gradient(-135deg, #00ffff 30%, #ff00ff 70%)`,
                transformStyle: 'preserve-3d',
                transform: 'rotateX(-30deg) rotateY(-45deg)',
                opacity: isActive ? 0.8 : 0.5
              }}
            />
          </div>
        );

      case 'depth-warp-tunnel':
        return (
          <div 
            className="w-full h-24 rounded-lg overflow-hidden"
            style={{
              background: `
                radial-gradient(circle, transparent 5px, #ff00ff 7px, #ff00ff 10px, transparent 12px),
                radial-gradient(circle, transparent 15px, #00ffff 17px, #00ffff 20px, transparent 22px),
                radial-gradient(circle, transparent 25px, #ff00ff 27px, #ff00ff 30px, transparent 32px)
              `,
              transform: 'perspective(200px) rotateX(15deg)',
              opacity: isActive ? 1 : 0.6
            }}
          />
        );

      case 'advanced-color-contrast':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(45deg, #ff00ff 25%, transparent 25%), 
                  linear-gradient(-45deg, #ff00ff 25%, transparent 25%), 
                  linear-gradient(45deg, transparent 75%, #ff00ff 75%), 
                  linear-gradient(-45deg, transparent 75%, #ff00ff 75%)
                `,
                backgroundSize: '15px 15px',
                backgroundPosition: '0 0, 0 7px, 7px -7px, -7px 0px',
                opacity: isActive ? 0.8 : 0.5
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, transparent 20%, #00ffff 50%, transparent 80%)`,
                mixBlendMode: 'multiply',
                filter: 'brightness(120%) contrast(150%)',
                opacity: isActive ? 1 : 0.6
              }}
            />
          </div>
        );

      case 'motion-induced-blindness':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '6px',
                height: '6px',
                background: '#ffffff',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: isActive ? 1 : 0.6
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(circle at 20% 20%, #ff00ff 2px, transparent 2px),
                  radial-gradient(circle at 80% 20%, #00ffff 2px, transparent 2px),
                  radial-gradient(circle at 20% 80%, #00ffff 2px, transparent 2px),
                  radial-gradient(circle at 80% 80%, #ff00ff 2px, transparent 2px)
                `,
                backgroundSize: '40px 40px',
                opacity: isActive ? 0.8 : 0.5
              }}
            />
          </div>
        );

      case 'dynamic-moire-interference':
        return (
          <div className="w-full h-24 rounded-lg overflow-hidden relative">
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-conic-gradient(from 0deg, #ff00ff 0deg 5deg, transparent 5deg 10deg),
                  repeating-conic-gradient(from 45deg, #00ffff 0deg 5deg, transparent 5deg 10deg)
                `,
                opacity: isActive ? 1 : 0.6
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-radial-gradient(circle, transparent 0px, transparent 8px, rgba(255,255,255,0.2) 8px, rgba(255,255,255,0.2) 10px)`,
                opacity: isActive ? 0.8 : 0.5
              }}
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {categories.map((category) => (
        <div key={category} className="space-y-3">
          <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider border-b border-cyan-400/20 pb-1">
            {category}
          </h3>
          <div className="space-y-2">
            {illusionTypes
              .filter((illusion) => illusion.category === category)
              .map((illusion) => (
                <button
                  key={illusion.type}
                  onClick={() => onTypeChange(illusion.type)}
                  className={`w-full p-3 rounded-xl border transition-all duration-300 text-left ${
                    currentType === illusion.type
                      ? 'bg-white/10 border-cyan-400 shadow-lg shadow-cyan-400/20'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {renderPreview(illusion.type)}
                  <div className="mt-2">
                    <h4 className="font-semibold text-white text-xs">{illusion.name}</h4>
                    <p className="text-gray-400 text-xs mt-1 leading-tight">{illusion.description}</p>
                  </div>
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
