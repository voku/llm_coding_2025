export enum ReadinessLevel {
  ProductionReady = '🟢',
  Conditional = '🟡',
  Restricted = '⚠️',
  NotReady = '❌',
}

export enum AutonomyLevel {
  Low = '🤏',
  Medium = '🤖',
  High = '🔥',
  Extreme = '🚨',
}

export enum LatencyLevel {
  EarlyCheap = '⚡',
  Normal = '⏱️',
  LateExpensive = '🐢',
}

export enum QualityLevel {
  Low = '🔴',
  Medium = '🟡',
  High = '🟢', // Used for quality, onboarding etc in some contexts
}

export interface ParadigmData {
  id: string;
  icon: string; // New unique emoji for the paradigm
  type: string;
  definition: string;
  examples: string; 
  autonomy: AutonomyLevel;
  sourceOfTruth: string;
  latency: LatencyLevel; 
  predictability: string; 
  codeQuality: string; 
  compatibility: string; 
  origin: string; 
  productionReadiness: ReadinessLevel;
  teamScaling: string; 
  reviewability: string; 
  onboarding: string; 
  typicalError: string;
  governanceFit: string; 
}

// Helper to convert icons to numeric values for charts
export const getReadinessScore = (level: ReadinessLevel): number => {
  switch (level) {
    case ReadinessLevel.ProductionReady: return 3;
    case ReadinessLevel.Conditional: return 2;
    case ReadinessLevel.Restricted: return 1;
    case ReadinessLevel.NotReady: return 0;
    default: return 0;
  }
};

export const getAutonomyScore = (level: AutonomyLevel): number => {
  switch (level) {
    case AutonomyLevel.Extreme: return 4;
    case AutonomyLevel.High: return 3;
    case AutonomyLevel.Medium: return 2;
    case AutonomyLevel.Low: return 1;
    default: return 1;
  }
};