// Fix: Import React to resolve missing namespace error for React.ReactNode
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SellPoint {
  metric: string;
  label: string;
  sublabel: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}