import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";


const searchURL = import.meta.env.VITE_API_SEARCH_URL
const apiKey = import.meta.env.VITE_API_KEY

const search = () => {
    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])

    //pega o valor q da URL
    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMovies(data.results)
    }

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}&language=pt-BR`
        getSearchedMovies(searchWithQueryURL)
    }, [query])


    return(
        <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {movies.length === 0 && <p>Carregando...</p>}
                {movies.length > 0 &&
                movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )

}

export default search;