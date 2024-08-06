import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './SignupModal.css' // Bu dosyanın yolunu doğru belirlediğinizden emin olun

function SignupModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{ backgroundColor: 'black', borderBottom: 'none' }}>
        <Modal.Title style={{ color: 'white' }}>Hesabını oluştur</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'black', color: 'white' }}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#1d9bf0' }}>İsim</Form.Label>
            <Form.Control type="text" placeholder="İsim" maxLength="50" className="form-control" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#6c757d' }}>Telefon</Form.Label>
            <Form.Control type="tel" placeholder="Telefon" className="form-control" />
          </Form.Group>
         
          <Button variant="primary" className="w-100" type="submit" style={{ backgroundColor: '#444', borderColor: '#444' }}>
            İleri
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default SignupModal;
