import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="It's nice to meet you." name="John" age="30" />
    </div>
  );
}

export default App;
