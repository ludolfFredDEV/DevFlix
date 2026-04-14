import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search.jsx'
import MovieDetails from './pages/MovieDetails'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <div className="App">
      <Navbar /> {/* A Navbar aparece em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App