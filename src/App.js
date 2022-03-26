import './App.css';
import Navbar from './components/Navbar/Navbar';
import Question from './components/Question/Question';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Shop></Shop>
      <Question></Question>
    </div>
  );
}

export default App;
