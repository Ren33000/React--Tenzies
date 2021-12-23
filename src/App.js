import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';




function App() {
  return (
    <div className='container-fluid movie-app'>
      {/* Movie List Header + SearchBar + List display */}
      <div className='header row d-flex align-items-center mt-4 mb-4'>
        <Header heading="My Movies"/>
        <SearchBar />
      </div>

      <div className='row'>
        <MovieList />
      </div> 
    </div>
  );
}

export default App;
