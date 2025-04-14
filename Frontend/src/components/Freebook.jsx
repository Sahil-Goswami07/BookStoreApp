import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";



function Freebook() {
 const [book, setBook] = React.useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
                const res=await axios.get("http://localhost:3000/book")
                // const data=await response.json()
                console.log(res.data.filter((data) => data.category === "Free"));
                setBook(res.data)
            } catch (error) {
                console.log("error", error);
            }
        }
        getBook();
    },[])


        // const filterData =


        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
          };

  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>

        <div>
        <Slider {...settings}>
        {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
      </Slider>
        </div>
      </div>
    </>
  );
}
export default Freebook;
