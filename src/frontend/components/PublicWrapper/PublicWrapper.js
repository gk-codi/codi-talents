import React from 'react';
import './PublicWrapper.scss';

const PublicWrapper = ({ children }) => {
  return <div className="app-public">{children}</div>;
};

export default PublicWrapper;
