import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const SignupInput = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const createUser = async () => {
    try {
      setError('');
      setIsLoading(true);

      // Password matching validation
      if (password !== rePassword) {
        setError('Passwords do not match');
        return;
      }

      const response = await axios.post('http://localhost:9999/signup', {
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

  const isFormIncomplete = !name || !email || !password || !rePassword;

  return (
    <div>
      <div style={{ marginTop: '-150px' }}>
        <input
          style={{
            width: '384px',
            height: '48px',
            padding: '16px',
            marginBottom: '16px',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            backgroundColor: '#F3F4F6',
          }}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          style={{
            width: '384px',
            height: '48px',
            padding: '16px',
            marginBottom: '16px',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            backgroundColor: '#F3F4F6',
          }}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          style={{
            width: '384px',
            height: '48px',
            padding: '16px',
            marginBottom: '16px',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            backgroundColor: '#F3F4F6',
          }}
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          style={{
            width: '384px',
            height: '48px',
            padding: '16px',
            marginBottom: '16px',
            borderRadius: '8px',
            border: '1px solid #D1D5DB',
            backgroundColor: '#F3F4F6',
          }}
          placeholder="Re-enter Password"
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        ></input>
      </div>

      <div
        style={{
          width: '384px',
          height: '48px',
          padding: '0px 16px 0px 16px',
          borderRadius: '20px',
          gap: '4px',
          backgroundColor: isFormIncomplete ? '#0166FF' : '#0166FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: isFormIncomplete ? 'not-allowed' : 'pointer',
        }}
        onClick={createUser}
        // disabled={isFormIncomplete}
      >
        <div
          style={{
            fontFamily: 'Roboto',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '28px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: 'white',
          }}
        >
          {isLoading ? 'Signing up...' : 'Sign up'}
        </div>
      </div>

      {error && (
        <div style={{ color: 'red', marginTop: '8px' }}>
          {error}
        </div>
      )}
    </div>
  );
};