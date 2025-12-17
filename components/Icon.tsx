import React from 'react';
import { LEGEND_ITEMS } from '../constants';

// Build a lookup map once
const ICON_LABELS: Record<string, string> = {};

if (LEGEND_ITEMS && Array.isArray(LEGEND_ITEMS)) {
    LEGEND_ITEMS.forEach(item => {
        ICON_LABELS[item.icon] = item.label;
    });
}

interface IconProps {
    symbol: string;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({ symbol, className }) => {
    const label = ICON_LABELS[symbol];
    
    // If no label found (e.g. it's just text like "High"), render as is
    if (!label) {
        return <span className={className}>{symbol}</span>;
    }

    return (
        <span 
            title={label} 
            className={`cursor-help transition-opacity hover:opacity-80 inline-block ${className || ''}`}
            aria-label={label}
            role="img"
        >
            {symbol}
        </span>
    );
};

export default Icon;