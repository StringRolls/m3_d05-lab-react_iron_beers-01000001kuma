// import './App.css';
// import Homepage from './components/Homepage';

// const App = () => {
//   return (
//     <>
//       <Homepage />

//     </>
//   );
// }

import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Beers from './pages/newBeers';
import Random from './pages/randomBeers';
import New from './pages/Beers';


function App() {
  return (
    <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/beers" element={<New />} />
            <Route path="/random" element={<Random />} />
            <Route path="/new" element={<Beers />} />
            <Route path="*" element={<h1>This is a 404, you FUCK</h1>} />
        </Routes>
  );
}

export default App;
