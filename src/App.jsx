import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Data from '../data/Data'
import RestaurantCard from './components/RestaurantCard'
import './App.css'

function App() {
  const [restaurants, setRestaurants] = useState(Data);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(24);
  const [restaurantCards, setRestaurantCards] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    let cards = [];
    let filtered = restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredRestaurants(filtered);

    for (let i = start; i < end && i < filtered.length; i++) {
      const restaurant = filtered[i];
      cards.push(
        <RestaurantCard key={i} name={restaurant.name} location={restaurant.location} cuisine={restaurant.cuisine_type} rating={restaurant.rating} />
      );
    }

    setRestaurantCards(cards);
  }, [start, end, restaurants, searchTerm]);

  function next() {
    if (end < filteredRestaurants.length) {
      setStart(start + 24);
      setEnd(end + 24);
      setPage(page + 1);
    }
  }

  function prev() {
    if (start > 0) {
      setStart(start - 24);
      setEnd(end - 24);
      setPage(page - 1);
    }
  }

  function handleSearch(event) {
    setStart(0);
    setEnd(24);
    setPage(1);
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <Navbar />
      <div className='flex justify-between w-11/12 mx-auto my-10 items-center'>
        <input
          className='border-[0.1rem] border-gray-300 py-2 px-3 rounded-lg w-[40%]'
          placeholder='Search restaurants...'
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className='flex gap-5 items-center'>
          <p>Minimum Rating</p>
          <input
            className='border-[0.1rem] border-gray-300 p-2 w-[30%] rounded-lg'
            type="number"
          />
        </div>
      </div>
      {
        (restaurantCards.length > 0) ? 
        <div>
          <div className='flex flex-wrap justify-center gap-10 my-10'>
            {restaurantCards}
          </div>
          <div className='flex items-center justify-center gap-20 text-xl mb-10'>
            <button
              className='flex items-center gap-2 bg-blue-400 py-2 px-4 rounded-lg text-white'
              onClick={prev}
            >
              <i className="fa-solid fa-angle-left"></i>
              <p>Prev</p>
            </button>
            <p>{page}</p>
            <button
              className='flex items-center gap-2 bg-blue-400 py-2 px-4 rounded-lg text-white'
              onClick={next}
            >
              <p>Next</p><i className="fa-solid fa-angle-right"></i>
            </button>
            {/* <button onClick={() => console.log(restaurants.length)}>click</button> */}
          </div>
        </div> : <p className='text-center text-2xl font-semibold'>No restaurants match your search criteria!</p>
      }
    </div>
  )
}

export default App
