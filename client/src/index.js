import React from 'react'; 
import axios from "axios";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));

if (localStorage.ZomatoUser) {
  const token =localStorage.ZomatoUser;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
axios.defaults.baseURL = process.env.REACT_APP_SERVER_BASEURL;
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);

