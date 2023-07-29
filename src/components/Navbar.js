
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="text-3x1 font-bold underline">
      <h1>
        <Link to='./components/About.js'> About </Link>
      </h1>
      <h1>
        <Link to='./components/Experience.js'> Experience </Link>
      </h1>
      <h1>
        <Link to='./components/Contact.js'>Contact</Link>
      </h1>
    </div>
    
  )
}

export default Navbar;

{/* <Link to="/Dashboard"> Dashboard </Link> */}