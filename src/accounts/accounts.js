'use strict';

// 3rd party resources
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

// Styling resources
import './accounts.scss';

function Accounts() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseNote = () => setShow(false);
  const handleShowNote = () => setShow(true);

  return (
    <div>
      <h1>ACCOUNTS</h1>
      <div className="userTitle">
        <h1>My Name</h1>
        <h3>Organization: </h3>
        <h3>Role(s): </h3>
        <h3>email: </h3>
        <h3>Phone: </h3>
      </div>
      <div className="container">
        <div className="userNotes">
          <Card className="userNotesCard" style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title style={{ color: 'black' }}>Notes</Card.Title>
              <Card.Text style={{ color: 'black' }}>
                                Notes!
              </Card.Text>
            </Card.Body>
          </Card>
          <Button variant="primary" onClick={handleShowNote}>Add new note</Button>
          <Modal show={show} onHide={handleCloseNote}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Add a new note
              <Form>
                <Form.Control type="text" placeholder="Create note" />
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="userAlertCard">
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title style={{ color: 'black' }}>Alerts</Card.Title>
              <Card.Text style={{ color: 'black' }}>
                                Alerts
              </Card.Text>
            </Card.Body>
          </Card>
          <Button variant="primary" onClick={handleShow}>Create Alert</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Create Alert
              <Form>
                <Form.Control type="text" placeholder="Create Alert"></Form.Control>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Accounts;
