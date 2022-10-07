import React from 'react';
import cakes from "../data";

const Catalog = ({cakes}) => {
  return (
    <div className='section-center'>
       return (
           <article key={flavor} className="cake">
           <img src={image} alt={flavor} className="cakepic" />
          <h2></h2>
        </article>
      )
    </div>
  )
}

export default Catalog;