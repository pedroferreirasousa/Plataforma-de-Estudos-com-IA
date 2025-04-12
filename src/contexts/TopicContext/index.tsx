"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface TopicContextProps {
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
}

const TopicContext = createContext<TopicContextProps | undefined>(undefined);

interface TopicProviderProps {
  children: ReactNode;
}

export const TopicProvider: React.FC<TopicProviderProps> = ({ children }) => {
  const [topic, setTopic] = useState('');

  return (
    <TopicContext.Provider value={{ topic, setTopic }}>
      {children}
    </TopicContext.Provider>
  );
};

export const useTopic = () => {
  const context = useContext(TopicContext);
  if (!context) {
    throw new Error('useTopic deve ser usado dentro de um TopicProvider');
  }
  return context;
};