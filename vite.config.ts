import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

const config: UserConfig = {
  plugins: [eslint(), react(), ssr()],
};

export default config;
