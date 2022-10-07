import React from 'react'
import cake from './data'

function Home(props) {
  return (
    <div id="home">
      <h1>Cake</h1>
      <table>
        <tr>
        <th>Flavor</th>
        <th>Decoration</th>
        <th>Price</th>
      </tr>
      <tr>
        <th>
            {cake.flavor}
        </th>
        <th>
            {cake.decoration}
        </th>
        <th>
            {cake.price}
        </th>
      </tr>
      </table>
    </div>
  )
}

export default Home
