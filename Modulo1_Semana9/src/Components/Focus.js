import './style.css';
import { useRef } from 'react';

export default function Focus() {

  const inputFocus = useRef(0);  

  function analisaFocus(e) {
        inputFocus.current.focus();
  }


  return (
    <div className='div-focus'>
        <input ref={inputFocus} type='text' placeholder='Digite aqui'></input>
        <button onClick={analisaFocus}>Focar no Input</button>
    </div>
  )  
}