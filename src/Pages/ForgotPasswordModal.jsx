import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ForgotPasswordModal({ show, handleClose }) {
  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content bg-white text-dark">
          <div className="modal-header bg-light border-0">
            <h5 className="modal-title text-dark">Şifrenizi mi Unuttunuz?</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Lütfen şifrenizi sıfırlamak için kayıtlı e-posta adresinizi girin.</p>
            <form>
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label">E-posta Adresi</label>
                <input type="email" className="form-control" id="emailInput" placeholder="E-posta adresinizi girin" required />
              </div>
              <button type="submit" className="btn btn-danger w-100 mb-2">
                Şifre Sıfırlama Bağlantısını Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordModal;
