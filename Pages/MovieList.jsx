import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Card } from "../Components";
import { useFetch } from "../hooks/useFetch";
export const MovieList = ({title,apiPath}) => {
  const {data:movies}=useFetch(apiPath);
  useEffect(()=>{
    document.title=title;
  })
  const navigator=useNavigate();
  return (
    <div>
      <main className="container">
        {title=="Your guide to great movies"?(
        <div className="bg-body-tertiary p-3 mb-3 mt-2">
        <h2 className="text-primary"> Welcome to MovieHunt</h2>
        <p >MovieHunt is a free Movie and Series site. Watch movies and Series in Dual Audio Hollywood, Bollywood, South Indian Hindi Dubbed and Bengali HEVC 480p, 720p, 1080p, 2k and 4K Ultra.</p>
        <button className="btn btn-primary" onClick={()=>navigator('/movies/upcoming')}>Explore Now</button>
        </div>
        ):""}
      <h5 className="text-danger py-2 border-bottom ">{title}</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
      {movies.map((movie)=>
      {
        return <Card  key={movie.id} movie={movie}/>;
      })}
      </div>
      </main>
    </div>
  )
}
