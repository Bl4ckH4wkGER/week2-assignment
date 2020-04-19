import React from 'react';
import './App.css';
import YourArticles from './your-articles';
import MissedArticles from './missed-articles'
import './articles.css';


function App() {
  return (
    <div className="App">
      <YourArticles />
      <MissedArticles />
    </div>
  );
}

export default App;
