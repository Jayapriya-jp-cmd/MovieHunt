import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const MovieDetails = () => {
  const params = useParams();
  const key = import.meta.env.VITE_API_KEY;
  const [movie, setMovie] = useState(null);

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(url);
      const jsonData = await res.json();
      setMovie(jsonData);
    }
    fetchMovie();
  }, [url]);

  useEffect(() => {
    if (movie) {
      document.title = movie.title;
    }
  }, [movie]);

  if (!movie) return <div className="container text-center my-5">Loading...</div>;

  const {
    title,
    overview,
    poster_path,
    vote_average,
    vote_count,
    release_date,
    runtime,
    genres,
    imdb_id,
  } = movie;

  return (
    <main className="container my-4">
      <div className="card p-3 shadow">
        <div className="row g-3">
          {/* Poster */}
          <div className="col-md-4 text-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              className="img-fluid rounded"
              alt={title}
            />
          </div>

          {/* Details */}
          <div className="col-md-8">
            <h2 className="text-primary">{title}</h2>
            <p>{overview}</p>

            <p><strong>Genres:</strong> {genres?.map((g) => g.name).join(', ')}</p>

            <p>
              <strong>Rating:</strong>{" "}
              <span className="text-warning">
                {'⭐'.repeat(Math.round(vote_average / 2))} {vote_average}
              </span>{" "}
              ({vote_count} reviews)
            </p>

            <p><strong>Runtime:</strong> {runtime} mins</p>
            <p><strong>Release Date:</strong> {release_date}</p>

            {imdb_id && (
              <a
                href={`https://www.imdb.com/title/${imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning mt-2"
              >
                View on IMDb
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};


