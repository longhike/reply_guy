import React, {useState} from 'react';
import Container from 'react-bootstrap/Container'
import Header from './Components/Header'

function App() {

  

  return (
    <div className="App">
      <Header />
      <Container className='Main'>
        Hi from the container
      </Container>

    </div>
  );
}

export default App;
