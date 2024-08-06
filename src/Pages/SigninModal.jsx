import React from 'react';

function SigninModal({ show, handleClose }) {
  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content bg-secondary text-white">
          <div className="modal-header bg-secondary border-0">
            <h5 className="modal-title text-white">Giriş Yap</h5>
            <button type="button" className="position-absolute top-0 end-0 m-3" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body bg-secondary text-white">
            <form>
              <div className="form-group mb-3">
                <label className="text-danger">Ad-Soyad</label>
                <input type="text" className="form-control" placeholder="Ad-Soyad giriniz" maxLength="50" />
              </div>
              <div className="form-group mb-3">
                <label className="text-danger">Parola</label>
                <input type="password" className="form-control" placeholder="Parolanızı giriniz" maxLength="50" />
              </div>
              <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#1a1a1a', borderColor: '#1a1a1a' }}>
                Giriş Yap
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninModal;
