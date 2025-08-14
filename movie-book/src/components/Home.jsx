import { Link } from 'react-router-dom';
import { Play, Star, Calendar } from 'lucide-react';
import backgroundImage from '../assets/backgroundImage.png';
import ironman from '../assets/ironman.jpg';
import captain from '../assets/captain.jpg';
import avengers from '../assets/avengers.jpg';

const Home = () => {
  const featuredMovies = [
    {
      id: 1,
      title: "Iron Man",
      genre: "Action, Sci-Fi",
      rating: 7.9,
      year: 2008,
      image: ironman,
      description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil and save the world as Iron Man."
    },
    {
      id: 2,
      title: "Captain America: The First Avenger",
      genre: "Action, Adventure",
      rating: 6.9,
      year: 2011,
      image: captain,
      description: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization."
    },
    {
      id: 3,
      title: "The Avengers",
      genre: "Action, Adventure",
      rating: 8.0,
      year: 2012,
      image: avengers,
      description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
    }
  ];

  return (
    <div className="home">
      <section 
        className="hero" 
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.8) 100%), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-content">
          <h1>Welcome to MovieBook</h1>
          <p>Book your favorite movies with ease and comfort</p>
          <Link to="/movies" className="cta-button">
            <Play size={20} />
            Browse Movies
          </Link>
        </div>
      </section>

      <section className="featured-movies">
        <div className="container">
          <h2>Featured Movies</h2>
          <div className="movies-grid">
            {featuredMovies.map((movie) => (
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
                  <p className="description">{movie.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
