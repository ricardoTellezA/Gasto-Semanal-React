
import { useState,useEffect } from 'react';
import { ControlPresupuesto } from './components/ControlPresupuesto';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { Pregunta } from './components/Pregunta';

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, guardarGastos] = useState([]);
  const [gasto,guardarGasto] = useState({});
  const [crearGasto, guardarCrear] = useState(false);

  useEffect(() =>{ 
    if(crearGasto){
      guardarGastos([
        ...gastos, gasto
      ]);


      const totalRestante = restante - gasto.cantidad;
     
      
      guardarRestante(totalRestante);
      
        guardarCrear(false);
    }
   
  }, [gasto,crearGasto,gastos,restante] );

 
  return (
    <div className='container'>
      <header>
        <h1>Gasto semanal</h1>



        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario guardarGasto={guardarGasto} 
                  guardarCrear={guardarCrear}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />

                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />


              </div>

            </div>)}






        </div>

      </header>




    </div>
  );
}

export default App;
