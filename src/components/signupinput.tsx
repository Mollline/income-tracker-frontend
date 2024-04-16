import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const SignupInput: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [rePasswordError, setRePasswordError] = useState('');

  const validateInputs = () => {
    let isValid = true;

    if (name.length < 4) {
      setNameError('Name must be at least 4 characters long');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email.includes('@')) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (password !== rePassword) {
      setRePasswordError('Passwords do not match');
      isValid = false;
    } else {
      setRePasswordError('');
    }

    return isValid;
  };

  const createUser = async () => {
    try {
      setError('');
      setIsLoading(true);

      if (!validateInputs()) {
        return;
      }

      const response = await axios.post('https://income-tracker-backend-e8yv.onrender.com/signup', {
        name,
        password,
        email,
      });

      if (response.status === 200) {
        alert('User successfully created');
        router.push('login');
      }
    } catch (error) {
      setError('Error creating user. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = {
    width: '384px',
    height: '48px',
    padding: '16px',
    marginBottom: '16px',
    borderRadius: '8px',
    border: '1px solid #D1D5DB',
    backgroundColor: '#F3F4F6',
  };

  return (
    <div style={{ marginTop: '-150px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <div style={{ color: 'red', marginBottom: '5px' }}>{nameError}</div>}

        <input
          style={inputStyle}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <div style={{ color: 'red', marginBottom: '5px' }}>{emailError}</div>}

        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div style={{ color: 'red', marginBottom: '5px' }}>{passwordError}</div>}

        <input
          style={inputStyle}
          type="password"
          placeholder="Re-enter Password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {rePasswordError && <div style={{ color: 'red', marginBottom: '5px' }}>{rePasswordError}</div>}

        <button onClick={createUser} disabled={isLoading} style={{ ...inputStyle, marginBottom: '10px', backgroundColor: "#0166FF",color:'white',borderRadius:'20px' }}>
          {isLoading ? 'Signing up...' : 'Sign up'}
        </button>

        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    </div>
  );
};
