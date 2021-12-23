
import './App.css';
import SignIn from './SignIn';

function App() {

  let user = localStorage.getItem("name")
  return (
    <div className="App">
      <h1>Card Maker</h1>
      {user === null && <SignIn />}
    </div>
  );
}

export default App;
