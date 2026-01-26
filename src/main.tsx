import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './app/queryClient.ts'
import './app/i18n';
import { ConfigProvider } from 'antd'
import ruRU from 'antd/locale/ru_RU';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={ruRU}>
        <App />
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>,
)
