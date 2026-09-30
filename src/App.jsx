import './App.css'
// componentes
import Navbar from './components/Navbar'
import Search from './components/Searchbar'
import AnimeCard from './components/AnimeCard'
function App() {

  return (
    <>
      <Navbar/>
      <main>
        <Search/>
        <section className = "anime-gird">
          <div className='row'>
            <AnimeCard title= "naruto" rating = "8.0"/>
            <AnimeCard/>
            <AnimeCard/>
          </div>
          <div className='row'>
            <AnimeCard/>
            <AnimeCard/>
            <AnimeCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
