import logo from './logo.svg';
import './App.css';

function App() {

  const number = 3;
  
  const styles = {
      color: 'orange',
      fontSize: '60px',
  };

  return (
    <div className="App">
      <p>{number > 10 ? number + '은 10보다 크다' : number + '은 10보다 작다'}</p>
      <p style={styles}>orange</p>
    </div>
  );
}

export default App;
