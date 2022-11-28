import '../Nav.css';
import Row from '../Row';
import requests from '/Users/prabhsimars/Development/netflixclone/src/request.js';


function Movies(){
    return (
        <div>
            <h2>MOVIES</h2>
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Comedies' fetchUrl={requests.fetchComedyMovies}/>
            <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
            <Row title='Trending' fetchUrl={requests.fetchTrending}/>
        </div>
    )
}

export default Movies;
