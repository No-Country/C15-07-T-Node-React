import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
