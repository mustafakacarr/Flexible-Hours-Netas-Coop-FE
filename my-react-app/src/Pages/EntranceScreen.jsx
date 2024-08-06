import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SignupModal from './SignupModel';

function EntranceScreen() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: 'black', color: 'white' }}>
      <Row className="text-center">
        <Col>
          <div>
            {/* Buraya logo veya başka içerik ekleyebilirsiniz */}
          </div>
          <h1 className="mb-3">Esnek Çalışma Saatleri</h1>
          <p className="mb-4">Hemen katıl.</p>
          <Button variant="primary" className="mb-3 w-100" onClick={handleShow}>Hesap oluştur</Button>
          <p>By signing up, you agree to the <a href="#" className="text-white">Terms of Service</a> and <a href="#" className="text-white">Privacy Policy</a>, including <a href="#" className="text-white">Cookie Use</a>.</p>
          <p>Zaten bir hesabın var mı?</p>
          <Button variant="outline-light" className="w-100">Giriş yap</Button>
        </Col>
      </Row>
      <SignupModal show={showModal} handleClose={handleClose} />
    </Container>
  );
}

export default EntranceScreen;
