import './Custom.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddMahasiswa from './components/mahasiswa/AddMahasiswa';
import EditMahasiswa from './components/mahasiswa/EditMahasiswa';
import ViewMahasiswa from './components/mahasiswa/ViewMahasiswa';
import Header from './components/header/Header';
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App overflow-y-hidden ">
      <Router>
        <Header />
        <div className='w-full min-h-[90vh] grid grid-cols-12'>
          <NavBar />
          <div className='grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full'>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/addmahasiswa" element={<AddMahasiswa />} />
              <Route exact path="/editmahasiswa/:id" element={<EditMahasiswa />} />
              <Route exact path="/viewmahasiswa/:id" element={<ViewMahasiswa />} />
            </Routes>
          </div>
        </div>
      </Router >
    </div >

  )
}

export default App
