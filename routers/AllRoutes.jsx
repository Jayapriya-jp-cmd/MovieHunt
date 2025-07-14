import { Routes, Route } from "react-router-dom"

import { MovieList, MovieDetails,Search ,Error} from "../Pages"

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<MovieList title="Your guide to great movies" apiPath="movie/now_playing"/> } />
        <Route path="movies/popular" element={<MovieList title="Popular Movies" apiPath="movie/popular"/>} />
        <Route path="movies/top" element={<MovieList title="Top rated movies" apiPath="movie/top_rated"/>} />
        <Route path="movies/upcoming" element={<MovieList title="Upcoming Movies " apiPath="movie/upcoming"/>} />
        <Route  path="movie/:id" element={<MovieDetails />}/>
        <Route path="search" element={<Search apiPath="search/movie"/>} />
        <Route path="*" element={<Error/>} title="page not found"/>
    </Routes>
    
    </>
  )
}

export default AllRoutes