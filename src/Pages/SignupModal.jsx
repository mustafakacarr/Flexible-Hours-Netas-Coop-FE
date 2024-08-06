import React from 'react';


function SignupModal({ show, handleClose }) {
  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content bg-black text-white">
          <div className="modal-header bg-black border-0">
            <h5 className="modal-title text-white">Hesabını oluştur</h5>
            <button type="button" className="close text-white ml-auto" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body bg-black text-white">
            <form>
              <div className="form-group mb-3">
                <label className="text-danger">İsim</label>
                <input type="text" className="form-control" placeholder="İsim" maxLength="50" />
              </div>
              <div className="form-group mb-3">
                <label className="text-danger">E-posta</label>
                <input type="email" className="form-control" placeholder="E-posta" />
              </div>
              <div className="form-group mb-3">
                <label className="text-danger">Şifre</label>
                <input type="password" className="form-control" placeholder="Şifre" maxLength="50" />
              </div>
              <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#1a1a1a', borderColor: '#1a1a1a' }}>
                Kayıt Ol
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
