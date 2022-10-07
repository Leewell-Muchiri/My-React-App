import React from 'react'

function Navbar() {
    const links = ["home", "categories", "catalog"];

  return <nav>
    <a href='#home'>Home</a>
    <a href='#categories'>Categories</a>
    <a href='#catalog'>Catalog</a>
  </nav>
}

export default Navbar
