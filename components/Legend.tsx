import React, { useState } from 'react';
import { LEGEND_ITEMS } from '../constants';
import Icon from './Icon';

interface LegendProps {
  className?: string;
}

const Legend: React.FC<LegendProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Define groups for better organization
  const groups = [
    { title: "Wie schlau?", icons: ['🤏', '🤖', '🔥', '🚨'] },
    { title: "Wie gut?", icons: ['🟢', '🟡', '⚠️', '❌', '🔴'] },
    { title: "Aufwand", icons: ['⚡', '⏱️', '🐢'] },
    { title: "Extras", icons: ['🧩', '♻️'] },
  ];

  // Helper to find label
  const getLabel = (icon: string) => LEGEND_ITEMS.find(i => i.icon === icon)?.label || '';

  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${className}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800 transition-colors group"
      >
        <span className="text-slate-200 font-bold text-sm flex items-center gap-2">
          <span className="text-xl">📚</span> Symbol-Spickzettel
        </span>
        <span className={`text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {/* Collapsible Content */}
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 pt-0 border-t border-slate-800 space-y-6">
          <p className="text-xs text-slate-500 italic mt-2">
            Fahre mit der Maus über Symbole in der Tabelle, um dies direkt dort zu sehen.
          </p>
          
          {groups.map((group, idx) => (
            <div key={idx}>
              <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3 border-b border-slate-800 pb-1">
                {group.title}
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {group.icons.map((symbol) => (
                  <div key={symbol} className="flex items-center space-x-3 text-xs text-slate-300">
                    <span className="text-lg w-6 text-center bg-slate-950/50 rounded py-1">{symbol}</span>
                    <span>{getLabel(symbol)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legend;