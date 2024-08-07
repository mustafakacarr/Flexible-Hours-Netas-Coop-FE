import React, { useState } from 'react';
import ForgotPasswordModal from './ForgotPasswordModal'; // Dosya yolunu ve adını doğru yazın

function SigninModal({ show, handleClose }) {
  const [forgotPasswordShow, setForgotPasswordShow] = useState(false);

  // Şifre sıfırlama modalını gösterirken giriş yap modalını kapat
  const handleForgotPasswordShow = () => {
    setForgotPasswordShow(true);
    handleClose(); // Giriş yap modalını kapat
  };
  
  // Şifre sıfırlama modalını kapat
  const handleForgotPasswordClose = () => setForgotPasswordShow(false);

  return (
    <>
      <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content bg-white text-dark">
            <div className="modal-header bg-light border-0">
              <h5 className="modal-title text-dark">Giriş Yap</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">Ad-Soyad</label>
                  <input type="text" className="form-control" id="nameInput" placeholder="Ad-Soyad giriniz" maxLength="50" />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Parola</label>
                  <input type="password" className="form-control" id="passwordInput" placeholder="Parolanızı giriniz" maxLength="50" />
                </div>
                <button type="submit" className="btn btn-danger w-100 mb-2">
                  Giriş Yap
                </button>
                <button type="button" className="btn btn-outline-danger w-100" onClick={handleForgotPasswordShow}>
                  Şifrenizi mi unuttunuz?
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Şifre Sıfırlama Modalı */}
      <ForgotPasswordModal show={forgotPasswordShow} handleClose={handleForgotPasswordClose} />
    </>
  );
}

export default SigninModal;
