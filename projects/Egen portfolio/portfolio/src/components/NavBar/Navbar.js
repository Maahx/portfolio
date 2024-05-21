import './NavBar.css';

function Navbar () {

  return (
    <ul className='ul'>
      <li className='li'><a href="/about">About Me</a></li>
      <li className='li a'><a href="/work">Work</a></li>
      <li className='li a'><a href="/contact">Contact Me</a></li>
    </ul>
  )
}

export default Navbar