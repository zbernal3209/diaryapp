import logo from './logo.svg';
import './App.css';
// import MultilineTextFields from './Components/TextInput/DiaryTextInput';
// import MaterialUIPickers from './Components/TextInput/DiaryTextInputDate';
import TextInputForm from './Components/TextInput/Form';
import NavBar from './Components/NavBar/NavBar'
import FreeSoloCreateOption from './Components/HabitPicker/HabitPicker'

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <FreeSoloCreateOption />
        <br/>
        <TextInputForm />
      </header>
    </div>
  );
}

export default App;
