import React, { useState } from 'react';
import './App.css';

function WordCounter() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter((word) => word !== '').length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="word-counter">
      <form>
        <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Type or paste your text here..."
        rows="5"
        onChange={handleTextChange}
        value={text}
      />
      <p>Word Count: {wordCount}</p>
      </form>
    </div>
  );
}

export default WordCounter;
