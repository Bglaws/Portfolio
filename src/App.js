import logo from './logo.svg';
import './App.css';
import Navbar from'./components/Navbar.js';

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <h1>
        <Navbar>

        </Navbar>
      </h1>
    </div>
    
  )
}

export default App;
