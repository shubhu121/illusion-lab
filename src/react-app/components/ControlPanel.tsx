import { IllusionConfig } from './Generator';

interface ControlPanelProps {
  config: IllusionConfig;
  onChange: (config: IllusionConfig) => void;
}

export default function ControlPanel({ config, onChange }: ControlPanelProps) {
  const updateConfig = (updates: Partial<IllusionConfig>) => {
    onChange({ ...config, ...updates });
  };

  const Slider = ({ 
    label, 
    value, 
    onChange, 
    min = 0, 
    max = 100, 
    unit = '' 
  }: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    unit?: string;
  }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-300">{label}</label>
        <span className="text-sm text-gray-400">{value}{unit}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>
    </div>
  );

  const ColorPicker = ({ 
    label, 
    value, 
    onChange 
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
  }) => (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-300">{label}</label>
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-12 h-8 rounded border border-white/20 bg-transparent cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
          placeholder="#ff00ff"
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Colors</h3>
        <ColorPicker
          label="Primary Color"
          value={config.colors[0]}
          onChange={(value) => updateConfig({ colors: [value, config.colors[1]] })}
        />
        <ColorPicker
          label="Secondary Color"
          value={config.colors[1]}
          onChange={(value) => updateConfig({ colors: [config.colors[0], value] })}
        />
      </div>

      {/* Controls */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Properties</h3>
        
        <Slider
          label="Intensity"
          value={config.intensity}
          onChange={(intensity) => updateConfig({ intensity })}
          unit="%"
        />
        
        <Slider
          label="Animation Speed"
          value={config.speed}
          onChange={(speed) => updateConfig({ speed })}
          unit="%"
        />
        
        <Slider
          label="Scale"
          value={config.scale}
          onChange={(scale) => updateConfig({ scale })}
          unit="%"
        />
        
        <Slider
          label="Rotation"
          value={config.angle}
          onChange={(angle) => updateConfig({ angle })}
          min={0}
          max={360}
          unit="°"
        />
      </div>

      {/* Quick presets */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-white uppercase tracking-wide">Quick Presets</h3>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => updateConfig({
              colors: ['#ff00ff', '#00ffff'],
              intensity: 75,
              speed: 50,
              scale: 50,
              angle: 0
            })}
            className="px-3 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg text-white text-xs font-medium hover:opacity-80 transition-opacity"
          >
            Neon
          </button>
          <button
            onClick={() => updateConfig({
              colors: ['#ff4080', '#40ff80'],
              intensity: 60,
              speed: 30,
              scale: 75,
              angle: 45
            })}
            className="px-3 py-2 bg-gradient-to-r from-pink-500 to-green-500 rounded-lg text-white text-xs font-medium hover:opacity-80 transition-opacity"
          >
            Retro
          </button>
          <button
            onClick={() => updateConfig({
              colors: ['#ffffff', '#000000'],
              intensity: 90,
              speed: 70,
              scale: 40,
              angle: 0
            })}
            className="px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg text-white text-xs font-medium hover:opacity-80 transition-opacity"
          >
            Classic
          </button>
          <button
            onClick={() => updateConfig({
              colors: ['#ff8000', '#0080ff'],
              intensity: 55,
              speed: 80,
              scale: 60,
              angle: 90
            })}
            className="px-3 py-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg text-white text-xs font-medium hover:opacity-80 transition-opacity"
          >
            Sunset
          </button>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ff00ff, #00ffff);
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #ff00ff, #00ffff);
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
