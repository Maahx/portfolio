import './NavBar.css';

function NavBar () {

  return (
    <ul className='ul'>
      <li className='li'><a>Adresbock</a></li>
      <li className='li'><a href="/home">Home</a></li>
      <li className='li a'><a href="/list">AdressList</a></li>
      <li className='li a:hover:not'><a href="/admin">Admin</a></li>
    </ul>
  )
}

export default NavBar;