import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import BrandNewMachines from './pages/BrandNewMachines.jsx';
import UsedMachines from './pages/UsedMachines.jsx';
import Tools from './pages/Tools.jsx';
import SpareParts from './pages/SpareParts.jsx';
import Blogs from './pages/Blogs.jsx';
function App() {


  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/brand-new-machines" element={<BrandNewMachines />} />
      <Route path="/used-machines" element={<UsedMachines />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/spare-parts" element={<SpareParts />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  )
}

export default App
