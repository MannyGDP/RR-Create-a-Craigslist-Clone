// Import data

// Import components
import './App.css';
import Header from './Components/Header'
import Gallery from './Components/Gallery'
import Sidebar from './Components/Sidebar'

function App(){
  return (
    <div style={{display: "flex", justifyContent: "space-around", paddingTop:'40px'}}>
       <Sidebar />
       <div>
       <Header />
       <Gallery />
      </div>  
    </div>
  );
}

export default App;
