import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/tailwind.css';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import App from './App.tsx';

const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)