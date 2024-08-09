import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileManagement() {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    sicil: '123456',
    bolum: 'b1',
    mudurluk: 'm1',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
  });

  const [isEditing, setIsEditing] = useState(false);

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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Here, you would typically save the data to the server
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Reset the form data or discard changes
    setIsEditing(false);
  };

  const isFormValid = Object.values(formData).every(value => value !== '') && !errors.email;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center">Kullanıcı Profili</h2>
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
                disabled={!isEditing}
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
                disabled={!isEditing}
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
                disabled={!isEditing}
              />
            </div>
            <div className="form-group mb-3">
              <label className="text-dark">Bölüm</label>
              <select
                name="bolum"
                className="form-control"
                value={formData.bolum}
                onChange={handleChange}
                disabled={!isEditing}
              >
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
                disabled={!isEditing}
              >
                <option value="m1">Müdürlük 1</option>
                <option value="m2">Müdürlük 2</option>
                <option value="m3">Müdürlük 3</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label className="text-dark">Yeni Şifre</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Yeni Şifre"
                maxLength="50"
                value={formData.password}
                onChange={handleChange}
                disabled={!isEditing}
              />
            </div>
            <div className="text-center">
              {isEditing ? (
                <>
                  <button
                    type="button"
                    className="btn btn-success mx-2"
                    onClick={handleSaveClick}
                    disabled={!isFormValid}
                  >
                    Kaydet
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary mx-2"
                    onClick={handleCancelClick}
                  >
                    İptal
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEditClick}
                >
                  Düzenle
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProfileManagement;
