import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const player = ['Sakib', 'Babar', 'Wiliamson', 'Shamim', 'Afif']
  const product = [
    { name: "Photoshop", price: "$90.99" },
    { name: "Illustrator", price: "$60.99" },
    { name: "PDF Reader", price: "$6.99" },
    { name: "Premiere El", price: "$249.99" }
  ]
  // const friend = [
  //   { name: 'Noman', age: '18', college: 'Hazera taju Degree College', district: 'Chattogram' },
  //   { name: 'Akib', age: '18', college: 'Mohajonhat FR School & College', district: 'Chattogram' },
  //   { name: 'Nahin', age: '18', college: 'Dhaka College', district: 'Dhaka' },
  //   { name: 'Shourov', age: '18', college: 'Mohajonhat FR School & College', district: 'Chattogram' },
  //   { name: 'Imtiaz', age: '18', college: 'Mohajonhat FR School & College', district: 'Chattogram' },
  //   { name: 'Opi', age: '18', college: 'Baler College', district: 'Dhaka' },
  //   { name: 'Dip', age: '18', college: 'Hazera taju Degree College', district: 'Chattogram' },
  //   { name: 'Zihad', age: '18', college: 'BF shaheen', district: 'Chattogram' },
  //   { name: '', age: '', college: '', district: '' },
  //   { name: '', age: '', college: '', district: '' },
  // ]
  const productNames = product.map(product => product.name);
  // console.log(productNames);
  const playerName = player.map(player => player);
  console.log(playerName);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            player.map(player => <li>{player}</li>)
          }
          {
            product.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          product.map(pd => <Product product={pd}></Product>)
        }
        {/* {
          friend.map(fd => <Friend friend={fd}></Friend>)
        } */}

        <Person></Person>
      </header>
    </div>
  )
}
//friend
// function Friend(props) {
//   const friendStyle = {
// color: "deepskyblue",
// backgroundColor: "indigo",
// border: "1px solid gray",
// borderRadius: "5px",
// height: "350px",
// width: "500px",
// float: "left",
// padding: "5px"
//   }
// const btn = {
//   border: "none",
//   cursor: "pointer",
//   backgroundColor: "cyan",
//   width: '150px',
//   borderRadius: '100px',
//   height: '50px',
// }

//   const { name, age, college, district } = props.friend;
//   return (
//     <div style={friendStyle}>
//       <h3>{name}</h3>
//       <h4>{college}</h4>
//       <h5>{age}</h5>
//       <h5>{district}</h5>
//       <button href="https://www.facebook.com" style={btn}>FB ID</button>
//     </div>
//   )
// }
//
//counter
function Counter() {
  const btnStyle = {
    color: "white",
    fontSize: '18px',
    fontWeight: 'bold',
    border: "none",
    cursor: "pointer",
    backgroundColor: "tomato",
    width: '150px',
    borderRadius: '100px',
    height: '40px',
  }
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick={() => setCount(count - 1)} style={btnStyle}>Decrease</button>
      <button onClick={() => setCount(count + 1)} style={btnStyle}>Increase</button>
    </div>
  )
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  },[])
  return (
    <div>
      <h3>Dynamic Users:{users.length}</h3>
    <ul>
      {
        users.map(user=><li>{user.website}</li>)
      }
    </ul>
    </div>
  )
}
// product
function Product(props) {
  const productStyle = {
    color: "deepskyblue",
    backgroundColor: "indigo",
    border: "1px solid gray",
    borderRadius: "5px",
    height: "200px",
    width: "300px",
    float: "left",
    padding: "5px",
    margin: '5px',
    boxshadow: '3px'
  }
  const btn = {
    fontSize: '18px',
    fontWeight: 'bold',
    border: "none",
    cursor: "pointer",
    backgroundColor: "cyan",
    width: '150px',
    borderRadius: '100px',
    height: '40px',
  }

  const { name, price } = props.product;
  // console.log(name,price)
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button style={btn}>Buy now</button>
    </div>
  )
}
//
// person
function Person(props) {
  const style = {
    color: "Tomato",
    backgroundColor: "cyan",
    border: "1px solid white",
    width: "400px",
    borderRadius: "100px",
    padding: "2px"
  }

  return (
    <div style={style}>
      <h3>My name : {props.name}</h3>
      <p>My Profession : {props.profession}</p>
    </div>
  )
}
export default App;
