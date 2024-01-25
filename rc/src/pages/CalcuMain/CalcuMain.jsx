import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Raccoon from '../../assets/images/raccoon.svg'
import Logout from '../../assets/images/LogoutRounded.svg'
import Darkmode from '../../assets/images/MoonSymbol.svg'
import Calculator from './Calculator'


const CalcuMain = () => {
  const navigate = useNavigate();

  const handleJoinMeClick = () => {
    // Redirige a la ruta "/calculator" cuando se hace clic en el botón
    navigate('/');
  };


  return (
    <div className='cm-background'>

      <a href="https://www.youtube.com/watch?v=Kr-MFtR1q-Q" target='_blank' rel="noreferrer">
        <img className='raccoon' src={Raccoon} alt="raccoon standing" />
      </a>
      <img className='logout' src={Logout} alt="raccoon standing" onClick={handleJoinMeClick} />
      <img className='darkmode'  src={Darkmode} alt="raccoon standing" />

      <div className='cm-container'>
        <div className="title">
          <h2>
            <span>Raccoon's</span>
            <span>Calcs</span>
          </h2>

        </div>
    
        <div className='calcu-container'>
            <Calculator/>
        </div>

      </div>
    </div>
  )
}

export default CalcuMain