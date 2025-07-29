import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="loading-spinner" style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px',
    padding: '20px'
  }}>
    <div 
      className="spinner" 
      style={{
        width: '40px',
        height: '40px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '10px'
      }}
    ></div>
    <p style={{ margin: 0, color: '#666' }}>Loading...</p>
    <style>
      {`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </div>
);

export default LoadingSpinner;
