import { useState } from 'react';

interface StudyPlanResult {
  plan: string;
  loading: boolean;
  topic: string;
  setTopic: React.Dispatch<React.SetStateAction<string>>;
  fetchStudyPlan: (topic: string) => Promise<void>;
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
      const response = await fetch('/api/studyplanner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: currentTopic }),
      });

      const data = await response.json();
      if (response.ok) {
        setPlan(data.result);
      } else {
        console.error('Erro ao gerar plano:', data);
        setPlan('Erro ao gerar plano. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao chamar API:', error);
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