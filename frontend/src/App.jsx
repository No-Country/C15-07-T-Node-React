import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Contact, Login, NotFound, Services } from './pages';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        {/* <NavBar /> */}
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
