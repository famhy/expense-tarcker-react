
import './App.css';
import './Components/Title'
import Title from './Components/Title';
import Incexp from './Components/Incexp';
import History from './Components/History';
import  Addtran from "./Components/Addtrans";
function App() {
  return (
    <div className="App">
      <Title/>
      <Incexp/>
      <History/>
      <Addtran/>
    </div>
  );
}

export default App;
