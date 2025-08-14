import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Calendar, Clock, Users, ArrowLeft } from 'lucide-react';
import ironman from '../assets/ironman.jpg';
import captain from '../assets/captain.jpg';
import avengers from '../assets/avengers.jpg';

const MovieDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSeats, setSelectedSeats] = useState([]);

  const movieData = {
    1: {
      id: 1,
      title: "Iron Man",
      genre: "Action, Sci-Fi",
      rating: 7.9,
      year: 2008,
      duration: "126 min",
      director: "Jon Favreau",
      cast: "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
      description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil and save the world as Iron Man.",
      image: ironman,
      showtimes: [
        { date: "2024-01-15", times: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"] },
        { date: "2024-01-16", times: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"] },
        { date: "2024-01-17", times: ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"] }
      ]
    },
    2: {
      id: 2,
      title: "Captain America: The First Avenger",
      genre: "Action, Adventure",
      rating: 6.9,
      year: 2011,
      duration: "124 min",
      director: "Joe Johnston",
      cast: "Chris Evans, Hugo Weaving, Samuel L. Jackson",
      description: "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.",
      image: captain,
      showtimes: [
        { date: "2024-01-15", times: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"] },
        { date: "2024-01-16", times: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"] },
        { date: "2024-01-17", times: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"] }
      ]
    },
    3: {
      id: 3,
      title: "The Avengers",
      genre: "Action, Adventure",
      rating: 8.0,
      year: 2012,
      duration: "143 min",
      director: "Joss Whedon",
      cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
      description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      image: avengers,
      showtimes: [
        { date: "2024-01-15", times: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"] },
        { date: "2024-01-16", times: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"] },
        { date: "2024-01-17", times: ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"] }
      ]
    }
  };

  useEffect(() => {
    const movieId = parseInt(id);
    if (movieData[movieId]) {
      setMovie(movieData[movieId]);
      setSelectedDate(movieData[movieId].showtimes[0].date);
    }
  }, [id]);

  if (!movie) {
    return <div className="loading">Loading...</div>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="movie-detail">
      <div className="container">
        <Link to="/movies" className="back-button">
          <ArrowLeft size={20} />
          Back to Movies
        </Link>

        <div className="movie-header">
          <div className="movie-poster">
            <img src={movie.image} alt={movie.title} />
          </div>
          
          <div className="movie-info">
            <h1>{movie.title}</h1>
            <div className="movie-meta">
              <span className="genre">{movie.genre}</span>
              <span className="rating">
                <Star size={20} fill="gold" />
                {movie.rating}
              </span>
              <span className="year">
                <Calendar size={20} />
                {movie.year}
              </span>
              <span className="duration">
                <Clock size={20} />
                {movie.duration}
              </span>
            </div>
            
            <div className="movie-details">
              <p><strong>Director:</strong> {movie.director}</p>
              <p><strong>Cast:</strong> {movie.cast}</p>
            </div>
            
            <p className="description">{movie.description}</p>
          </div>
        </div>

        <div className="booking-section">
          <h2>Select Showtime</h2>
          
          <div className="date-selector">
            {movie.showtimes.map((showtime) => (
              <button
                key={showtime.date}
                className={`date-button ${selectedDate === showtime.date ? 'active' : ''}`}
                onClick={() => setSelectedDate(showtime.date)}
              >
                {formatDate(showtime.date)}
              </button>
            ))}
          </div>

          <div className="time-slots">
            {movie.showtimes.find(s => s.date === selectedDate)?.times.map((time) => (
              <button
                key={time}
                className={`time-slot ${selectedTime === time ? 'active' : ''}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>

          {selectedTime && (
            <div className="seat-selection">
              <h3>Select Seats</h3>
              <div className="seats-grid">
                {Array.from({ length: 20 }, (_, i) => (
                  <button
                    key={i}
                    className={`seat ${selectedSeats.includes(i + 1) ? 'selected' : ''}`}
                    onClick={() => {
                      if (selectedSeats.includes(i + 1)) {
                        setSelectedSeats(selectedSeats.filter(seat => seat !== i + 1));
                      } else {
                        setSelectedSeats([...selectedSeats, i + 1]);
                      }
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              
              {selectedSeats.length > 0 && (
                <button 
                  className="add-to-cart-btn"
                  onClick={() => {
                    if (addToCart && selectedTime && selectedSeats.length > 0) {
                      addToCart(movie, selectedTime, selectedSeats);
                      alert('Added to cart!');
                      setSelectedSeats([]);
                      setSelectedTime('');
                    }
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
