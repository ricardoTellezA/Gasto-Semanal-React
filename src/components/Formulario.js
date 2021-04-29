import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export const Formulario = ({guardarGasto,guardarCrear}) => {

    const [nombre, agregarNombre] = useState('');
    const [cantidad, agregarCantidad] = useState(0);
    const [error, mostrarError] = useState(false);
    
    const agregarGasto = e => {
        e.preventDefault();

        //VALIDAR 

        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            mostrarError(true);
            return;

        }

        mostrarError(false);

        //GENERAR OBJETO DE GASTO
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        
        //PASAR LOS VALORES AL COMPONENTE PRINCIPAL
        guardarGasto(gasto);
        guardarCrear(true);

        //REINCIAR FORMULARIO
        agregarNombre('');
        agregarCantidad(0);
       

    }
    return (


        <form
            onSubmit={agregarGasto}
        >   
            {error ? <Error mensaje='Todos los campos son obligatorios o la cantidad no es correcta' /> : null}
            <h2>Agrega tus gastos aqui</h2>

            <div className="campo">
                <label>Nombre gasto</label>
                <input
                    type="text"
                    placeholder="Ej.Transporte"
                    className="u-full-width"
                    onChange={e => agregarNombre(e.target.value)}
                />


            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    placeholder="Ej.300"
                    className="u-full-width"
                    onChange={e => agregarCantidad(parseInt(e.target.value))}
                />


                <button
                    type="submit"
                    className="button-primary u-full-width"
                >AGREGAR GASTO</button>

            </div>

        </form>
    )
}



Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrear: PropTypes.func.isRequired,
}