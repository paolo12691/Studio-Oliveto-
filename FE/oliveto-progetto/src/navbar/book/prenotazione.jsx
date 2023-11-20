import React, { useState } from 'react';
import { Form, Button, Table, Alert } from 'react-bootstrap';
import { makeBooking } from '../book/api';

function PrenotazionePage() {
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');
  const [email, setEmail] = useState('');
  const [dataArrivo, setDataArrivo] = useState('');
  const [dataPartenza, setDataPartenza] = useState('');
  const [numAdulti, setNumAdulti] = useState(1);
  const [numBambini, setNumBambini] = useState(0);
  const [etaBambino, setEtaBambino] = useState('');
  const [note, setNote] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleBooking = () => {
    // Verifica se tutti i campi obbligatori sono compilati
    if (nome && cognome && email && dataArrivo && dataPartenza) {
      // Puoi implementare la logica di prenotazione o chiamare un'API qui
      console.log('Prenotazione:', { nome, cognome, email, dataArrivo, dataPartenza, numAdulti, numBambini, etaBambino, note });
      // Mostra l'alert di successo
      setShowSuccessAlert(true);
      // Nascondi l'alert di errore se è attivo
      setShowErrorAlert(false);
    } else {
      // Mostra l'alert di errore
      setShowErrorAlert(true);
      // Nascondi l'alert di successo se è attivo
      setShowSuccessAlert(false);
    }
  };

  // Funzione per calcolare l'età del bambino
  const calculateChildAge = (dateOfBirth) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      return age - 1;
    }
    return age;
  };

  // Funzione per validare l'età del bambino
  const validateChildAge = () => {
    const childAge = calculateChildAge(dataArrivo);
    return childAge <= 15;
  };

  return (
    <div className="prenotazione-container">
      <h2>Prenotazione</h2>
      {showSuccessAlert && (
        <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
          Prenotazione effettuata con successo!
        </Alert>
      )}
      {showErrorAlert && (
        <Alert variant="danger" onClose={() => setShowErrorAlert(false)} dismissible>
          Compila tutti i campi obbligatori.
        </Alert>
      )}
      <Form>
        <Form.Group className="mb-3" controlId="formNome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCognome">
          <Form.Label>Cognome:</Form.Label>
          <Form.Control type="text" value={cognome} onChange={(e) => setCognome(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
          <Form.Control
            type="number"
            value={numBambini}
            onChange={(e) => setNumBambini(e.target.value)}
          />
        </Form.Group>

        {numBambini > 0 && (
          <Form.Group className="mb-3" controlId="formEtaBambino">
            <Form.Label>Età del Bambino:</Form.Label>
            <Form.Control
              type="number"
              value={etaBambino}
              onChange={(e) => setEtaBambino(e.target.value)}
              isInvalid={etaBambino > 15}
            />
            <Form.Control.Feedback type="invalid">
              Il bambino deve avere massimo 15 anni.
            </Form.Control.Feedback>
          </Form.Group>
        )}

        <Form.Group className="mb-3" controlId="formNote">
          <Form.Label>Note:</Form.Label>
          <Form.Control as="textarea" rows={3} value={note} onChange={(e) => setNote(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleBooking}>
          Prenota
        </Button>
      </Form>

      {/* Tabella di riepilogo */}
      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Email</th>
            <th>Arrivo</th>
            <th>Partenza</th>
            <th>Adulti</th>
            <th>Bambini</th>
            <th>Età Bambino</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{nome}</td>
            <td>{cognome}</td>
            <td>{email}</td>
            <td>{dataArrivo}</td>
            <td>{dataPartenza}</td>
            <td>{numAdulti}</td>
            <td>{numBambini}</td>
            <td>{etaBambino}</td>
            <td>{note}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default PrenotazionePage;