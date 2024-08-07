import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import '../Pages/Style.css';

function SignupModal({ show, handleClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sicil: '',
    bolum: '',
    mudurluk: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === 'email') {
      validateEmail(e.target.value);
    }
  };

  const validateEmail = (email) => {
    if (!email.includes('@') || !email.includes('.com')) {
      setErrors({ ...errors, email: 'E-posta geçerli bir formatta olmalıdır.' });
    } else {
      setErrors({ ...errors, email: '' });
    }
  };

  const isFormValid = Object.values(formData).every(value => value !== '') && !errors.email;

  return (
    <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content bg-white text-dark">
          <div className="modal-header bg-light border-0">
            <h5 className="modal-title text-dark">Hesap Oluştur</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group mb-3">
                <label className="text-dark">Ad-Soyad</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Ad-Soyad giriniz"
                  maxLength="50"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label className="text-dark">E-posta</label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder="E-postanızı giriniz"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="form-group mb-3">
                <label className="text-dark">Sicil Numarası</label>
                <input
                  type="text"
                  name="sicil"
                  className="form-control"
                  placeholder="Sicil Numaranızı giriniz"
                  maxLength="50"
                  value={formData.sicil}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <label className="text-dark">Bölüm</label>
                <select
                  name="bolum"
                  className="form-control"
                  value={formData.bolum}
                  onChange={handleChange}
                >
                  <option value="">Bölümünüzü Seçiniz</option>
                  <option value="b1">Bölüm 1</option>
                  <option value="b2">Bölüm 2</option>
                  <option value="b3">Bölüm 3</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label className="text-dark">Müdürlük</label>
                <select
                  name="mudurluk"
                  className="form-control"
                  value={formData.mudurluk}
                  onChange={handleChange}
                >
                  <option value="">Müdürlüğünüzü Seçiniz</option>
                  <option value="m1">Müdürlük 1</option>
                  <option value="m2">Müdürlük 2</option>
                  <option value="m3">Müdürlük 3</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label className="text-dark">Şifre</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Şifre"
                  maxLength="50"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className={`btn btn-danger w-100 ${isFormValid ? '' : 'disabled'}`}
                disabled={!isFormValid}
              >
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
