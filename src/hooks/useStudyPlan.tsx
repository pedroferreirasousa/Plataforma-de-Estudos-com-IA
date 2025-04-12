"use client";

import { useState } from 'react';
import { generateStudyPlan } from '@/services/studyPlannerService';

interface StudyPlanResult {
  plan: string;
  loading: boolean;
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  fetchStudyPlan: (currentTopic: string) => Promise<void>;
}

const useStudyPlan = (): StudyPlanResult => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState('');

  const fetchStudyPlan = async (currentTopic: string) => {
    if (!currentTopic.trim()) return;

    setLoading(true);
    setPlan('');

    try {
      const data = await generateStudyPlan(currentTopic);
      setPlan(data.result);
    } catch (error: unknown) {
      console.error('Erro ao gerar plano:', error);
      setPlan('Erro ao gerar plano. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return {
    plan,
    loading,
    topic,
    setTopic,
    fetchStudyPlan,
  };
};

export default useStudyPlan;