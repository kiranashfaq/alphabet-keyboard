import { useState } from 'react'
import { alphabets } from './assets/alphabets'
import './App.css'

function App() {
 
  const [inpValue,setInpValue]=useState()
const [selectedValue,setValue] = useState()
var randomLetter = []
function handleClick(value){
  setValue(value)
  for (let i = 0; i < alphabets.length; i++) {
    if(alphabets[i][0].toLocaleLowerCase()==value){
      randomLetter.push(alphabets[i])
    }
    
  }
  var number = Math.floor(Math.random()* randomLetter.length )
  
  var word = randomLetter[number]
  
 setInpValue(word) 
}

  return (
    <>
      <>
  <div className="input-div">
    <input type="text" value={inpValue} disabled name="" id="display" />
  </div>
  <div className="main-div">
    <button onClick={()=> handleClick('a')} className="button">A</button>
    <button onClick={()=> handleClick('b')} className="button">B</button>
    <button onClick={()=> handleClick('c')} className="button">C</button>
    <button onClick={()=> handleClick('d')} className="button">D</button>
    <button onClick={()=> handleClick('e')} className="button">E</button>
    <br />
  
    <button onClick={()=> handleClick('f')} className="btn button">F</button>
    <button onClick={()=> handleClick('g')} className="button">G</button>
    <button onClick={()=> handleClick('h')} className="button">H</button>
    <button onClick={()=> handleClick('i')} className="button">I</button>
    <button onClick={()=> handleClick('j')} className="button">J</button>
    <br />
   
    <button onClick={()=> handleClick('k')} className="btn button">K</button>
    <button onClick={()=> handleClick('l')} className="button">L</button>
    <button onClick={()=> handleClick('m')} className="button">M</button>
    <button onClick={()=> handleClick('n')} className="button">N</button>
    <button onClick={()=> handleClick('o')} className="button">O</button>
    <br />
    
    <button onClick={()=> handleClick('p')} className="btn button">P</button>
    <button onClick={()=> handleClick('q')} className="button">Q</button>
    <button onClick={()=> handleClick('r')} className="button">R</button>
    <button onClick={()=> handleClick('s')} className="button">S</button>
    <button onClick={()=> handleClick('t')} className="button">T</button>
    <br />
    
    <button onClick={()=> handleClick('u')} className="btn-2 button">U</button>
    <button onClick={()=> handleClick('v')} className="button">V</button>
    <button onClick={()=> handleClick('w')} className="button">W</button>
    <button onClick={()=> handleClick('x')} className="button">X</button>
    <br />
    
    <button onClick={()=> handleClick('y')} className="btn-3 button">Y</button>
    <button onClick={()=> handleClick('z')} className="button">Z</button>
   
  </div>
</>

    </>
  )
}

export default App
