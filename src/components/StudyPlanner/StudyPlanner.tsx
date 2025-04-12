'use client';

import React, { useState } from 'react';
import './StudyPlanner.scss';
import ReactMarkdown from 'react-markdown';
import { useTopic } from '@/contexts/TopicContext';

const StudyPlanner = () => {
  const { topic, setTopic } = useTopic();
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setPlan('');

    try {
      const response = await fetch('/api/studyplanner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
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

  return (
    <div className="study-planner">
      <h1>Crie seu plano de estudos</h1>
      <p>Digite um tema e receba um plano de estudos personalizado.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite um tema (ex: Programação, Inglês, Design ...)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Gerando...' : 'Gerar Plano'}
        </button>
      </form>

      {plan && (
        <div className="study-plan-result">
          <ReactMarkdown>{plan}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default StudyPlanner;