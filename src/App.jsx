import {  useState } from 'react'
import './App.css'
import {getStories} from './network/api.js';

function App() {
  const [content, setContent] = useState('');

  async function getApiStories() {
        const stories = await getStories();
        setContent(JSON.stringify(stories, null, 2));
  }

  return (
    <>
      <h1>REST API Demo</h1>
      <div className="card">
        <button onClick={getApiStories}>
          Get Stories
        </button>
      </div>
      <pre>
        {content}
      </pre>
    </>
  )
}

export default App
