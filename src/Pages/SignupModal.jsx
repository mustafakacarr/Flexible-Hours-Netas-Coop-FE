import React from 'react';


function SignupModal({ show, handleClose }) {
  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content bg-black text-white">
          <div className="modal-header bg-black border-0">
            <h5 className="modal-title text-white">Hesap Oluştur</h5>
            <button type="button" className=" position-absolute top-0 end-0 m-3" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body bg-black text-white">
            <form>
              <div className="form-group mb-3">
                <label className="text-danger">Ad-Soyad</label>
                <input type="text" className="form-control" placeholder="Ad-Soyad giriniz" maxLength="50" />
              </div>
              <div className="form-group mb-3">
                <label className="text-danger">E-posta</label>
                <input type="email" className="form-control" placeholder="E-postanızı giriniz" />
              </div>
              <div className="form-group mb-3">
                <label className="text-danger">Sicil Numarası</label>
                <input type="text" className="form-control" placeholder="Sicil Numaranızı giriniz" maxLength="50" />
              </div>
              <div className="form-group mb-3">
                <label className="text-danger">Bölüm</label>
                <select className="form-control">
                  <option value="">Bölümünüzü Seçiniz</option>
                  <option value="b1">Bölüm 1</option>
                  <option value="b2">Bölüm 2</option>
                  <option value="b3">Bölüm 3</option></select>
                
              </div>
              <div className="form-group mb-3">
                <label className="text-danger">Müdürlük</label>
                <select className="form-control">
                  <option value="">Müdürlüğünüzü Seçiniz</option>
                  <option value="m1">Müdürlük 1</option>
                  <option value="m2">Müdürlük 2</option>
                  <option value="m3">Müdürlük 3</option>
                </select>
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
