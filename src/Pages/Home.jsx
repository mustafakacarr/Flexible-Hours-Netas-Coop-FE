// EntranceScreen.js
import React, { useState } from 'react';
import SignupModal from './SignupModal';


function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-black text-white">
      <div className="row text-center">
        <div className="col">
          <div>
            {}
          </div>
          <h1 className="mb-3">Esnek Çalışma Saatleri</h1>
          <p className="mb-4">Hemen katıl.</p>
          <button className="btn btn-primary mb-3 w-100" onClick={handleShow}>Hesap oluştur</button>
          <p>By signing up, you agree to the <a href="#" className="text-white">Terms of Service</a> and <a href="#" className="text-white">Privacy Policy</a>, including <a href="#" className="text-white">Cookie Use</a>.</p>
          <p>Zaten bir hesabın var mı?</p>
          <button className="btn btn-outline-light w-100">Giriş yap</button>
        </div>
      </div>
      <SignupModal show={showModal} handleClose={handleClose} />
    </div>
  );
}

export default Home;
