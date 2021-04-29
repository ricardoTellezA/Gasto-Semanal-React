import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';


export const Pregunta = ({guardarPresupuesto,guardarRestante, actualizarPregunta}) => {
    const [cantidad, guardarCantidad] = useState(0);
    const [error, mostrarError] = useState(false);

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value));
    }
    const agregarPresupuesto = e => {
        e.preventDefault();


        //VALIDAR

        if (cantidad < 1 || isNaN(cantidad)) {
            mostrarError(true);
            return;
        }

        // VALIDACION VALIDA

        mostrarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }

    return (
        <>

            {
                error ? <Error mensaje='El Presupuesto es Incorrecto'/> : null
            }
            <h2>Coloque su presupuesto</h2>
            <form onSubmit={agregarPresupuesto}>
                <input
                    type="text"
                    placeholder="Ingrese su presupuesto"
                    className="u-full-width"
                    onChange={definirPresupuesto}

                />

                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir presupuesto"

                />

            </form>



        </>
    )
}



Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired,
}