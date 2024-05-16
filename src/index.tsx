import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@assets/less/index';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '@context/AuthProvider';
import ThemeProvider from '@context/ThemeProvider';
import NavigationProvider from '@context/NavigationProvider';
import ReactGA from 'react-ga';
import { Workbox } from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');

  wb.register();
}

const { pathname, search } = window.location;
ReactGA.initialize('UA-171535365-2');
ReactGA.pageview(pathname + search);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <NavigationProvider>
          <App />
        </NavigationProvider>
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
