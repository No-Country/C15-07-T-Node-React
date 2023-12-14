import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './components/AppContent';

function App() {
  return (
    <div className='App flex grow flex-col'>
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
