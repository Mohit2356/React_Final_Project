import { Link } from 'react-router-dom';
import { Star, Calendar } from 'lucide-react';
import ironman from '../assets/ironman.jpg';
import captain from '../assets/captain.jpg';
import avengers from '../assets/avengers.jpg';

const Movies = () => {
  const allMovies = [
    {
      id: 1,
      title: "Iron Man",
      genre: "Action",
      rating: 7.9,
      year: 2008,
      image: ironman,
      duration: "126 min"
    },
    {
      id: 2,
      title: "Captain America: The First Avenger",
      genre: "Action",
      rating: 6.9,
      year: 2011,
      image: captain,
      duration: "124 min"
    },
    {
      id: 3,
      title: "The Avengers",
      genre: "Action",
      rating: 8.0,
      year: 2012,
      image: avengers,
      duration: "143 min"
    }
  ];

  return (
    <div className="movies-page">
      <div className="container">
        <div className="page-header">
          <h1>All Movies</h1>
          <p>Discover and book your favorite movies</p>
        </div>

        <div className="movies-grid">
          {allMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <div className="movie-image">
                <img src={movie.image} alt={movie.title} />
                <div className="movie-overlay">
                  <Link to={`/movie/${movie.id}`} className="view-details">
                    View Details
                  </Link>
                </div>
              </div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <div className="movie-meta">
                  <span className="genre">{movie.genre}</span>
                  <span className="rating">
                    <Star size={16} fill="gold" />
                    {movie.rating}
                  </span>
                  <span className="year">
                    <Calendar size={16} />
                    {movie.year}
                  </span>
                </div>
                <p className="duration">{movie.duration}</p>
                <Link to={`/movie/${movie.id}`} className="book-button">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
