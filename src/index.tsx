import ReactDOM from 'react-dom/client';
import './styles/reset.scss';
import './styles/root.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React from 'react';

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
)
.render(<App />);

reportWebVitals();
