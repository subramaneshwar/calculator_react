import React from 'react'
import './button.css'
function Buttons({value,setvalue,setresult,result} ) {
    function myclick(event){
      // if(value==="0"){
      //   setvalue(event.target.innerText)
      //   setresult(event.target.innerText)
      // }else{
        setvalue(value+event.target.innerText)
        setresult(event.target.innerText)
        console.log("value",value)
      // }
        
    }
    function myclicks(event){
        console.log(event.target.innerText)
        setvalue("")
        setresult("0")
      }
      function equal(event){
      console.log(event.target.innerText)
      const val= eval(value)
      console.log(val)
      setresult(val)
    }
  return (
    <div>
        <div>
        <button className="button_ac" onClick={myclicks } >AC</button>
        <button className="buttons" onClick={myclick} >/</button>
        <button className="buttons" onClick={myclick} >*</button>
        </div>
        <div>
        <button className="buttons" onClick={myclick} >7</button>
        <button className="buttons" onClick={myclick} >8</button>
        <button className="buttons" onClick={myclick} >9</button>
        <button className="buttons" onClick={myclick} >-</button>
        </div>
        <div>
        <button className="buttons" onClick={myclick} >4</button>
        <button className="buttons" onClick={myclick} >5</button>
        <button className="buttons" onClick={myclick} >6</button>
        <button className="buttons" onClick={myclick} >+</button>
        </div>
        <div className='equ'>
          <div>
        <button className="buttons" onClick={myclick} >1</button>
        <button className="buttons" onClick={myclick}>2</button>
        <button className="buttons" onClick={myclick} >3</button>
        <div>
        <button className="buttonsze" onClick={myclick} >0</button>
        <button className="buttons" onClick={myclick}>.</button>
        </div>
          </div>
        <div>
        <button className="buttoneq" onClick={equal} >=</button>
        </div>
        
        </div>
    </div>
  )
}

export default Buttons