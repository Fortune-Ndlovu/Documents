import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <Link to='/'>Create </Link>{" "}
      <Link to='/read/'>Read</Link>{" "}
      <Link to='/update/'>Update</Link>{" "}
      <Link to='/delete/'>Delete</Link>
    </div>
  )
}

export default Header