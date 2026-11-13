// states
import { useState } from 'react'
// css
import './App.css'
// componentes
import Navbar from './components/Navbar'
import Search from './components/Searchbar'
import AnimeCard from './components/AnimeCard'
import AnimeDetails from './components/AnimeDetails'
function App() {
  const [showSearch, setShowSearch] = useState(false) //mostar o searchbar apos clicar no botão
  const [searchTerm, setSearchTerm] = useState('') //usuario vai digitar
  const [animeList, setAnimeList] = useState([]) //lista de resultados api
  const [selectedAnime, setSelectedAnime] = useState(null) //clicado para os detalhes

  const handleSearch = async () =>{
  if(!searchTerm.trim()) return;

    const query = `
    query ($search: String!){
      Page(perPage : 9){
       media(search: $search, type:ANIME, isAdult: false){
          id
          title{
            romaji
            english
          }
          coverImage{
            large
          }  
          averageScore
          episodes
          status
          description 
          genres 
       }
    }}
    `

    try{
      const response = await fetch('https://graphql.anilist.co',{
        method: 'POST',
        headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body:JSON.stringify({
          query: query,
          variables:{
            search: searchTerm
          }
        })
      });

      const data = await response.json()
      console.log('Resposta da API:', data);

      if(!response.ok){
        throw new Error(data.errors?.[0]?.message || 'Erro na requisição');
        
      }

      if(data.errors){
        throw new Error(data.errors[0].message);
      }
      console.log('resultados:',data.data.Page.media)

      setAnimeList(data.data.Page.media)

    }catch(error){
      console.log("Erros ao buscar animes:", error)
    }
  }

  return (
    <>
      <Navbar onSearchClick={() => setShowSearch(true)}/>

      {showSearch && <Search searchTerm = {searchTerm} setSearchTerm = {setSearchTerm} onSearch = {handleSearch}/>} {/*mostar o search se o showsearch for true*/}
      <main>
        {animeList.length > 0 && (
          <section className='anime-grid'>
            <div className="row">
              {animeList.map((anime) =>(
                <AnimeCard 
                  key={anime.id} 
                  title = {anime.title.english || anime.title.romaji}
                  rating = {anime.averageScore ? anime.averageScore / 10 : "N/A"} 
                  image= {anime.coverImage.large}
                  onClick = {() => setSelectedAnime(anime)}/>
              ))}
            </div>
          </section>
        )}
        <section>
          {selectedAnime && (
            <AnimeDetails
              anime = {selectedAnime}
              image={selectedAnime.coverImage.large}
              title = {selectedAnime.title.english || selectedAnime.title.romaji}
              rating = {selectedAnime.averageScore ? selectedAnime.averageScore / 10 : "N/A"}
              status = {selectedAnime.status}
              description = {selectedAnime.description}
              genres = {selectedAnime.genres}
              onClose = {() => setSelectedAnime(null)}/>
          )}
        </section>
      </main>
 
    </>
  )
}

export default App

{/* <section className = "anime-gird">
          <div className='row'>
            <AnimeCard title= "Naruto" rating = "8.0" image="https://cdn.myanimelist.net/images/anime/1244/138851.jpg"/>
            <AnimeCard/>
            <AnimeCard/>
          </div>
          <div className='row'>
            <AnimeCard/>
            <AnimeCard/>
            <AnimeCard/>
          </div>
        </section>
        <section>
          <AnimeDetails image = "https://cdn.myanimelist.net/images/anime/1244/138851.jpg"/>
        </section> */}