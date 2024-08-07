import React, { useState } from 'react';
<<<<<<< HEAD
=======
import SignupModal from './SignupModal';
import SigninModal from './SigninModal';
import './Style.css'; // Ensure this import path is correct
>>>>>>> fbdea16e3caf6c175647e52f03e240bab4e60673

import SignupModal from '../Components/SignupModal';
import SigninModal from '../Components/SigninModal';
const Home = () => {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);

  const handleShowSignup = () => setShowSignupModal(true);
  const handleCloseSignup = () => setShowSignupModal(false);

  const handleShowSignin = () => setShowSigninModal(true);
  const handleCloseSignin = () => setShowSigninModal(false);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-custom-red text-white">
      <div className="row text-center">
        <div className="col">
          <h1 className="mb-3">Esnek Çalışma Saatleri</h1>
          <p className="mb-4">Hemen katıl.</p>
          <button className="btn btn-outline-light w-100" onClick={handleShowSignup}>Hesap oluştur</button>
          <p></p>
          <p>Hesabınıza Giriş Yapınız</p>
          <button className="btn btn-outline-light w-100" onClick={handleShowSignin}>Giriş yap</button>
        </div>
      </div>
      <SignupModal show={showSignupModal} handleClose={handleCloseSignup} />
      <SigninModal show={showSigninModal} handleClose={handleCloseSignin} />
    </div>
  );
}

export default Home;