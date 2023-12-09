import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About_us from './components/About_us'
import Contact from './components/Contact'
import Blogs from './components/Blogs'
import Layout from './Layout'
function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}></Route>
           <Route path="/about" element={<About_us/>}></Route>
           <Route path="/contact" element={<Contact/>}></Route>
           <Route path="/blogs" element={<Blogs/>}></Route>
         </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
