import React from 'react';
import Navbar from './components/Navbar';
import cake from "./components/data";
import Home from './components/Home';
// import CakeList from "./components/CakeList";

function App() {
  // const [ourCakes, setOurCakes] = useState(cakes);
  // const [categories, setCategories] = useState([]);

  // const Table = () => (
    // <table>
    //   <tr>
    //     <th>Flavor</th>
    //     <th>Decoration</th>
    //     <th>Price</th>
    //   </tr>
  //     <tr>
  //       <th>Vanilla</th>
  //       <th>Fondant</th>
  //       <th>1600</th>
  //     </tr>
  //   </table>
 

  return (
   <div>
    <Navbar />
    <Home name={cake.flavor} category={cake.category} decor={cake.decoration} />

   </div>
  );
}

export default App;
