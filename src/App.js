// src/RegistrationForm.js
import React, { useState } from 'react';
import logo from './assets/logoof.png';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    cpf: '',
    phone: '',
    address: '',
    number: '',
    email: '',
    password: '',
    agreeTerms: false,
    receiveNotifications: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
  };

  const isFormValid = () => {
    const requiredFields = ['fullName', 'cpf', 'phone', 'address', 'number', 'email', 'password', 'agreeTerms'];
    return requiredFields.every((field) => !!formData[field]) && formData.agreeTerms;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: '#333' }}>
      <img src={logo} alt="Logo da Empresa" style={{ width: '100px', marginBottom: '20px' }} />
      <h2 style={{ backgroundColor: '#6D4C41', color: '#fff', padding: '10px', borderRadius: '5px' }}>Registre-se</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Nome Completo:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          CPF:
          <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Telefone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Endereço:
          <input type="text" name="address" value={formData.address} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Número:
          <input type="text" name="number" value={formData.number} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          Senha:
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
          Aceitar Termos e Condições
        </label>

        <label style={{ display: 'block', marginBottom: '10px' }}>
          <input type="checkbox" name="receiveNotifications" checked={formData.receiveNotifications} onChange={handleChange} />
          Aceitar Notificações no Site
        </label>

        <button type="submit" disabled={!isFormValid()} style={{ backgroundColor: '#6D4C41', color: '#fff', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
