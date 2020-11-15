import React ,{useState} from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import addMovie from "./components/addMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Movie2 Title",
      description:
        "Some quick example text to Describe the movie.Some quick example text to Describe the movie.",
      posterUrl:
        "https://bestnetflixshows.com/wp-content/uploads/2019/03/kids-movies-netflix-990x556.jpg",
      rate: 0,
    },
    {
      id: 2,
      title: "Movie3 Title",
      description:
        "Some quick example text to Describe the movie.Some quick example text to Describe the movie.",
      posterUrl:
        "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/rehdry16pqzdw1xgp5ep/hercules",
      rate: 3,
    },
    {
      id: 3,
      title: "Movie4 Title",
      description:
        "Some quick example text to Describe the movie.Some quick example text to Describe the movie.",
      posterUrl:
        "https://movies-b26f.kxcdn.com/wp-content/uploads/2020/01/Pokemon-Mewtwo-Strikes-Back-Netflix-Premiere-770x470.png",
      rate: 2,
    },
    {
      id: 4,
      title: "Movie5 Title",
      description:
        "Some quick example text to Describe the movie.Some quick example text to Describe the movie.",
      posterUrl:
        "https://1.bp.blogspot.com/-WqJeLgbWfbg/WMTzS253VyI/AAAAAAAAIWc/gBkcLeRczEAjrK_l83pBnrfII6hGp17ngCLcB/s1600/MV5BMjA4NTQzMDQ2MV5BMl5BanBnXkFtZTcwNzQwODQ2MQ%2540%2540._V1_.jpg",
      rate: 5,
    },
  ]); 
  const[movieTitle,setMovieTitle]=useState ('')
  const[movieRating,setMovieRating]=useState (0);
  const FilterR=(x)=> setMovieRating(x)
  const FilterT=(x)=> setMovieTitleg(x)
  const AddMovies=(x)=> {setMovies([...movies,x])}
  return (
    <div className="App">
    
<Filter UpdateTitle={FilterT} UpdateRating={FilterR}/>

<MovieList list={movies.filter(el => (el.title.toUpperCase().includes(movieTitle.toUpperCase())) && el.rate>= movieRating)}/>

<addMovie Updatemovie={AddMovies}/>

</div>
  );
}

export default App;
