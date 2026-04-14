import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill, BsPlayFill } from "react-icons/bs";

import MovieCard from "../components/MovieCard";
import "./MovieDetails.css";

const moviesURL = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const backdropUrl = import.meta.env.VITE_API_BACKDROP_URL;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]); // 1. NOVO ESTADO

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  // 2. NOVA FUNÇÃO PARA TRAILERS
  const getVideos = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    
    // Busca o vídeo que seja do YouTube e do tipo Trailer
    const trailer = data.results.find(
      (video) => video.site === "YouTube" && video.type === "Trailer"
    );
    
    // Se não achar "Trailer", pega o primeiro vídeo que aparecer
    setVideos(trailer ? [trailer] : (data.results.length > 0 ? [data.results[0]] : []));
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?api_key=${apiKey}&language=pt-BR`;
    const videosUrl = `${moviesURL}${id}/videos?api_key=${apiKey}&language=pt-BR`; // 3. URL DE VÍDEOS
    
    getMovie(movieUrl);
    getVideos(videosUrl); // 4. CHAMA A BUSCA DE VÍDEOS
  }, [id]);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
  <div className="movie-page-container">
    {movie && (
      <>
        <div 
          className="backdrop" 
          style={{ backgroundImage: `url(${backdropUrl}${movie.backdrop_path})` }}
        ></div>
        
        <div className="movie-page">
          {/* GRUPO 1: Pôster e Trailer Lado a Lado */}
          <div className="movie-header">
            <div className="poster-column">
              <MovieCard movie={movie} showLink={false} />
            </div>

            <div className="trailer-column">
              {videos.length > 0 && (
                <iframe
                  src={`https://www.youtube.com/embed/${videos[0].key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* GRUPO 2: Tagline Centralizada */}
          <p className="tagline">{movie.tagline}</p>
          
          {/* GRUPO 3: Grid de Informações Técnicas */}
          <div className="info-container">
            <div className="info">
              <h3><BsWallet2 /> Orçamento:</h3>
              <p>{movie.budget > 0 ? formatCurrency(movie.budget) : "Dados não disponíveis"}</p>
            </div>
            
            <div className="info">
              <h3><BsGraphUp /> Receita:</h3>
              <p>{movie.budget > 0 ? formatCurrency(movie.budget) : "Dados não disponíveis"}</p>
            </div>
            
            <div className="info">
              <h3><BsHourglassSplit /> Duração:</h3>
              <p>{movie.runtime} minutos</p>
            </div>
          </div>

          {/* GRUPO 4: Descrição (Largura Total) */}
          <div className="info description">
            <h3><BsFillFileEarmarkTextFill /> Descrição:</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      </>
    )}
  </div>
);
};

export default MovieDetails;