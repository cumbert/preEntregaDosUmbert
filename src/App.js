import './App.css';
import ravennaJeans_logo from './assets/img/ravennaJeans.png';
import Navbar from './components/NavBar';
import bag_buy from './assets/img/bag_buy.png';



function App() {
  return (
    <div className="App">

      <div class="header">

        <div class="logo">
          <img src={ravennaJeans_logo} alt="ravenna_jeans_logo" />
        </div>
        <div class="nav">
          <Navbar text='HOME'/>
          <Navbar text='JEANS' />
          <Navbar text='REMERAS' />
          <Navbar text='CAMISAS' />
        </div>

        <div class="login_buy">
          <div class="cart-container">
            <a href="./carrito.html">
              <img id="carrito-icon" src={bag_buy} alt="bag_buy" />
              <span id="numerito" class="numerito" >0</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
