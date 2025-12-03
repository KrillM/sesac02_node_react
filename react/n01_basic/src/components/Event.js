function Event(){
    function handleOnClick(){
        alert("버튼을 누르셨군요.")
    }

    return <button onClick={handleOnClick}>버튼을 누르세요.</button>
}

export default Event