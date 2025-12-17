import React from 'react';
import { ParadigmData } from '../types';
import Icon from './Icon';

interface DetailModalProps {
  data: ParadigmData | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-800 flex justify-between items-start">
          <div className="flex items-start gap-4">
            <div className="text-4xl bg-slate-800 p-2 rounded-lg border border-slate-700 shadow-inner">
                {data.icon}
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                {data.type}
                <span className="text-sm px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-normal">
                    {data.origin}
                </span>
                </h2>
                <p className="text-slate-400 text-lg">{data.definition}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Examples Section */}
        <div className="px-6 py-4 bg-indigo-950/20 border-b border-slate-800/50">
           <h3 className="text-indigo-400 font-semibold text-xs uppercase tracking-wider mb-2">Bekannte Beispiele & Tools</h3>
           <p className="text-slate-200 font-mono text-sm">{data.examples}</p>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Section title="Das Wichtigste">
              <Metric label="Wie viel macht es allein?" value={data.autonomy} />
              <Metric label="Woher kommt das Wissen?" value={data.sourceOfTruth} />
              <Metric label="Wie aufwendig ist es?" value={data.latency} />
              <Metric label="Gibt es Überraschungen?" value={data.predictability} />
            </Section>
            
            <Section title="Qualität & Gefahren">
              <Metric label="Wie gut ist der Code?" value={data.codeQuality} />
              <Metric label="Was geht oft schief?" value={data.typicalError} highlight />
            </Section>
          </div>

          <div className="space-y-4">
             <Section title="Im echten Leben">
              <Metric label="Kann man es nutzen?" value={data.productionReadiness} />
              <Metric label="Geht das im Team?" value={data.teamScaling} />
              <Metric label="Kann man es prüfen?" value={data.reviewability} />
              <Metric label="Erlaubt vom Chef?" value={data.governanceFit} />
              <Metric label="Lernt man es schnell?" value={data.onboarding} />
            </Section>

            <Section title="Zusammenarbeit">
               <Metric label="Passt es zu anderem?" value={data.compatibility} />
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-800">
    <h3 className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-3">{title}</h3>
    <div className="space-y-2">
      {children}
    </div>
  </div>
);

const Metric: React.FC<{ label: string; value: string; highlight?: boolean }> = ({ label, value, highlight }) => (
  <div className="flex justify-between items-center border-b border-slate-800/50 pb-2 last:border-0 last:pb-0">
    <span className="text-slate-400 text-sm">{label}</span>
    <span className={`font-medium ${highlight ? 'text-red-400' : 'text-slate-200'}`}>
      <Icon symbol={value} />
    </span>
  </div>
);

export default DetailModal;