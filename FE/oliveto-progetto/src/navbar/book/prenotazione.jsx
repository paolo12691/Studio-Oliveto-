import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function PrenotazionePage() {
  const [nome, setNome] = useState('');
  const [dataArrivo, setDataArrivo] = useState('');
  const [dataPartenza, setDataPartenza] = useState('');
  const [numAdulti, setNumAdulti] = useState(1);
  const [numBambini, setNumBambini] = useState(0);
  const [note, setNote] = useState('');

  const handleBooking = () => {
    console.log('Prenotazione:', { nome, dataArrivo, dataPartenza, numAdulti, numBambini, note });
    // Puoi implementare la logica di prenotazione o chiamare un'API qui
  };

  return (
    <div>
      <h2>Prenotazione</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formNome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDataArrivo">
          <Form.Label>Data di Arrivo:</Form.Label>
          <Form.Control type="date" value={dataArrivo} onChange={(e) => setDataArrivo(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDataPartenza">
          <Form.Label>Data di Partenza:</Form.Label>
          <Form.Control type="date" value={dataPartenza} onChange={(e) => setDataPartenza(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNumAdulti">
          <Form.Label>Numero di Adulti:</Form.Label>
          <Form.Control type="number" value={numAdulti} onChange={(e) => setNumAdulti(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNumBambini">
          <Form.Label>Numero di Bambini:</Form.Label>
          <Form.Control type="number" value={numBambini} onChange={(e) => setNumBambini(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formNote">
          <Form.Label>Note:</Form.Label>
          <Form.Control as="textarea" rows={3} value={note} onChange={(e) => setNote(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleBooking}>
          Prenota
        </Button>
      </Form>
    </div>
  );
}

export default PrenotazionePage;

