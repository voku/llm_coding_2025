import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis, Cell } from 'recharts';
import { ParadigmData, getAutonomyScore, getReadinessScore } from '../types';

interface ParadigmChartProps {
  data: ParadigmData[];
}

// Custom Shape to render the Emoji centered at cx, cy
const EmojiShape = (props: any) => {
    const { cx, cy, payload } = props;
    return (
        <text 
            x={cx} 
            y={cy} 
            dy={6} // Approx vertical center adjustment for text
            textAnchor="middle" 
            style={{ fontSize: '20px', cursor: 'pointer', filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.5))' }}
        >
            {payload.icon}
        </text>
    );
};

const ParadigmChart: React.FC<ParadigmChartProps> = ({ data }) => {
  // Add deterministic "jitter" (noise) to coordinates to prevent exact overlaps
  const chartData = data.map((item, index) => {
    // Keep Jitter to separate items
    const jitterX = ((index % 3) - 1) * 0.18; 
    const jitterY = ((index % 2) - 0.5) * 0.18;

    return {
      ...item,
      x: getAutonomyScore(item.autonomy) + jitterX,
      y: getReadinessScore(item.productionReadiness) + jitterY,
      z: 1,
    };
  });

  return (
    <div className="h-[550px] w-full bg-slate-900/50 rounded-xl border border-slate-800 p-4">
      <div className="flex justify-between items-start mb-4 px-2">
        <div>
           <h3 className="text-lg font-semibold text-slate-200">Landschaft der Coding-Arten</h3>
           <p className="text-xs text-slate-500">
             Die Emojis im Chart entsprechen den Symbolen in der Tabelle unten.<br/>
             Je weiter rechts = autonomer. Je weiter oben = produktionsreifer.
           </p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <ScatterChart
          margin={{
            top: 20,
            right: 40,   
            bottom: 60,  
            left: 20,    
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          
          <XAxis 
            type="number" 
            dataKey="x" 
            name="Selbstständigkeit" 
            domain={[0.5, 4.5]} 
            tickCount={5}
            tickFormatter={(val) => {
              const rounded = Math.round(val);
              const labels = ['', 'Wenig', 'Mittel', 'Viel', 'Extrem'];
              return labels[rounded] || '';
            }}
            stroke="#94a3b8"
            label={{ 
              value: 'Grad der Automatisierung', 
              position: 'insideBottom', 
              offset: -40, 
              fill: '#cbd5e1', 
              fontSize: 13,
              fontWeight: 500
            }}
          />
          
          <YAxis 
            type="number" 
            dataKey="y" 
            name="Bereitschaft" 
            domain={[-0.5, 3.5]} 
            tickCount={4}
            tickFormatter={(val) => {
                const rounded = Math.round(val);
                const labels = ['Nicht fertig', 'Eingeschränkt', 'Teilweise', 'Fertig'];
                return labels[rounded] || '';
            }}
            stroke="#94a3b8"
            width={100}
            tick={{ fontSize: 11, fill: '#94a3b8' }}
            label={{ 
              value: 'Produktionsreife', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle' },
              fill: '#cbd5e1',
              offset: 10
            }}
          />
          
          <ZAxis type="number" dataKey="z" range={[60, 60]} />
          
          <Tooltip 
            cursor={{ strokeDasharray: '3 3' }} 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-slate-800 border border-slate-600 p-3 rounded shadow-2xl text-xs z-50 max-w-[200px]">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl">{data.icon}</span>
                        <p className="font-bold text-white text-sm">{data.type}</p>
                    </div>
                    <div className="w-full h-px bg-slate-600 mb-2"></div>
                    <p className="text-slate-300 mb-2 italic">{data.definition}</p>
                    <p className="text-indigo-300">Autonomie: {data.autonomy}</p>
                    <p className="text-emerald-300">Reife: {data.productionReadiness}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          
          <Scatter name="Paradigms" data={chartData} shape={<EmojiShape />}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="transparent" />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ParadigmChart;