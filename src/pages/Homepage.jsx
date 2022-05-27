import { Link } from 'react-router-dom'
import Image1 from '../assets/beers.png'
import Image2 from '../assets/random-beer.png'
import Image3 from '../assets/new-beer.png'


const Homepage = () => {

    return (
        <div>
            <h1>Fucking Lab</h1>
            <h1>All Beers</h1>
            <Link to="/beers"><img src={Image1} alt="beers" /></Link>
            <h1>Random Beer</h1>
            <Link to="/random-beer"><img src={Image2} alt="random-beer" /></Link>
            <h1>New Beer</h1>
            <Link to="/new-beer"><img src={Image3} alt="new-beer" /></Link>
        </div>
    )
}

export default Homepage