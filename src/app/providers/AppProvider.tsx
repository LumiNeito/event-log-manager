import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';
import { queryClient } from '../queryClient';
import '../i18n';

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider locale={ruRU}>
                {children}
            </ConfigProvider>
        </QueryClientProvider>
    </BrowserRouter>
);
