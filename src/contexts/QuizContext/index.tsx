"use client";

import React, { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

export interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface QuizContextValue {
    questions: Question[];
    currentQuestionIndex: number;
    selectedAnswer: string | null;
    score: number;
    quizStarted: boolean;
    quizFinished: boolean;
    error: string | null;
    helpMessage: string | null;
    setQuestions: Dispatch<SetStateAction<Question[]>>;
    setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;
    setSelectedAnswer: Dispatch<SetStateAction<string | null>>;
    setScore: Dispatch<SetStateAction<number>>;
    setQuizStarted: Dispatch<SetStateAction<boolean>>;
    setQuizFinished: Dispatch<SetStateAction<boolean>>;
    setError: Dispatch<SetStateAction<string | null>>;
    setHelpMessage: Dispatch<SetStateAction<string | null>>;
    startQuiz: () => void;
    selectAnswer: (answer: string) => void;
    nextQuestion: () => void;
    restartQuiz: () => void;
}

const QuizContext = createContext<QuizContextValue | undefined>(undefined);

interface QuizProviderProps {
    children: React.ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [score, setScore] = useState<number>(0);
    const [quizStarted, setQuizStarted] = useState<boolean>(false);
    const [quizFinished, setQuizFinished] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [helpMessage, setHelpMessage] = useState<string | null>(null);

    const startQuiz = () => {
        setQuizStarted(true);
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setHelpMessage(null);
        setError(null);
        setQuestions([]);
    }

    const selectAnswer = (answer: string) => {
        setSelectedAnswer(answer);
        setHelpMessage(null);

    }

    const nextQuestion = () => {
        if (!selectAnswer) {
            alert('Você precisa selecionar uma resposta antes de continuar.')
            return;
        }

        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }

        setSelectedAnswer(null);
        setHelpMessage(null);
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
        } else {
            setQuizFinished(true);
        }
    }

    const restartQuiz = () => {
        setQuizStarted(false);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setScore(0);
        setQuizFinished(false);
        setError(null);
        setHelpMessage(null);
        setQuestions([]);
    }

    return (
        <QuizContext.Provider
            value={{
                questions,
                currentQuestionIndex,
                selectAnswer,
                score,
                quizStarted,
                quizFinished,
                error,
                helpMessage,
                setQuestions,
                setSelectedAnswer,
                setScore,
                setQuizStarted,
                setQuizFinished,
                setError,
                setHelpMessage,
                startQuiz,
                selectedAnswer,
                nextQuestion,
                // getHelp,
                restartQuiz,
                setCurrentQuestionIndex,
            }}
        >
            {children}
        </QuizContext.Provider>
    )

}

export const UseQuizContext = () => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error('useQuizz deve ser usado dentro de um QuizProvider');
    }
    return context;
}