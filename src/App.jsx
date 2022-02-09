import './App.scss';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalInfo />
      <Resume />
    </div>
  );
}

export default App;
