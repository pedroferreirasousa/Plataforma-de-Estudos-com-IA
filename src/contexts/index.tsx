import React, { ReactNode } from 'react';
import { TopicProvider } from './TopicContext';
import { QuizProvider } from './QuizContext';


interface AppProvidersProps {
    children: ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
    return (
        <TopicProvider>
            <QuizProvider>
                {children}
            </QuizProvider>
        </TopicProvider>

    );
}

export default AppProviders;