import logoIcon from '../../assets/logo.png';
import { BsSearch, BsFillPersonFill, BsFillCartFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../../styles/Navigation.css';

const Navigation = () => {
return (
  <nav className="navigation-bar">
    <Link to="/" className="logo-container">
      <img className="logo-icon" src={logoIcon}></img>
    </Link>
    <div className="vertical-line"></div>
    <select name="genres" className="genre-selections">
      <option>All genres</option>
    </select>
    <div className="vertical-line"></div>
    <form className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder="SEARCH A GAME.."
      ></input>
      <button className="search-btn">
        <BsSearch />
      </button>
    </form>
    <div className="icons-container">
      <div className="vertical-line"></div>
      <Link to="/" className="my-profile link-icon">
        <AiFillHeart />
      </Link>
      <div className="vertical-line"></div>
      <Link to="/" className="my-cart link-icon">
        <BsFillCartFill />
      </Link>
      <div className="vertical-line"></div>
      <Link to="/" className="my-cart link-icon">
        <BsFillPersonFill />
      </Link>
      <div className="vertical-line"></div>
    </div>
  </nav>
)
}

export default Navigation;