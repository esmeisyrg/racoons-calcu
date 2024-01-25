import './CMStyles.css'
import Raccoon from '../../assets/images/raccoon.svg'
import Logout from '../../assets/images/LogoutRounded.svg'
import Darkmode from '../../assets/images/MoonSymbol.svg'
import Calculator from './Calculator'


const CalcuMain = () => {
  return (
    <div className='cm-background'>

      <img className='raccoon' src={Raccoon} alt="raccoon standing" />
      <img className='logout' src={Logout} alt="raccoon standing" />
      <img className='darkmode'  src={Darkmode} alt="raccoon standing" />

      <div className='cm-container'>
        <div className="title">
          <h2>
            <span>Racoon's</span>
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