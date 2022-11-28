import '../Nav.css'
import Row from '../Row';
import requests from '/Users/prabhsimars/Development/netflixclone/src/request.js';

function NP(){
    return (
    <div>
        <h2>NEW AND POPULAR</h2>
        <Row title='Trending now' fetchUrl={requests.fetchTrending}/>
        <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
    </div>
    )
}

export default NP;
