import React ,{useState} from 'react'
import Navbar from '../components/Navbar';
import ImageGrid from "../components/Restaurant/ImageGrid"


function RestaurantLayout() {
    const [restaurant,setrestaurant]=useState({
        images:[
            "https://b.zmtcdn.com/data/pictures/chains/8/6506108/7c8d1e6d9612e5bee0d54a39188e95a4.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/8/6506108/002cabe8f16150c503c2ef6ad25546f8.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/8/6506108/7c8d1e6d9612e5bee0d54a39188e95a4.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/8/6506108/002cabe8f16150c503c2ef6ad25546f8.jpg"
        ]

    })
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 lg:px-20 pb-10">
        <ImageGrid images={restaurant.images}/>
    </div>
    </>
  )
}

export default RestaurantLayout;