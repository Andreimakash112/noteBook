import React from 'react';
import './App.css';
import Main from './views/Main'
import Footer from './components/Footer'
import Name from './components/Name'
function App() {
  return (
    <div className="App">
     <Name /> 
     <Main />
    <Footer />
    </div>
  );
}

export default App;
