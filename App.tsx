import React, { useState } from 'react';
import { PARADIGMS } from './constants';
import { ParadigmData } from './types';
import ParadigmTable from './components/ParadigmTable';
import ParadigmChart from './components/ParadigmChart';
import DetailModal from './components/DetailModal';
import Legend from './components/Legend';

const App: React.FC = () => {
  const [selectedParadigm, setSelectedParadigm] = useState<ParadigmData | null>(null);

  return (
    <div className="min-h-screen p-4 md:p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            AI Coding Paradigms <span className="text-slate-500 font-light">2025</span>
          </h1>
          <p className="text-slate-400 mt-2 max-w-2xl">
            Eine einfache Übersicht über die verschiedenen Arten, wie Computer uns heute beim Programmieren helfen – basierend auf echten Daten.
          </p>
        </div>
        <div className="text-right hidden md:block">
           <div className="text-slate-500 text-sm font-mono">Anzahl der Arten</div>
           <div className="text-3xl font-bold text-white">{PARADIGMS.length}</div>
        </div>
      </header>

      {/* Analytics & Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2">
           <ParadigmChart data={PARADIGMS} />
        </div>

        {/* Legend only, since filter is removed */}
        <div className="space-y-4">
          <Legend />
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-sm text-slate-400">
            <p><strong>Hinweis:</strong> Das Diagramm zeigt das Verhältnis von Automatisierung (X-Achse) zu Produktionsreife (Y-Achse).</p>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <section>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <span className="w-2 h-6 bg-indigo-500 rounded-full"></span>
          Die große Vergleichstabelle
        </h2>
        <ParadigmTable data={PARADIGMS} onSelect={setSelectedParadigm} />
        <p className="text-center text-slate-600 text-sm mt-4">
          Klicke auf eine Zeile, um mehr zu erfahren.
        </p>
      </section>

      {/* Modal */}
      <DetailModal 
        data={selectedParadigm} 
        onClose={() => setSelectedParadigm(null)} 
      />
      
      <footer className="text-center text-slate-600 text-xs py-8 border-t border-slate-900">
        AI Coding Paradigms 2025 Daten-Visualisierung
      </footer>
    </div>
  );
};

export default App;