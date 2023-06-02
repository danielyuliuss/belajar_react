import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Body from './Body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title/>
        <Body/>
      </header>
    </div>
  );
}

export default App;
