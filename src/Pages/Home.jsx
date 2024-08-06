import React, { useState } from 'react';
import SignupModal from './SignupModal';
import SigninModal from './SigninModal';

function Home() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showSigninModal, setShowSigninModal] = useState(false);

  const handleShowSignup = () => setShowSignupModal(true);
  const handleCloseSignup = () => setShowSignupModal(false);

  const handleShowSignin = () => setShowSigninModal(true);
  const handleCloseSignin = () => setShowSigninModal(false);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-black text-white">
  

      <div className="row text-center">
        <div className="col">
          <div>
            {}
          </div>
          <h1 className="mb-3">Esnek Çalışma Saatleri</h1>
          <p className="mb-4">Hemen katıl.</p>
          <button className="btn btn-primary mb-3 w-100" onClick={handleShowSignup}>Hesap oluştur</button>
          
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
