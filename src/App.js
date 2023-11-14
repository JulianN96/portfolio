import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DefaultLayout from './components/Layouts/DefaultLayout';

function App() {
  return (
    <div className='App'>
      <Routes>
        {/* <Route path='/' element={<DefaultLayout />}> */}
          <Route index element={<Homepage />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
