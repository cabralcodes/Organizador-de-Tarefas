import './App.css';
import TopBar from './components/TopBar';
import Collumn from './components/Collumn';

function App() {
 

  return (
    <>
     <TopBar />
     <Collumn name="To Do"/>
     <Collumn name="Doing"/>
     <Collumn name="Done"/>

    </>
  )
}

export default App
