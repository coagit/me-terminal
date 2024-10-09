import './app.css';
import App from './App.svelte';

const rootElement = document.getElementById('app');

if (!rootElement) {
  throw new Error('No root element found with id: "app"');
}

const app = new App({
  target: rootElement,
});

export default app;
