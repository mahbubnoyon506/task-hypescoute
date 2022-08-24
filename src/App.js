import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './App.css';
import Home from './Pages/Home';
<link href="/dist/output.css" rel="stylesheet" />

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
