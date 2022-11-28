import '../Nav.css';
import Row from '../Row';
import requests from '/Users/prabhsimars/Development/netflixclone/src/request.js';

function TVshows(){
    return (
        <div>
            <h2>TV SHOWS</h2>
            <Row title='Netlix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title='Trending now' fetchUrl={requests.fetchTrending}/>
        </div>
    )
}

export default TVshows;
