import GAMELOGO from './assets/GAMEHELPER LOGO.png'
import './App.css'
import GamerPower from './gamerpowerAPI.jsx'

function App() {
  return (
    <>
      <header id="head">
        <img src={GAMELOGO} className='GAMELOGO'></img>
        <input type="checkbox" id="menu" />
        <ul className='opciones'><a></a>
          <li className="item">Home</li>
          <li className="item"><a href= "#reviews" >reviews</a></li>
          <li className="item"><a href= "#giveaways" >giveaways</a></li>
          <li className="item"><a href= "#noticias" >noticias</a></li>
          <li className="item">Sobre mi</li>
          <li className="item" id="login">Login</li>
        </ul>
        <ul className='opcionesDesplegables'>
          <li className="itemDesplegable">Home</li>
          <li className="itemDesplegable"><a href= "#reviews" >reviews</a></li>
          <li className="itemDesplegable"><a href= "#giveaways" >giveaways</a></li>
          <li className="itemDesplegable"><a href= "#noticias" >noticias</a></li>
          <li className="itemDesplegable">Sobre mi</li>
          <li className="itemDesplegable">Sobre mi</li>
          <li className="itemDesplegable" id="login">Login</li>
        </ul>
        <label htmlFor='menu' className='lblmenu'>
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
        </label>
      </header>

      <section id="home" className='seccion'>
        <h2>Bienvenido a GAMESHELPER</h2>
        <p>En esta app podra encontrar multiples recursos y reviews sobre el mundo de los videojuegos</p>
      </section>

      <section id="reviews" className='seccion'>
       <h2>reviews</h2>
      </section>

      <section id="giveaways" className='seccion'>
        <GamerPower />
      </section>

      <section id="noticias" className='seccion'>
      <h2>noticias</h2>
      </section>
    </>
  )
}

export default App
