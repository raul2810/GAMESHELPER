import GAMELOGO from './assets/GAMEHELPER LOGO.png'
import './App.css'

function App() {
  return (
    <>
      <header id="head">
        <img src={GAMELOGO} className='GAMELOGO'></img>
        <input type="checkbox" id="menu" />
        <ul className='opciones'>
          <li className="item">Home</li>
          <li className="item">Sobre mi</li>
          <li className="item" id="login">Login</li>
        </ul>
        <ul className='opcionesDesplegables'>
          <li className="itemDesplegable">Home</li>
          <li className="itemDesplegable">Sobre mi</li>
          <li className="itemDesplegable" id="login">Login</li>
        </ul>
        <label htmlFor='menu' className='lblmenu'>
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
        </label>
      </header>

      <section>
        <h2>Bienvenido a GAMESHELPER</h2>
        <p>En esta app podra encontrar multiples recursos y reviews sobre el mundo de los videojuegos</p>
      </section>

    </>
  )
}

export default App
