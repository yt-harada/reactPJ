import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faFilePen,faArrowRightFromBracket, faA } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({ isAuth }) => {
  return <nav>
    <Link to='/'>
    <FontAwesomeIcon icon={faHouse} />
    ホーム</Link>
    <Link to='/createpost'>
    <FontAwesomeIcon icon={faFilePen} />
    ホーム記事投稿</Link>
    {!isAuth ? (
    <Link to='/login'>
    <FontAwesomeIcon icon={faArrowRightFromBracket} />
    ログイン</Link>
     ) : (
      <Link to='/logout'>
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
      ログアウト</Link>
     )
    } 

  </nav>;
}  

export default Navbar