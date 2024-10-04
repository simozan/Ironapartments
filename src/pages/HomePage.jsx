import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const HomePage = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    axios
      .get("https://ironbnb-m3.herokuapp.com/apartments")
      .then((response) => {
        console.log("the response is", response.data);
        setApartments(response.data);
      });
  }, []);

  return (
    <>
      {apartments.map((eachApartment) => {
        return(
          <div key={eachApartment._id}>
            <img src={eachApartment.img} alt="ap img"/>
        <h1>{eachApartment.title}</h1>
        <p>{eachApartment.pricePerDay}</p>
        </div>)
      })}
    </>
  );
};
