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
      <div className='header_nav'>NAV</div>


    </div>
  </div>


  </header>;

}

export default Header;