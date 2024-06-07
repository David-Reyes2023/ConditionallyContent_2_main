import { Instructions } from './components/Instructions'
import './App.css'
import {useState} from 'react';

function App() {
  /* Hook useState */

  const [mostrar, setMostrar] = useState(false);


  /*  Función alamacenada en una variable para setear el valor de mostrar = true (esconder la caja de texto) */

  const handleMostrar = () => {
    setMostrar(true);
  };

 /*  Función alamacenada en una variable para setear el valor de mostrar = false (mostrar la caja de texto) */

 const handleEsconder = () => {
    setMostrar(false);
 };

  return (
    <>
      <section id='instructions'>
        <Instructions/>
      </section>
      
      <div>
        {mostrar ? (
          <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleEsconder}>Proceed</button>
        </div>
        ) : (
          <button onClick = {handleMostrar}>Delete</button>
        )}
        </div>    
    </>
  )
}

export default App
