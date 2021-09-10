import logo from './assets/novaLogo.png';
import './App.css';
import Navbar from './components/navBar.js';
import Routes from "./routes"

import styles from './pages/pageUI.module.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-body">
        <Routes />
      </div>
    </div>
  );
}

export default App;
