import { useState } from "react";

// 부모에서 보낸 데이터는 반드시 {} 안에 칼럼을 작성한다.
function InputText({name, age}){ 
    const [text, setText] = useState("")
    const handleOnClick = (e) => {
        setText(e.target.value)
    }

    return(
        <>
        <h2>{name} : {text}</h2>
        <input value={text} onChange={handleOnClick} />
        <p>{age}</p>
        </>
    )
}

export default InputText