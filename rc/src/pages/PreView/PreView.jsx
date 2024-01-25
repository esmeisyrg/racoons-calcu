import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';

const PreView = () => {
  const navigate = useNavigate();

  const handleJoinMeClick = () => {
    // Redirige a la ruta "/calculator" cuando se hace clic en el botón
    navigate('/calculator');
  };

  return (
    <div className='preview-container'>
      <div className='pv-gcontainer'>
        <h1>
          <span>HI, </span>
          <span>STRANGER</span>
        </h1>

        <button onClick={handleJoinMeClick}>join me</button>
      </div>
    </div>
  );
}

export default PreView;
