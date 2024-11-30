import React from 'react';
import './App.css';  
import CommentSection from './Components/CommentSection'; 
import { comments } from './comments.json';  

const App = () => {
  return (
    <div className="app-container">
      <CommentSection comments={comments} />
    </div>
  );
};

export default App;
