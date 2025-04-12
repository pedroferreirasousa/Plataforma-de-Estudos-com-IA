import React, { ReactNode } from 'react';
import {TopicProvider} from './TopicContext';


interface AppProvidersProps {
    children: ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
    return (
        <TopicProvider>
            {children}
        </TopicProvider>

    );
}

export default AppProviders;