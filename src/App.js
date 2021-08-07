import logo from './assets/novaLogo.png';
import './App.css';
import Navbar from './components/navBar';
import HomeScreen from './components/homeScreen'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navbar />
        <HomeScreen />

      </header>
    </div>
  );
}

export default App;
