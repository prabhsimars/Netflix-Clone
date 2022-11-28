import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Movies from './Components/NavTitles/Movies';
import NP from './Components/NavTitles/NP';
import TVshows from './Components/NavTitles/TVshow'
import Account from './Components/NavTitles/Account';
import Row from './Components/Row'
import requests from './request';
import Banner from './Components/Banner';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav></Nav>
      
      <br></br>
      <br></br>
      <br></br>
      <Banner></Banner>
      <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/newandpopular" element={<NP/>} />
          <Route path="/tvshows" element={<TVshows/>} />
          <Route path="/account" element={<Account/>} />
          <Route path="/" element={
            (<div>
            <Row title='Trending now' fetchUrl={requests.fetchTrending}/>
            <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
            <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Trending' fetchUrl={requests.fetchTrending}/>
            <Row title='Comedies' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
            <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
            <Row title='Kids' fetchUrl={requests.fetchKids}/>
          </div>)}>
          </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;