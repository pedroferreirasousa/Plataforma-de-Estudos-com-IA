"use client";

import { useEffect, useState } from 'react';
import { useTopic } from '@/contexts/TopicContext';
import { UseQuizContext } from '@/contexts/QuizContext';
import { fetchQuizQuestions, fetchQuizHelp } from '@/services/quizService';

const useQuiz = () => {
  const { topic } = useTopic();
  const { setQuestions, startQuiz, setHelpMessage, quizStarted, questions, error, setError } = UseQuizContext();
  const [isFetchingQuestions, setIsFetchingQuestions] = useState(false);
  const [isAskingHelp, setIsAskingHelp] = useState(false);

  useEffect(() => {
    const loadQuizQuestions = async () => {
      if (!topic) return;

      setIsFetchingQuestions(true);
      setError(null);
      try {
        const data = await fetchQuizQuestions(topic);
        console.log('Dados recebidos da API:', data);
        if (data && Array.isArray(data.questions)) {
          console.log('Perguntas extraídas:', data.questions);
          setQuestions(data.questions);
        } else {
          console.error('Formato de resposta inválido da API:', data);
          setError('Formato de resposta inválido ao carregar as perguntas.');
        }
      } catch (err: unknown) {
        console.error('Erro ao buscar perguntas do quiz:', err);
        setError('Ocorreu um erro ao carregar as perguntas do quiz.');
      } finally {
        setIsFetchingQuestions(false);
      }
    };

    if (quizStarted && questions.length === 0 && !error && !isFetchingQuestions) {
      loadQuizQuestions();
    }
  }, [topic, quizStarted, setQuestions, questions.length, error, setError, isFetchingQuestions]);

  const getHelp = async (currentQuestion: { question: string; options: string[] }) => {
    if (!currentQuestion) return;

    setIsAskingHelp(true);
    setHelpMessage('Buscando ajuda...');
    try {
      const helpText = await fetchQuizHelp(topic, currentQuestion.question, currentQuestion.options);
      setHelpMessage(helpText);
    } catch (err: unknown) {
      console.error('Erro ao obter ajuda:', err);
      setHelpMessage('Ocorreu um erro ao solicitar ajuda.');
    } finally {
      setIsAskingHelp(false);
    }
  };

  return {
    startQuiz,
    getHelp,
    isFetchingQuestions,
    isAskingHelp,
  };
};

export default useQuiz;