function RestaurantCard({name, location, cuisine}) {
    return(
        <div className='flex flex-col justify-between shadow-lg rounded-lg w-[30%]'>
            <div className='p-5'>
                <div className='flex items-center gap-5 text-xl'>
                    <p>{name}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                </div>
                <p className='flex gap-2 items-center text-gray-600'><i className="fa-solid fa-location-dot"></i>{location}</p>
            </div>
            <div className='bg-gray-100 mt-5 rounded-b-lg p-5 text-lg'>
                <div className='flex items-center gap-2 text-green-500'>
                    <i className="fa-solid fa-utensils"></i>
                    <p>{cuisine}</p>
                </div>
                <a className='text-blue-500' href="">Visit Menu</a>
            </div>
        </div>
    );
}

export default RestaurantCard;
