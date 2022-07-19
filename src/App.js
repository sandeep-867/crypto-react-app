import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Coin from './Coin';
import TableHeader from './TableHeader';
import FiltersForm from './FiltersForm';
function App() {

  const [coins,setCoins] = useState([])
  const [search,setSearch] = useState('')
  const [orderIn,setOrderIn]=useState('Desc')
  const [sortBy,setSortBy]=useState('market-cap')
  
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
       setCoins(res.data)
       console.log(res.data)
    }).catch(error=>console.log(error))
  }, [])


  const handleChange = e =>{
    setSearch(e.target.value)
  }
  const handleChangeOrder = e =>{
    console.log(e.target.value)
    setOrderIn(e.target.value)
  }

  const handleChangeSortBY=e=>{
    setSortBy(e.target.value)
  }

  const handleSubmit=e=>{
    e.preventDefault();
    let newData=[...coins]
    if(sortBy==='market-cap')
    {
      if(orderIn==='Asc')
      {
        newData.sort(function(a, b){return a.market_cap-b.market_cap});
      }
      else
      {
        newData.sort(function(a, b){return b.market_cap-a.market_cap});
      }
    }
    else if(sortBy==='price')
    {
      if(orderIn==='Asc')
      {
        newData.sort(function(a, b){return a.current_price-b.current_price});
      }
      else
      {
        newData.sort(function(a, b){return b.current_price-a.current_price});
      }
    }
    else if(sortBy==='name')
    {
      if(orderIn==='Asc')
      {
        newData.sort(function(a, b){return a.name.localeCompare(b.name)});
      }
      else
      {
        newData.sort(function(a, b){return b.name.localeCompare(a.name)});
      }
    }
    else 
    {
      if(orderIn==='Asc')
      {
        newData=newData.sort(function(a, b){return a.price_change_percentage_24h-b.price_change_percentage_24h});
      }
      else
      {
        newData=newData.sort(function(a, b){return b.price_change_percentage_24h-a.price_change_percentage_24h});
      }
    }
    setCoins(newData);
  }

  const filteredCoins = coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className="coin-app">
      <div className="coin-search">
        <form action="">
          <input type="text" className="coin-input" placeholder="Provide the coin name" onChange={handleChange}/>
        </form>

      </div>
      <div className="coins-container">
      <TableHeader/>
        { 
        filteredCoins.map(coin=>{
          return(
            <Coin 
            key={coin.id} 
            name={coin.name} 
            image={coin.image} 
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            pricechange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
      <div className='filters-sec'>
        <FiltersForm
        handleChangeOrder={handleChangeOrder}
        onChangeSortBy={handleChangeSortBY}
        handleSubmit={handleSubmit}
        /> 
      </div>
    </div>
  );
}

export default App;
