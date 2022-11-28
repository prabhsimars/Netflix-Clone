import './Nav.css'
import { Link } from "react-router-dom";

import { useState } from "react";

function Nav() {

    const [Search,setSearch] = useState(<i id="search" class="las la-search"></i>);

    function searchit() {
        setSearch(
            <div id='inputDiv'>
                <input id='inputHeader' type="text" placeholder="SEARCH"></input>
                <i id="search1" class="las la-search"></i>
            </div>
        )
    }




    return (<div className='Navbar'>
    <nav>
    <Link to='/'>
        <h3 id='LOGO'>NETFLIX</h3>
    </Link>
        <ul className='NavTitles'>
            <Link to='/movies'><li><pre>MOVIES</pre></li></Link>
            <Link to='/tvshows'><li><pre>TV SHOWS</pre></li></Link>
            
            <Link to='/newandpopular'><li><pre>NEW AND POPULAR</pre></li></Link>
        </ul>


        <ul className='NavIcons'>
            <li onClick={searchit}>{Search}</li>
            <li><i class="las la-bell"></i></li>
            <Link to='/account'><li><i class="las la-user-circle"></i></li></Link>
        </ul>
        
    </nav>
    </div>)
}


export default Nav;




