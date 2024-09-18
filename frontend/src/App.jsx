import {BrowserRouter , Routes ,Route} from  'react-router-dom';
import './App.css'
import { Homepage } from './Pages/Homepage';
import { Plantpage } from './Pages/Plantpage';
import { Time } from './Pages/time';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Plantpage" element={<Plantpage />} />
        <Route path="/Time" element={<Time />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
