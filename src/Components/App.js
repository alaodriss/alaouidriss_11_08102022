
import '../Styles/App.css';

import Navbar from './Navbar'
import Gallery from './Gallery'
import Sildebody from './Sildebody'
//import { BrowserRouter as Routes, Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
   
      <Gallery />
      <Navbar />
      <Sildebody />
    </div>
  );
}

export default App;
