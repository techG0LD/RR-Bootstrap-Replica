import './App.css';
import TopBar from './components/TopBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Background from './components/Background'
import StoreList from './components/StoreList';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Background/>
      <StoreList/>
    </div>
  );
}

export default App;
