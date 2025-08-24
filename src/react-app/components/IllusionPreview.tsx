import { IllusionConfig } from './Generator';

export default function IllusionPreview({ config }: { config: IllusionConfig }) {
  const renderIllusion = () => {
    const { type, colors, intensity, speed, scale, angle } = config;
    const [color1, color2] = colors;
    const opacity = intensity / 100;
    const animationDuration = `${(100 - speed) / 10 + 1}s`;
    const scaleValue = scale / 50;
    
    const baseStyle = {
      width: '100%',
      height: '100%',
      opacity,
      transform: `rotate(${angle}deg) scale(${scaleValue})`,
      transition: 'all 0.3s ease'
    };

    switch (type) {
      case 'checkerboard':
        return (
          <div
            style={{
              ...baseStyle,
              backgroundImage: `
                linear-gradient(45deg, ${color1} 25%, transparent 25%), 
                linear-gradient(-45deg, ${color1} 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, ${color2} 75%), 
                linear-gradient(-45deg, transparent 75%, ${color2} 75%)
              `,
              backgroundSize: `${60 * scaleValue}px ${60 * scaleValue}px`,
              backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
              animation: `checkerboardMove ${animationDuration} linear infinite`
            }}
          />
        );
      
      case 'spiral':
        return (
          <div
            style={{
              ...baseStyle,
              background: `conic-gradient(from ${angle}deg, ${color1}, ${color2}, ${color1})`,
              animation: `spiralRotate ${animationDuration} linear infinite`
            }}
          />
        );
      
      case 'moire':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `repeating-linear-gradient(
                  ${angle}deg,
                  ${color1} 0px,
                  ${color1} ${2 * scaleValue}px,
                  transparent ${2 * scaleValue}px,
                  transparent ${4 * scaleValue}px
                )`,
                animation: `moireShift1 ${animationDuration} ease-in-out infinite alternate`
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `repeating-linear-gradient(
                  ${angle + 90}deg,
                  ${color2} 0px,
                  ${color2} ${2 * scaleValue}px,
                  transparent ${2 * scaleValue}px,
                  transparent ${4 * scaleValue}px
                )`,
                animation: `moireShift2 ${animationDuration} ease-in-out infinite alternate-reverse`
              }}
            />
          </div>
        );
      
      case 'waves':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
                radial-gradient(circle at 25% 25%, ${color1} 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, ${color2} 0%, transparent 50%),
                radial-gradient(circle at 75% 25%, ${color1} 0%, transparent 50%),
                radial-gradient(circle at 25% 75%, ${color2} 0%, transparent 50%)
              `,
              animation: `wavePulse ${animationDuration} ease-in-out infinite`
            }}
          />
        );
      
      case 'tunnel':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
                repeating-conic-gradient(
                  from ${angle}deg,
                  ${color1} 0deg 20deg,
                  ${color2} 20deg 40deg,
                  transparent 40deg 60deg
                )
              `,
              backgroundSize: `${100 * scaleValue}% ${100 * scaleValue}%`,
              animation: `tunnelZoom ${animationDuration} ease-in-out infinite`
            }}
          />
        );

      case 'cafe-wall':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(
                  0deg,
                  ${color1} 0px,
                  ${color1} ${20 * scaleValue}px,
                  ${color2} ${20 * scaleValue}px,
                  ${color2} ${40 * scaleValue}px
                )`
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(
                  90deg,
                  transparent 0px,
                  transparent ${19 * scaleValue}px,
                  #000 ${19 * scaleValue}px,
                  #000 ${21 * scaleValue}px
                )`,
                transform: `translateY(${10 * scaleValue}px)`,
                animation: `cafeWallShift ${animationDuration} linear infinite`
              }}
            />
          </div>
        );

      case 'zollner':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(
                  0deg,
                  transparent 0px,
                  transparent ${18 * scaleValue}px,
                  ${color1} ${18 * scaleValue}px,
                  ${color1} ${22 * scaleValue}px
                )`
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(
                  45deg,
                  transparent 0px,
                  transparent ${8 * scaleValue}px,
                  ${color2} ${8 * scaleValue}px,
                  ${color2} ${12 * scaleValue}px
                )`,
                animation: `zollnerShift ${animationDuration} linear infinite`
              }}
            />
          </div>
        );

      case 'hering':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
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
                )
              `,
              animation: `heringPulse ${animationDuration} ease-in-out infinite`
            }}
          />
        );

      case 'wavy-grid':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
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
                )
              `,
              animation: `wavyGridDistort ${animationDuration} ease-in-out infinite`
            }}
          />
        );

      case 'rotating-snakes':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
                radial-gradient(circle at 25% 25%, ${color1} 0%, transparent 20%),
                radial-gradient(circle at 75% 25%, ${color2} 0%, transparent 20%),
                radial-gradient(circle at 25% 75%, ${color2} 0%, transparent 20%),
                radial-gradient(circle at 75% 75%, ${color1} 0%, transparent 20%),
                conic-gradient(from ${angle}deg, ${color1}, ${color2}, ${color1})
              `,
              animation: `rotatingSnakes ${animationDuration} linear infinite`
            }}
          />
        );

      case 'pinna-brelstaff':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
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
                )
              `,
              animation: `pinnaBrelstaff ${animationDuration} linear infinite`
            }}
          />
        );

      case 'shimmering-grid':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
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
                  )
                `
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(circle at ${30 * scaleValue}px ${30 * scaleValue}px, ${color2} 2px, transparent 2px),
                  radial-gradient(circle at ${60 * scaleValue}px ${60 * scaleValue}px, ${color2} 2px, transparent 2px)
                `,
                backgroundSize: `${30 * scaleValue}px ${30 * scaleValue}px`,
                animation: `shimmerFlash ${animationDuration} ease-in-out infinite`
              }}
            />
          </div>
        );

      case 'penrose-triangle':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '60%',
                height: '60%',
                background: `linear-gradient(120deg, ${color1} 50%, ${color2} 50%)`,
                clipPath: 'polygon(50% 0%, 0% 100%, 25% 100%, 50% 35%, 75% 100%, 100% 100%)',
                animation: `penroseRotate ${animationDuration} ease-in-out infinite`
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                width: '60%',
                height: '60%',
                background: `linear-gradient(-120deg, ${color2} 50%, ${color1} 50%)`,
                clipPath: 'polygon(50% 0%, 0% 100%, 25% 100%, 50% 35%, 75% 100%, 100% 100%)',
                animation: `penroseRotate ${animationDuration} ease-in-out infinite reverse`
              }}
            />
          </div>
        );

      case 'impossible-stairs':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-linear-gradient(
                    45deg,
                    ${color1} 0px,
                    ${color1} ${20 * scaleValue}px,
                    ${color2} ${20 * scaleValue}px,
                    ${color2} ${40 * scaleValue}px
                  )
                `,
                animation: `impossibleStairs ${animationDuration} linear infinite`
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-linear-gradient(
                    -45deg,
                    transparent 0px,
                    transparent ${18 * scaleValue}px,
                    rgba(0,0,0,0.3) ${18 * scaleValue}px,
                    rgba(0,0,0,0.3) ${22 * scaleValue}px
                  )
                `
              }}
            />
          </div>
        );

      case 'endless-corridor':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
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
                )
              `,
              transform: `
                rotate(${angle}deg) 
                scale(${scaleValue})
                perspective(1000px) 
                rotateX(30deg)
              `,
              animation: `endlessCorridor ${animationDuration} linear infinite`
            }}
          />
        );

      case 'floating-cube':
        return (
          <div style={{ ...baseStyle, position: 'relative', transformStyle: 'preserve-3d' }}>
            <div
              style={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: '50%',
                height: '50%',
                background: `linear-gradient(135deg, ${color1} 50%, ${color2} 50%)`,
                transform: 'rotateY(45deg) rotateX(30deg)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: '50%',
                height: '50%',
                background: `linear-gradient(45deg, ${color2} 50%, ${color1} 50%)`,
                transform: 'rotateY(-45deg) rotateX(-30deg)',
                animation: `floatingCube ${animationDuration} ease-in-out infinite`
              }}
            />
          </div>
        );

      case 'depth-checkerboard':
        return (
          <div
            style={{
              ...baseStyle,
              backgroundImage: `
                linear-gradient(45deg, ${color1} 25%, transparent 25%), 
                linear-gradient(-45deg, ${color1} 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, ${color2} 75%), 
                linear-gradient(-45deg, transparent 75%, ${color2} 75%)
              `,
              backgroundSize: `${60 * scaleValue}px ${60 * scaleValue}px`,
              backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
              transform: `rotate(${angle}deg) scale(${scaleValue}) perspective(500px) rotateX(20deg)`,
              animation: `depthCheckerboard ${animationDuration} ease-in-out infinite`
            }}
          />
        );

      // Playful / Experimental
      case 'infinity-mirror':
        return (
          <div
            style={{
              ...baseStyle,
              position: 'relative',
              background: `radial-gradient(circle, ${color1} 0%, ${color2} 50%, transparent 100%)`,
              boxShadow: `
                inset 0 0 ${20 * scaleValue}px ${color1},
                inset 0 0 ${40 * scaleValue}px ${color2},
                inset 0 0 ${60 * scaleValue}px ${color1},
                inset 0 0 ${80 * scaleValue}px ${color2},
                inset 0 0 ${100 * scaleValue}px ${color1}
              `,
              animation: `infinityMirror ${animationDuration} ease-in-out infinite`
            }}
          />
        );

      case 'wobbling-rings':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
                radial-gradient(circle at center, transparent ${20 * scaleValue}px, ${color1} ${22 * scaleValue}px, ${color1} ${28 * scaleValue}px, transparent ${30 * scaleValue}px),
                radial-gradient(circle at center, transparent ${40 * scaleValue}px, ${color2} ${42 * scaleValue}px, ${color2} ${48 * scaleValue}px, transparent ${50 * scaleValue}px),
                radial-gradient(circle at center, transparent ${60 * scaleValue}px, ${color1} ${62 * scaleValue}px, ${color1} ${68 * scaleValue}px, transparent ${70 * scaleValue}px)
              `,
              animation: `wobblingRings ${animationDuration} ease-in-out infinite`
            }}
          />
        );

      case 'shifting-moire':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  ${color1} 0px,
                  ${color1} ${3 * scaleValue}px,
                  transparent ${3 * scaleValue}px,
                  transparent ${6 * scaleValue}px
                )`
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `repeating-linear-gradient(
                  2deg,
                  ${color2} 0px,
                  ${color2} ${3 * scaleValue}px,
                  transparent ${3 * scaleValue}px,
                  transparent ${6 * scaleValue}px
                )`,
                animation: `shiftingMoire ${animationDuration} linear infinite`
              }}
            />
          </div>
        );

      // Additional Geometric / Grid
      case 'bulging-grid':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-linear-gradient(0deg, ${color1} 0px, ${color1} 1px, transparent 1px, transparent ${20 * scaleValue}px),
                  repeating-linear-gradient(90deg, ${color1} 0px, ${color1} 1px, transparent 1px, transparent ${20 * scaleValue}px)
                `
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(circle at center, ${color2} 0%, transparent 50%)`,
                transform: 'scale(0.8)',
                animation: `bulgingGrid ${animationDuration} ease-in-out infinite`
              }}
            />
          </div>
        );

      case 'twisting-lines':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(
                  0deg,
                  transparent 0px,
                  transparent ${18 * scaleValue}px,
                  ${color1} ${18 * scaleValue}px,
                  ${color1} ${22 * scaleValue}px
                )`,
                animation: `twistingLines ${animationDuration} ease-in-out infinite`
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(
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
                )`
              }}
            />
          </div>
        );

      case 'checkerboard-vortex':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
                conic-gradient(from ${angle}deg, ${color1}, ${color2}, ${color1}),
                repeating-linear-gradient(45deg, transparent 0px, transparent ${30 * scaleValue}px, rgba(0,0,0,0.3) ${30 * scaleValue}px, rgba(0,0,0,0.3) ${60 * scaleValue}px)
              `,
              animation: `checkerboardVortex ${animationDuration} linear infinite`
            }}
          />
        );

      case 'triangle-expansion':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '30%',
                left: '40%',
                width: '20%',
                height: '20%',
                background: color1,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '20%',
                left: '30%',
                width: '40%',
                height: '40%',
                background: color2,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                animation: `triangleExpansion ${animationDuration} ease-in-out infinite`
              }}
            />
          </div>
        );

      // Motion / Perceived Motion
      case 'rotating-rings':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
                radial-gradient(circle, transparent ${30 * scaleValue}px, ${color1} ${32 * scaleValue}px, ${color1} ${38 * scaleValue}px, transparent ${40 * scaleValue}px),
                radial-gradient(circle, transparent ${50 * scaleValue}px, ${color2} ${52 * scaleValue}px, ${color2} ${58 * scaleValue}px, transparent ${60 * scaleValue}px),
                radial-gradient(circle, transparent ${70 * scaleValue}px, ${color1} ${72 * scaleValue}px, ${color1} ${78 * scaleValue}px, transparent ${80 * scaleValue}px)
              `,
              animation: `rotatingRings ${animationDuration} linear infinite`
            }}
          />
        );

      case 'drifting-dots':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
                repeating-linear-gradient(0deg, transparent 0px, transparent ${18 * scaleValue}px, rgba(128,128,128,0.3) ${18 * scaleValue}px, rgba(128,128,128,0.3) ${22 * scaleValue}px),
                repeating-linear-gradient(90deg, transparent 0px, transparent ${18 * scaleValue}px, rgba(128,128,128,0.3) ${18 * scaleValue}px, rgba(128,128,128,0.3) ${22 * scaleValue}px),
                radial-gradient(circle at ${20 * scaleValue}px ${20 * scaleValue}px, ${color1} 2px, transparent 2px),
                radial-gradient(circle at ${40 * scaleValue}px ${40 * scaleValue}px, ${color2} 2px, transparent 2px)
              `,
              backgroundSize: `${40 * scaleValue}px ${40 * scaleValue}px, ${40 * scaleValue}px ${40 * scaleValue}px, ${20 * scaleValue}px ${20 * scaleValue}px, ${20 * scaleValue}px ${20 * scaleValue}px`,
              animation: `driftingDots ${animationDuration} linear infinite`
            }}
          />
        );

      case 'ripple-illusion':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
                radial-gradient(circle at center, ${color1} 0%, transparent 10%),
                radial-gradient(circle at center, transparent 15%, ${color2} 20%, transparent 25%),
                radial-gradient(circle at center, transparent 30%, ${color1} 35%, transparent 40%),
                radial-gradient(circle at center, transparent 45%, ${color2} 50%, transparent 55%)
              `,
              animation: `rippleIllusion ${animationDuration} ease-out infinite`
            }}
          />
        );

      case 'flowing-spiral':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
                conic-gradient(from 0deg, ${color1} 0deg, ${color2} 60deg, ${color1} 120deg, ${color2} 180deg, ${color1} 240deg, ${color2} 300deg, ${color1} 360deg),
                radial-gradient(circle, transparent 20%, rgba(255,255,255,0.1) 40%, transparent 60%)
              `,
              animation: `flowingSpiral ${animationDuration} linear infinite`
            }}
          />
        );

      // Additional Impossible / Perspective
      case 'infinite-loop-ladder':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-linear-gradient(
                    30deg,
                    ${color1} 0px,
                    ${color1} ${15 * scaleValue}px,
                    ${color2} ${15 * scaleValue}px,
                    ${color2} ${30 * scaleValue}px
                  )
                `,
                transform: `perspective(1000px) rotateX(45deg) rotateY(15deg)`,
                animation: `infiniteLoopLadder ${animationDuration} linear infinite`
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(
                  150deg,
                  transparent 0px,
                  transparent ${13 * scaleValue}px,
                  rgba(0,0,0,0.4) ${13 * scaleValue}px,
                  rgba(0,0,0,0.4) ${17 * scaleValue}px
                )`
              }}
            />
          </div>
        );

      case 'impossible-hexagon':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: '50%',
                height: '50%',
                background: `linear-gradient(60deg, ${color1} 30%, ${color2} 70%)`,
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: '50%',
                height: '50%',
                background: `linear-gradient(-60deg, ${color2} 30%, ${color1} 70%)`,
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
                animation: `impossibleHexagon ${animationDuration} ease-in-out infinite`
              }}
            />
          </div>
        );

      case 'depth-paradox':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
                linear-gradient(135deg, ${color1} 0%, ${color2} 50%, ${color1} 100%),
                repeating-linear-gradient(45deg, transparent 0px, transparent ${20 * scaleValue}px, rgba(255,255,255,0.1) ${20 * scaleValue}px, rgba(255,255,255,0.1) ${40 * scaleValue}px)
              `,
              transform: `rotate(${angle}deg) scale(${scaleValue}) perspective(1000px) rotateX(30deg) rotateY(15deg)`,
              animation: `depthParadox ${animationDuration} ease-in-out infinite`
            }}
          />
        );

      case 'recursive-staircase':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-linear-gradient(
                    45deg,
                    ${color1} 0px,
                    ${color1} ${25 * scaleValue}px,
                    ${color2} ${25 * scaleValue}px,
                    ${color2} ${50 * scaleValue}px
                  )
                `,
                animation: `recursiveStaircase ${animationDuration} linear infinite`
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-linear-gradient(
                    -45deg,
                    transparent 0px,
                    transparent ${20 * scaleValue}px,
                    rgba(0,0,0,0.3) ${20 * scaleValue}px,
                    rgba(0,0,0,0.3) ${30 * scaleValue}px
                  )
                `,
                transform: 'scale(0.8)'
              }}
            />
          </div>
        );

      // Color / Contrast
      case 'neon-afterimage':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  linear-gradient(0deg, ${color1} 0%, transparent 5%, transparent 95%, ${color1} 100%),
                  linear-gradient(90deg, ${color2} 0%, transparent 5%, transparent 95%, ${color2} 100%)
                `,
                filter: 'brightness(150%) saturate(200%)',
                animation: `neonAfterimage ${animationDuration} ease-in-out infinite`
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  linear-gradient(45deg, transparent 40%, ${color1} 45%, ${color1} 55%, transparent 60%),
                  linear-gradient(-45deg, transparent 40%, ${color2} 45%, ${color2} 55%, transparent 60%)
                `,
                animation: `neonFlicker ${animationDuration} ease-in-out infinite`
              }}
            />
          </div>
        );

      case 'checker-shadow':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(45deg, ${color1} 25%, transparent 25%), 
                  linear-gradient(-45deg, ${color1} 25%, transparent 25%), 
                  linear-gradient(45deg, transparent 75%, ${color1} 75%), 
                  linear-gradient(-45deg, transparent 75%, ${color1} 75%)
                `,
                backgroundSize: `${40 * scaleValue}px ${40 * scaleValue}px`,
                backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, transparent 30%, ${color2} 40%, transparent 70%)`,
                mixBlendMode: 'multiply',
                animation: `checkerShadow ${animationDuration} ease-in-out infinite`
              }}
            />
          </div>
        );

      case 'rotating-color-wheels':
        return (
          <div
            style={{
              ...baseStyle,
              background: `conic-gradient(
                from ${angle}deg,
                ${color1} 0deg,
                ${color2} 60deg,
                ${color1} 120deg,
                ${color2} 180deg,
                ${color1} 240deg,
                ${color2} 300deg,
                ${color1} 360deg
              )`,
              animation: `rotatingColorWheels ${animationDuration} linear infinite`,
              filter: 'hue-rotate(0deg)'
            }}
          />
        );

      case 'vibrating-lines':
        return (
          <div
            style={{
              ...baseStyle,
              background: `repeating-linear-gradient(
                90deg,
                ${color1} 0px,
                ${color1} ${2 * scaleValue}px,
                ${color2} ${2 * scaleValue}px,
                ${color2} ${4 * scaleValue}px
              )`,
              animation: `vibratingLines ${animationDuration} ease-in-out infinite`
            }}
          />
        );

      // Additional Experimental / Playful
      case 'magic-eye-pattern':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
                radial-gradient(circle at 10% 10%, ${color1} 1px, transparent 1px),
                radial-gradient(circle at 30% 20%, ${color2} 1px, transparent 1px),
                radial-gradient(circle at 50% 30%, ${color1} 1px, transparent 1px),
                radial-gradient(circle at 70% 40%, ${color2} 1px, transparent 1px),
                radial-gradient(circle at 90% 50%, ${color1} 1px, transparent 1px)
              `,
              backgroundSize: `
                ${20 * scaleValue}px ${20 * scaleValue}px,
                ${25 * scaleValue}px ${25 * scaleValue}px,
                ${30 * scaleValue}px ${30 * scaleValue}px,
                ${35 * scaleValue}px ${35 * scaleValue}px,
                ${40 * scaleValue}px ${40 * scaleValue}px
              `,
              animation: `magicEyePattern ${animationDuration} linear infinite`
            }}
          />
        );

      case 'blinking-grid':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-linear-gradient(0deg, ${color1} 0px, ${color1} 1px, transparent 1px, transparent ${20 * scaleValue}px),
                  repeating-linear-gradient(90deg, ${color1} 0px, ${color1} 1px, transparent 1px, transparent ${20 * scaleValue}px)
                `
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(circle at ${10 * scaleValue}px ${10 * scaleValue}px, ${color2} 3px, transparent 3px),
                  radial-gradient(circle at ${30 * scaleValue}px ${30 * scaleValue}px, ${color2} 3px, transparent 3px)
                `,
                backgroundSize: `${20 * scaleValue}px ${20 * scaleValue}px`,
                animation: `blinkingGrid ${animationDuration} step-end infinite`
              }}
            />
          </div>
        );

      case 'warped-circles':
        return (
          <div
            style={{
              ...baseStyle,
              background: `
                radial-gradient(ellipse 60% 80% at center, transparent ${30 * scaleValue}px, ${color1} ${32 * scaleValue}px, ${color1} ${38 * scaleValue}px, transparent ${40 * scaleValue}px),
                radial-gradient(ellipse 80% 60% at center, transparent ${50 * scaleValue}px, ${color2} ${52 * scaleValue}px, ${color2} ${58 * scaleValue}px, transparent ${60 * scaleValue}px)
              `,
              animation: `warpedCircles ${animationDuration} ease-in-out infinite`
            }}
          />
        );

      case 'impossible-star':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: '50%',
                height: '50%',
                background: `linear-gradient(72deg, ${color1} 40%, ${color2} 60%)`,
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: '50%',
                height: '50%',
                background: `linear-gradient(-72deg, ${color2} 40%, ${color1} 60%)`,
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                animation: `impossibleStar ${animationDuration} ease-in-out infinite`
              }}
            />
          </div>
        );

      case 'shifting-checker':
        return (
          <div
            style={{
              ...baseStyle,
              backgroundImage: `
                linear-gradient(45deg, ${color1} 25%, transparent 25%), 
                linear-gradient(-45deg, ${color1} 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, ${color2} 75%), 
                linear-gradient(-45deg, transparent 75%, ${color2} 75%)
              `,
              backgroundSize: `${30 * scaleValue}px ${30 * scaleValue}px`,
              backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px',
              animation: `shiftingChecker ${animationDuration} ease-in-out infinite`
            }}
          />
        );

      case 'curved-lines-illusion':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
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
                  )
                `
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `repeating-linear-gradient(
                  45deg,
                  transparent 0px,
                  transparent ${4 * scaleValue}px,
                  rgba(255,255,255,0.1) ${4 * scaleValue}px,
                  rgba(255,255,255,0.1) ${8 * scaleValue}px
                )`,
                animation: `curvedLinesIllusion ${animationDuration} ease-in-out infinite`
              }}
            />
          </div>
        );

      // Advanced 3D and Dynamic Illusions
      case 'rotating-3d-impossible':
        return (
          <div style={{ ...baseStyle, position: 'relative', transformStyle: 'preserve-3d' }}>
            {/* Front face */}
            <div
              style={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: '50%',
                height: '50%',
                background: `linear-gradient(135deg, ${color1} 30%, ${color2} 70%)`,
                transform: 'translateZ(50px)',
                clipPath: 'polygon(0% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 100%, 30% 100%, 30% 70%, 0% 70%)'
              }}
            />
            {/* Back face */}
            <div
              style={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: '50%',
                height: '50%',
                background: `linear-gradient(-135deg, ${color2} 30%, ${color1} 70%)`,
                transform: 'translateZ(-50px) rotateY(180deg)',
                clipPath: 'polygon(0% 0%, 70% 0%, 70% 30%, 100% 30%, 100% 100%, 30% 100%, 30% 70%, 0% 70%)'
              }}
            />
            {/* Side faces */}
            <div
              style={{
                position: 'absolute',
                top: '25%',
                left: '25%',
                width: '50%',
                height: '50%',
                background: `linear-gradient(45deg, ${color1} 50%, ${color2} 50%)`,
                transform: 'rotateY(90deg) translateZ(50px)',
                clipPath: 'polygon(30% 0%, 100% 0%, 100% 70%, 70% 70%, 70% 100%, 0% 100%, 0% 30%, 30% 30%)',
                animation: `rotating3DImpossible ${animationDuration} linear infinite`
              }}
            />
          </div>
        );

      case 'depth-warp-tunnel':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: `${(8 - i) * 12}%`,
                  height: `${(8 - i) * 12}%`,
                  border: `${2 * scaleValue}px solid ${i % 2 === 0 ? color1 : color2}`,
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: `depthWarpTunnel ${animationDuration} ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `conic-gradient(from ${angle}deg, ${color1} 0deg, ${color2} 180deg, ${color1} 360deg)`,
                opacity: 0.3,
                animation: `depthWarpRotation ${animationDuration} linear infinite`
              }}
            />
          </div>
        );

      case 'advanced-color-contrast':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(45deg, ${color1} 25%, transparent 25%), 
                  linear-gradient(-45deg, ${color1} 25%, transparent 25%), 
                  linear-gradient(45deg, transparent 75%, ${color1} 75%), 
                  linear-gradient(-45deg, transparent 75%, ${color1} 75%)
                `,
                backgroundSize: `${30 * scaleValue}px ${30 * scaleValue}px`,
                backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  linear-gradient(135deg, transparent 20%, ${color2} 30%, transparent 40%),
                  linear-gradient(-45deg, transparent 60%, ${color2} 70%, transparent 80%)
                `,
                mixBlendMode: 'multiply',
                filter: 'brightness(120%) contrast(180%)',
                animation: `advancedColorContrast ${animationDuration} ease-in-out infinite`
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `radial-gradient(ellipse at 30% 30%, ${color2} 0%, transparent 40%)`,
                mixBlendMode: 'screen',
                animation: `contrastPulse ${animationDuration} ease-in-out infinite alternate`
              }}
            />
          </div>
        );

      case 'motion-induced-blindness':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            {/* Central fixation point */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '8px',
                height: '8px',
                background: '#ffffff',
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
                boxShadow: `0 0 10px ${color1}`
              }}
            />
            {/* Rotating background */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `conic-gradient(from 0deg, ${color1} 0deg, ${color2} 90deg, ${color1} 180deg, ${color2} 270deg)`,
                opacity: 0.6,
                animation: `motionBackground ${animationDuration} linear infinite`
              }}
            />
            {/* Peripheral dots that appear/disappear */}
            {[
              { x: 20, y: 20 }, { x: 80, y: 20 }, { x: 20, y: 80 }, { x: 80, y: 80 },
              { x: 50, y: 10 }, { x: 50, y: 90 }, { x: 10, y: 50 }, { x: 90, y: 50 }
            ].map((pos, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  top: `${pos.y}%`,
                  left: `${pos.x}%`,
                  width: '6px',
                  height: '6px',
                  background: i % 2 === 0 ? color1 : color2,
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: `motionInducedBlindness ${animationDuration} ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        );

      case 'dynamic-moire-interference':
        return (
          <div style={{ ...baseStyle, position: 'relative' }}>
            {/* First grid layer */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-conic-gradient(
                    from 0deg,
                    ${color1} 0deg 5deg,
                    transparent 5deg 10deg
                  )
                `,
                animation: `moireLayer1 ${animationDuration} linear infinite`
              }}
            />
            {/* Second grid layer */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-conic-gradient(
                    from 45deg,
                    ${color2} 0deg 5deg,
                    transparent 5deg 10deg
                  )
                `,
                animation: `moireLayer2 ${(parseFloat(animationDuration) * 1.3).toFixed(1)}s linear infinite reverse`
              }}
            />
            {/* Third interference layer */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  repeating-radial-gradient(
                    circle,
                    transparent 0px,
                    transparent ${8 * scaleValue}px,
                    rgba(255,255,255,0.2) ${8 * scaleValue}px,
                    rgba(255,255,255,0.2) ${10 * scaleValue}px
                  )
                `,
                animation: `moireInterference ${(parseFloat(animationDuration) * 0.7).toFixed(1)}s ease-in-out infinite alternate`
              }}
            />
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black border border-white/20 shadow-2xl">
      <div className="absolute inset-4">
        {renderIllusion()}
      </div>
      
      {/* Glassmorphism overlay for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />
      
      <style>{`
        @keyframes checkerboardMove {
          0% { transform: translateX(0) translateY(0) rotate(${config.angle}deg) scale(${config.scale / 50}); }
          100% { transform: translateX(60px) translateY(60px) rotate(${config.angle}deg) scale(${config.scale / 50}); }
        }
        
        @keyframes spiralRotate {
          0% { transform: rotate(${config.angle}deg) scale(${config.scale / 50}); }
          100% { transform: rotate(${config.angle + 360}deg) scale(${config.scale / 50}); }
        }
        
        @keyframes moireShift1 {
          0% { transform: translateX(0); }
          100% { transform: translateX(${20 * config.scale / 50}px); }
        }
        
        @keyframes moireShift2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(${20 * config.scale / 50}px); }
        }
        
        @keyframes wavePulse {
          0%, 100% { transform: rotate(${config.angle}deg) scale(${config.scale / 50}); }
          50% { transform: rotate(${config.angle}deg) scale(${(config.scale / 50) * 1.2}); }
        }
        
        @keyframes tunnelZoom {
          0%, 100% { transform: scale(${config.scale / 50}) rotate(${config.angle}deg); }
          50% { transform: scale(${(config.scale / 50) * 1.5}) rotate(${config.angle + 180}deg); }
        }

        @keyframes cafeWallShift {
          0% { transform: translateY(${10 * config.scale / 50}px) translateX(0); }
          100% { transform: translateY(${10 * config.scale / 50}px) translateX(${40 * config.scale / 50}px); }
        }

        @keyframes zollnerShift {
          0% { transform: translateX(0); }
          100% { transform: translateX(${20 * config.scale / 50}px); }
        }

        @keyframes heringPulse {
          0%, 100% { transform: rotate(${config.angle}deg) scale(${config.scale / 50}); }
          50% { transform: rotate(${config.angle}deg) scale(${(config.scale / 50) * 1.1}); }
        }

        @keyframes wavyGridDistort {
          0%, 100% { 
            background-position: 0 0, 0 0;
            transform: rotate(${config.angle}deg) scale(${config.scale / 50});
          }
          25% { 
            background-position: ${5 * config.scale / 50}px ${2 * config.scale / 50}px, ${2 * config.scale / 50}px ${5 * config.scale / 50}px;
            transform: rotate(${config.angle}deg) scale(${config.scale / 50});
          }
          50% { 
            background-position: 0 ${5 * config.scale / 50}px, ${5 * config.scale / 50}px 0;
            transform: rotate(${config.angle}deg) scale(${config.scale / 50});
          }
          75% { 
            background-position: -${5 * config.scale / 50}px ${2 * config.scale / 50}px, ${2 * config.scale / 50}px -${5 * config.scale / 50}px;
            transform: rotate(${config.angle}deg) scale(${config.scale / 50});
          }
        }

        @keyframes rotatingSnakes {
          0% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50});
            background-position: 0 0, 0 0, 0 0, 0 0, center;
          }
          50% { 
            transform: rotate(${config.angle + 180}deg) scale(${(config.scale / 50) * 1.1});
            background-position: ${10 * config.scale / 50}px ${10 * config.scale / 50}px, 
                                -${10 * config.scale / 50}px ${10 * config.scale / 50}px,
                                ${10 * config.scale / 50}px -${10 * config.scale / 50}px,
                                -${10 * config.scale / 50}px -${10 * config.scale / 50}px, center;
          }
          100% { 
            transform: rotate(${config.angle + 360}deg) scale(${config.scale / 50});
            background-position: 0 0, 0 0, 0 0, 0 0, center;
          }
        }

        @keyframes pinnaBrelstaff {
          0% { transform: rotate(${config.angle}deg) scale(${config.scale / 50}); }
          100% { transform: rotate(${config.angle + 360}deg) scale(${config.scale / 50}); }
        }

        @keyframes shimmerFlash {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes penroseRotate {
          0%, 100% { transform: rotate(0deg); }
          33% { transform: rotate(120deg); }
          66% { transform: rotate(240deg); }
        }

        @keyframes impossibleStairs {
          0% { background-position: 0 0; }
          100% { background-position: ${40 * config.scale / 50}px ${40 * config.scale / 50}px; }
        }

        @keyframes endlessCorridor {
          0% { 
            background-size: 100% 100%, 100% 100%;
            transform: 
              rotate(${config.angle}deg) 
              scale(${config.scale / 50})
              perspective(1000px) 
              rotateX(30deg);
          }
          50% { 
            background-size: 80% 80%, 90% 90%;
            transform: 
              rotate(${config.angle}deg) 
              scale(${(config.scale / 50) * 0.8})
              perspective(1000px) 
              rotateX(30deg);
          }
          100% { 
            background-size: 100% 100%, 100% 100%;
            transform: 
              rotate(${config.angle}deg) 
              scale(${config.scale / 50})
              perspective(1000px) 
              rotateX(30deg);
          }
        }

        @keyframes floatingCube {
          0%, 100% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) rotateX(0deg) rotateY(0deg);
          }
          25% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) rotateX(90deg) rotateY(0deg);
          }
          50% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) rotateX(90deg) rotateY(90deg);
          }
          75% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) rotateX(0deg) rotateY(90deg);
          }
        }

        @keyframes depthCheckerboard {
          0%, 100% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) perspective(500px) rotateX(20deg);
            background-size: ${60 * config.scale / 50}px ${60 * config.scale / 50}px;
          }
          50% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) perspective(500px) rotateX(-20deg);
            background-size: ${40 * config.scale / 50}px ${40 * config.scale / 50}px;
          }
        }

        @keyframes infinityMirror {
          0%, 100% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50});
            box-shadow: 
              inset 0 0 ${20 * config.scale / 50}px ${config.colors[0]},
              inset 0 0 ${40 * config.scale / 50}px ${config.colors[1]},
              inset 0 0 ${60 * config.scale / 50}px ${config.colors[0]},
              inset 0 0 ${80 * config.scale / 50}px ${config.colors[1]},
              inset 0 0 ${100 * config.scale / 50}px ${config.colors[0]};
          }
          50% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50 * 0.8});
            box-shadow: 
              inset 0 0 ${40 * config.scale / 50}px ${config.colors[1]},
              inset 0 0 ${60 * config.scale / 50}px ${config.colors[0]},
              inset 0 0 ${80 * config.scale / 50}px ${config.colors[1]},
              inset 0 0 ${100 * config.scale / 50}px ${config.colors[0]},
              inset 0 0 ${120 * config.scale / 50}px ${config.colors[1]};
          }
        }

        @keyframes wobblingRings {
          0%, 100% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50});
          }
          25% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50 * 1.1});
          }
          50% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50 * 0.9});
          }
          75% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50 * 1.05});
          }
        }

        @keyframes shiftingMoire {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(${50 * config.scale / 50}px) translateY(${50 * config.scale / 50}px); }
        }

        @keyframes bulgingGrid {
          0%, 100% { transform: scale(0.8); }
          50% { transform: scale(1.2); }
        }

        @keyframes twistingLines {
          0%, 100% { transform: rotate(${config.angle}deg) scale(${config.scale / 50}); }
          50% { transform: rotate(${config.angle + 5}deg) scale(${config.scale / 50}); }
        }

        @keyframes checkerboardVortex {
          0% { 
            transform: scale(${config.scale / 50}) rotate(${config.angle}deg);
            background-size: 100% 100%, ${60 * config.scale / 50}px ${60 * config.scale / 50}px;
          }
          100% { 
            transform: scale(${config.scale / 50}) rotate(${config.angle + 360}deg);
            background-size: 100% 100%, ${30 * config.scale / 50}px ${30 * config.scale / 50}px;
          }
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
        }

        @keyframes rotatingRings {
          0% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50});
            background-position: center, center, center;
          }
          33% { 
            transform: rotate(${config.angle + 120}deg) scale(${config.scale / 50});
            background-position: ${10 * config.scale / 50}px ${10 * config.scale / 50}px, -${10 * config.scale / 50}px -${10 * config.scale / 50}px, center;
          }
          66% { 
            transform: rotate(${config.angle + 240}deg) scale(${config.scale / 50});
            background-position: -${10 * config.scale / 50}px ${10 * config.scale / 50}px, ${10 * config.scale / 50}px -${10 * config.scale / 50}px, center;
          }
          100% { 
            transform: rotate(${config.angle + 360}deg) scale(${config.scale / 50});
            background-position: center, center, center;
          }
        }

        @keyframes driftingDots {
          0% { 
            background-position: 0 0, 0 0, 0 0, 0 0;
          }
          100% { 
            background-position: ${40 * config.scale / 50}px ${40 * config.scale / 50}px, ${40 * config.scale / 50}px ${40 * config.scale / 50}px, ${20 * config.scale / 50}px ${20 * config.scale / 50}px, ${20 * config.scale / 50}px ${20 * config.scale / 50}px;
          }
        }

        @keyframes rippleIllusion {
          0% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50 * 0.5});
            opacity: ${config.intensity / 100};
          }
          50% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50 * 1.5});
            opacity: ${config.intensity / 100 * 0.7};
          }
          100% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50 * 2});
            opacity: 0;
          }
        }

        @keyframes flowingSpiral {
          0% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50});
            background-size: 100% 100%, 50% 50%;
          }
          50% { 
            transform: rotate(${config.angle + 180}deg) scale(${config.scale / 50 * 0.8});
            background-size: 80% 80%, 100% 100%;
          }
          100% { 
            transform: rotate(${config.angle + 360}deg) scale(${config.scale / 50});
            background-size: 100% 100%, 50% 50%;
          }
        }

        @keyframes infiniteLoopLadder {
          0% { background-position: 0 0; }
          100% { background-position: ${30 * config.scale / 50}px ${30 * config.scale / 50}px; }
        }

        @keyframes impossibleHexagon {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(60deg); }
        }

        @keyframes depthParadox {
          0%, 100% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) perspective(1000px) rotateX(30deg) rotateY(15deg);
          }
          50% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) perspective(1000px) rotateX(-30deg) rotateY(-15deg);
          }
        }

        @keyframes recursiveStaircase {
          0% { 
            background-position: 0 0;
            background-size: ${50 * config.scale / 50}px ${50 * config.scale / 50}px;
          }
          100% { 
            background-position: ${50 * config.scale / 50}px ${50 * config.scale / 50}px;
            background-size: ${25 * config.scale / 50}px ${25 * config.scale / 50}px;
          }
        }

        @keyframes neonAfterimage {
          0%, 100% { filter: brightness(150%) saturate(200%); }
          50% { filter: brightness(250%) saturate(300%) blur(1px); }
        }

        @keyframes neonFlicker {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0.7; }
        }

        @keyframes checkerShadow {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(${20 * config.scale / 50}px) translateY(${20 * config.scale / 50}px); }
        }

        @keyframes rotatingColorWheels {
          0% { 
            transform: scale(${config.scale / 50}) rotate(${config.angle}deg);
            filter: hue-rotate(0deg);
          }
          25% { 
            transform: scale(${config.scale / 50}) rotate(${config.angle + 90}deg);
            filter: hue-rotate(90deg);
          }
          50% { 
            transform: scale(${config.scale / 50}) rotate(${config.angle + 180}deg);
            filter: hue-rotate(180deg);
          }
          75% { 
            transform: scale(${config.scale / 50}) rotate(${config.angle + 270}deg);
            filter: hue-rotate(270deg);
          }
          100% { 
            transform: scale(${config.scale / 50}) rotate(${config.angle + 360}deg);
            filter: hue-rotate(360deg);
          }
        }

        @keyframes vibratingLines {
          0%, 100% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) translateX(0);
          }
          25% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) translateX(${2 * config.scale / 50}px);
          }
          50% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) translateX(0);
          }
          75% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) translateX(-${2 * config.scale / 50}px);
          }
        }

        @keyframes magicEyePattern {
          0% { 
            background-position: 0 0, ${5 * config.scale / 50}px 0, ${10 * config.scale / 50}px 0, ${15 * config.scale / 50}px 0, ${20 * config.scale / 50}px 0;
          }
          100% { 
            background-position: ${20 * config.scale / 50}px 0, ${25 * config.scale / 50}px 0, ${30 * config.scale / 50}px 0, ${35 * config.scale / 50}px 0, ${40 * config.scale / 50}px 0;
          }
        }

        @keyframes blinkingGrid {
          0%, 50% { opacity: 0; }
          51%, 100% { opacity: 1; }
        }

        @keyframes warpedCircles {
          0%, 100% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) skew(0deg, 0deg);
          }
          25% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) skew(5deg, 0deg);
          }
          50% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) skew(0deg, 5deg);
          }
          75% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50}) skew(-5deg, 0deg);
          }
        }

        @keyframes impossibleStar {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(72deg); }
        }

        @keyframes shiftingChecker {
          0%, 100% { 
            background-position: 0 0, 0 15px, 15px -15px, -15px 0px;
          }
          50% { 
            background-position: ${15 * config.scale / 50}px ${15 * config.scale / 50}px, ${15 * config.scale / 50}px ${30 * config.scale / 50}px, ${30 * config.scale / 50}px 0px, 0px ${15 * config.scale / 50}px;
          }
        }

        @keyframes curvedLinesIllusion {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(${10 * config.scale / 50}px); }
        }

        @keyframes rotating3DImpossible {
          0% { 
            transform: rotateY(90deg) translateZ(50px) rotateX(0deg) rotateZ(0deg);
          }
          25% { 
            transform: rotateY(90deg) translateZ(50px) rotateX(90deg) rotateZ(90deg);
          }
          50% { 
            transform: rotateY(90deg) translateZ(50px) rotateX(180deg) rotateZ(180deg);
          }
          75% { 
            transform: rotateY(90deg) translateZ(50px) rotateX(270deg) rotateZ(270deg);
          }
          100% { 
            transform: rotateY(90deg) translateZ(50px) rotateX(360deg) rotateZ(360deg);
          }
        }

        @keyframes depthWarpTunnel {
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

        @keyframes depthWarpRotation {
          0% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50});
          }
          100% { 
            transform: rotate(${config.angle + 360}deg) scale(${config.scale / 50});
          }
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
        }

        @keyframes motionBackground {
          0% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50});
          }
          100% { 
            transform: rotate(${config.angle + 360}deg) scale(${config.scale / 50});
          }
        }

        @keyframes motionInducedBlindness {
          0%, 20% { 
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          40%, 60% { 
            opacity: 0.1;
            transform: translate(-50%, -50%) scale(0.5);
          }
          80%, 100% { 
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes moireLayer1 {
          0% { 
            transform: rotate(${config.angle}deg) scale(${config.scale / 50});
          }
          100% { 
            transform: rotate(${config.angle + 360}deg) scale(${config.scale / 50});
          }
        }

        @keyframes moireLayer2 {
          0% { 
            transform: rotate(${config.angle + 45}deg) scale(${config.scale / 50 * 0.9});
          }
          100% { 
            transform: rotate(${config.angle + 45 - 360}deg) scale(${config.scale / 50 * 1.1});
          }
        }

        @keyframes moireInterference {
          0% { 
            background-size: ${8 * config.scale / 50}px ${8 * config.scale / 50}px;
            opacity: 0.5;
          }
          100% { 
            background-size: ${16 * config.scale / 50}px ${16 * config.scale / 50}px;
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
}
