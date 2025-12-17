import React from 'react';
import { ParadigmData } from '../types';
import Icon from './Icon';

interface ParadigmTableProps {
  data: ParadigmData[];
  onSelect: (item: ParadigmData) => void;
}

const ParadigmTable: React.FC<ParadigmTableProps> = ({ data, onSelect }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-800 shadow-xl bg-slate-900/50">
      <table className="w-full text-left text-sm text-slate-300">
        <thead className="bg-slate-950 text-xs uppercase text-slate-400 font-bold sticky top-0 z-10 shadow-sm">
          <tr>
            <th className="px-4 py-4 w-12 text-center">#</th>
            <th className="px-4 py-4 min-w-[180px]">Name</th>
            <th className="px-4 py-4 min-w-[200px]">Was ist das?</th>
            <th className="px-4 py-4 min-w-[200px]">Beispiele</th>
            <th className="px-4 py-4 text-center">Selbstständig?</th>
            <th className="px-4 py-4 text-center">Fertig?</th>
            <th className="px-4 py-4 text-center">Wahrheit</th>
            <th className="px-4 py-4 text-center">Aufwand</th>
            <th className="px-4 py-4 text-center">Qualität</th>
            <th className="px-4 py-4 text-center">Regeln</th>
            <th className="px-4 py-4 text-center">Team</th>
            <th className="px-4 py-4 min-w-[150px]">Typisches Problem</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {data.map((item) => (
            <tr 
              key={item.id} 
              onClick={() => onSelect(item)}
              className="hover:bg-slate-800/50 cursor-pointer transition-colors group"
            >
              <td className="px-4 py-4 text-xl text-center">{item.icon}</td>
              <td className="px-4 py-4 font-medium text-white whitespace-nowrap group-hover:text-indigo-300 transition-colors">
                {item.type}
              </td>
              <td className="px-4 py-4 text-slate-400">{item.definition}</td>
              <td className="px-4 py-4 text-slate-500 text-xs">{item.examples}</td>
              <td className="px-4 py-4 text-center text-lg">
                <Icon symbol={item.autonomy} />
              </td>
              <td className="px-4 py-4 text-center text-lg">
                <Icon symbol={item.productionReadiness} />
              </td>
              <td className="px-4 py-4 text-center whitespace-nowrap text-xs text-slate-400">{item.sourceOfTruth}</td>
              <td className="px-4 py-4 text-center text-lg">
                <Icon symbol={item.latency} />
              </td>
              <td className="px-4 py-4 text-center text-xs">{item.codeQuality}</td>
              <td className="px-4 py-4 text-center text-lg">
                <Icon symbol={item.governanceFit} />
              </td>
              <td className="px-4 py-4 text-center text-lg">
                <Icon symbol={item.teamScaling} />
              </td>
              <td className="px-4 py-4 text-red-300/80 text-xs italic">{item.typicalError}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ParadigmTable;