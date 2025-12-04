import './App.css';
import Viewer from './components/Viewer';
import Controllers from './components/Controllers';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)
  const handleSetCount = (value) => {
    setCount(count + value)
  }
 
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controllers handleSetCount={handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
