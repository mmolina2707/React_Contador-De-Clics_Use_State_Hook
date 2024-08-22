import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const[numClics, setNumClis] = useState(0);

  const manejarClic = () => {
    setNumClis(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClis(0);
  }


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className= 'freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton
          texto= 'Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        
        <Boton
          texto= 'Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>


      </div>

    </div>
  );
}

export default App;
