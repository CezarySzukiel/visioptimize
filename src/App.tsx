import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const element = useRoutes(routes);
    return (
        <div className="App">
          <Header />
          {element}
          <Footer />
        </div>
    );
}

export default App;
