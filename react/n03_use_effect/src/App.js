import './App.css';
import Viewer from './components/Viewer';
import Controllers from './components/Controllers';
import { useState, useEffect, useRef, useDebugValue} from 'react';

function App() {

  const [count, setCount] = useState(0)
  const handleSetCount = (value) => {
    setCount(count + value)
  }

  const [text, setText] = useState("")
  const handleSetText = (e) => {
    setText(e.target.value)
  }

  // useEffect(()=>{
  //   console.log("count 업데이트 : ", count, text)
  // }, [count, text])
 
  // const didMountRef = useRef(false)
  // useEffect(()=> {
  //   if(!didMountRef.current){
  //     didMountRef.current = true
  //     return
  //   } else {
  //     console.log("컴포넌트 업데이트!")
  //   }
  // })

  // useEffect(()=> {
  //   console.log("컴포넌트 마운트")
  // }, [])

  // useEffect(()=>{
  //   const intervalID = setInterval(()=>{
  //     console.log("깜빡")
  //   }, 1000)

  //   return () => {
  //     console.log("Clean Up")
  //     clearInterval(intervalID)
  //   }
  // })

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controllers handleSetCount={handleSetCount}/>
      </section>
      <section>
        <input value={text} onChange={handleSetText} />
      </section>
    </div>
  );
}

export default App;
