import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Event from './components/Event';
import State from './components/State';

function App() {
  const name = 'krille'

  return (
    <div className='App'>
      <Header />
      <Body name={name} />
      <Event />
      <State />
    </div>
  );
}

export default App;
