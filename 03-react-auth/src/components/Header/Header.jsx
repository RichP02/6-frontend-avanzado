import './header.scss'

const Header = () => {
  return (
    <nav className='header'>
      <a href='/' className='header__logo'>LOGO</a>
      <ul className='header__navList'>
        <li className='header__listItem'>
          <a href='/' className='header__itemLink header__itemLink--isActive'>Home</a>
        </li>
        <li className='header__listItem'>
          <a href='/dashboard' className='header__itemLink'>Dashboard</a>
        </li>
        <li className='header__listItem'>
          <a href='/secret' className='header__itemLink'>Secret</a>
        </li>
        <li className='header__listItem'>
          <a href='/login' className='header__itemLink'>Login</a>
        </li>
        <li className='header__listItem'>
          <a href='/signup' className='header__itemLink'>Signup</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
