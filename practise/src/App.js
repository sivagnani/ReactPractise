import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';
function App() {
  return (
    <div className="App" >
      <Counter/>
      {/* <Greet name="bruce"><p>child props</p></Greet>
      <Greet name="wayne"><button>Act</button></Greet>
      <Welcome name="bruce"/>
      <Welcome name="wayne"/>
      <Hello/>
      <Message />  */}
    </div>
  );
}

export default App;
