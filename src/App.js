import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {Fragment, useEffect, useState} from 'react';
import Formulario from './components/Formulario'
import Cliente from './components/Cliente'

function App() {

  //generar hook vacio
  const [clientes, editarClientes] = useState([]);

  //hook useEffect: sirve para ejecutar alguna funcionalidad

  useEffect( () => {

  }, []);

  //funcion que toma el socio nuevo
  const agregarCliente = (socio) => {
    editarClientes([
          ...clientes,
          socio
    ])
  };

  //borrar cliente

  const borrarCliente = (id) => {
    const nuevosClientes = clientes.filter(cliente => cliente.id !== id)
    editarClientes(nuevosClientes);
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Col><h2>Preinscripción al curso</h2></Col>
        </Row>
        <Row>
          <Col>
            <Formulario
              agregarCliente={agregarCliente}
            />
          </Col>
          <Col>
            {
              clientes.length > 0 ?
              <h3>listado de estudiantes</h3>
              :
              <h3>no hay estudiantes inscriptos</h3>
            }
            {
              clientes.map( cliente =>
                <Cliente
                  cliente={cliente}
                  key={cliente.id}
                  borrarCliente={borrarCliente}
                />
                )
            }
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;

