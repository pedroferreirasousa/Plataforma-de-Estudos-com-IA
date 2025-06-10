import { Question } from '@/contexts/QuizContext';

const API_BASE_URL = '/api';

export const fetchQuizQuestions = async (topic: string, amount: number = 10): Promise<{ questions: Question[] }> => {
    try {
        const response = await fetch(`${API_BASE_URL}/quiz`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ topic, amount }),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data?.error || 'Erro ao buscar perguntas para o quiz.');
        }
        const data = await response.json();
        return data as { questions: Question[] };
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw error;
        } else {
            throw new Error('Erro ao buscar perguntas para o quiz.');
        }
    }
};

export const fetchQuizHelp = async (topic: string, question: string, options: string[]): Promise<string> => {
    try {
        const response = await fetch(`${API_BASE_URL}/quiz/help`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ topic, question, options }),
        });
        if (!response.ok) {
            const data = await response.json();
            throw new Error(data?.error || 'Erro ao buscar ajuda para a pergunta.');
        }
        const data = await response.json();
        return data.help as string;
    } catch (error: unknown) {
        console.error('Erro ao buscar ajuda para a pergunta:', error);
        throw new Error('Ocorreu um erro ao buscar ajuda para a pergunta.');
    }
};