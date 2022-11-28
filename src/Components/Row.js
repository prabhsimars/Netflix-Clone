import { useState, useEffect} from "react";
import axios from '../axios.js'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/w200/";


function GetMovies(movie) {
    return (<img className="rowPoster" src={`${base_url}`+`${movie.poster_path}`}></img>)
}

function Row({title, fetchUrl}) {

    
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    

    console.table(Movies);

    return (
        <div>
            <p>{title}</p>
            
            <div className="rowPosters">
                    {Movies.map(GetMovies)}
            </div>

        </div>
    )
}

export default Row;