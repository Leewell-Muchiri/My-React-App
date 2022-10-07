import React from 'react';

function CakeCard(props) {
  console.log(props);
  const cake = {flavor, decoration, price} = props;
  return (
    <article className='cake'>
      <h1>{flavor}</h1>
    </article>
  )
export default CakeCard;
