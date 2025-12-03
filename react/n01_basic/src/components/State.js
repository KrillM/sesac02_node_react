import { useState } from "react"
import InputText from './InputText'

function State(){
    const [count, setCount] = useState(0)
    const add = () => {
        setCount(count + 1)
    }

    const setted = {
        name: 'yena',
        age: 19
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={add}>+</button>

            <InputText {...setted}/>
        </div>
    )
}

export default State