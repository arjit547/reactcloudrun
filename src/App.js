import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Shaktiman 🚀</h1>
        <p style={{ fontSize: '1.2rem' }}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}
        >
          Learn React the Fun Way 💡
        </a>
      </header>
    </div>
  );
}

export default App;
