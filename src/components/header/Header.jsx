import LogoImg from '/src/assets/logo.svg'
import'./Header.css'

function Header () {
  return <header className="header">
  <div className='container'>
    <div className='header_row'>
      <div className='header_logo'>
        <img src={LogoImg} alt="Logo"/>
        <span>Fashion</span>

      </div>

     <nav className="header_nav">
   <ul>

          <li><a href='#'>HOME</a></li>
          <li><a href='#'>FASHION </a></li>
          <li><a href='#'>FAVORITE</a></li>
          <li><a href='#'>LIFESTYLE</a></li>
          <li><a href='#' className="header_nav-btn">SING UP</a></li>
        </ul>
       </nav>


   </div>
   </div>


  </header>;

}

export default Header;