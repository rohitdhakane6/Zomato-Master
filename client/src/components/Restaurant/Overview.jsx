import React ,{useState} from 'react';
import {Link ,useParams} from "react-router-dom";
import {IoMdArrowDroprightCircle} from"react-icons/io";
import Slider from "react-slick";
import ReactStars from 'react-stars';

function Overview() {
    const [menuImages ,setMenuImages]=useState({images:[]});
    const [Reviews ,setReviews] =useState([]);
    const [cuisine ,setCuisine]=useState([]);
    const avgcost =200;
  return (
    <div>Overview</div>
  )
}

export default Overview;