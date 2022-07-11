import Logo from '../../assets/img/logo.svg';
import './styles.css'

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={Logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/fornariii">@fornariii</a>
        </p>
      </div>
    </header>
  )
}

export default Header
