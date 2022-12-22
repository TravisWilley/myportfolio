import HeaderImage from '../../assets/header.JPG';
import data from './data';
import './header.css';

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portrait" />
        </div>
        <h3>Travis Willey</h3>
        <p>
          You are a click away from building your dream website. Send me details
          of your prospective project today!
        </p>
        <div className="header__cta">
          <a href="#container" className="btn primary">
            Let's Talk!
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
