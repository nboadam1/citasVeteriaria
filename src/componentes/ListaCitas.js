import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

class ListaCitas extends Component {
    render() {
        const citas = this.props.citas;
        const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administra tus citas aquí!'
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className="lista-citas">
                        {
                            Object.keys(citas).map( key => (
                                <Cita 
                                    key={citas[key].id}
                                    cita={citas[key]}
                                    borrarCita={this.props.borrarCita}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

ListaCitas.propTypes = {
    borrarCita : PropTypes.func.isRequired,
    citas : PropTypes.array.isRequired
}

export default ListaCitas;