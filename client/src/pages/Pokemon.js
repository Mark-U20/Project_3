import ShowListings from '../components/ShowListings'
import pageLogo from '../images/justynsPokemonCards.png'
import { Routes, Route } from 'react-router-dom';
function Pokemon() {


    return (
        <div>
            <img src={pageLogo} className="page-logo"/>

            <ShowListings />
            
        </div>
    )
}

export default Pokemon;