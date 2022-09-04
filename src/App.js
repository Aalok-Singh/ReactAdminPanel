import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import Dashboard from './pages/Dashboard';
import {
  BrowserRouter as Router,
  Route,Routes 
} from "react-router-dom";
import Alert from './pages/Component/Alert';
import Accordian from './pages/Component/Accordian';
function App() {
  return (
    <Router>

      <Header />
      <Sidebar />
      <main id="main" class="main">
      <Routes>
          <Route index path='/' element={<Dashboard/>}/>  
          <Route path='/components/alert' element={<Alert/>} />
          <Route path='/components/accordian' element={<Accordian/>} />
          </Routes>
      </main>
      <Footer />
    
    </Router>

  );
}

export default App;
