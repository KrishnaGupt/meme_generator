import { Routes, Route } from 'react-router-dom';
import './App.css';
import Edit from './pages/Edit';
import Home from './pages/Home';

function App() {
  return (
    <div className='w-full text-white bg-[#121212]'>
    <div className='text-6xl font-bold pt-16 text-center'>Meme Generator</div>
    <div><p className='px-5 py-3 md:p-0 text-center text-3xl'>Create amazing memes within seconds for FREE</p></div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/edit/' element={<Edit/>}/>
    </Routes>
    </div>
  );
}

export default App;
