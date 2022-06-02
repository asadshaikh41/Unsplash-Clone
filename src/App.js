import { useState } from 'react';
import './App.css';
// mqi98FOXTGXvnglTNG7QRBNz4CKBsaoccgTj3gA-Ym8

function App() {
  const [value,setValue]=useState("");
  const [results,setResult]=useState([])
  const fetchImage=()=>{
    fetch(`https://api.unsplash.com/search/photos?client_id=mqi98FOXTGXvnglTNG7QRBNz4CKBsaoccgTj3gA-Ym8&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)

      setResult(data.results)
    })
  }
  return (
    <div className="App">
      <div className='mydiv'>
       <span>Search</span>
       <input 
        style={{width : "60%"}}
        type="text" 
        value={value} 
        onChange={(e)=>setValue(e.target.value )}/>
       <button onClick={()=>fetchImage()}>send</button> 
      </div>
      <div className='gallery'>
        {
          results.map((item)=>{
              return <img className='item' key={item.id} src={item.urls.regular} alt="" />
          })
        }
      </div>
    </div>
  );
}

export default App;
