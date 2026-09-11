import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', color: 'var(--brand-dk)', marginBottom: '12px' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Page not found</h2>
      <p style={{ color: 'var(--muted)', maxWidth: '400px', marginBottom: '28px' }}>
        The page you are looking for doesn&apos;t exist or has moved. Return to the Reach homepage or dashboard.
      </p>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>
        <Link to="/dashboard" className="btn btn-primary">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};
