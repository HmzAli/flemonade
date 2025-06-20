import React from 'react';
import Logo from '../../components/Logo';
import './ComingSoon.scss';

const ComingSoon: React.FC = () => {
  return (
    <div className="coming-soon-container">
      <Logo variant="black" />
      <h1 className="coming-soon-text">Coming Soon</h1>
    </div>
  );
};

export default ComingSoon; 