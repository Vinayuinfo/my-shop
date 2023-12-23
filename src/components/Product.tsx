import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Rating from "../components/Rating/Rating";


const Product = () => {
  const [isData, setIsData] = useState([]);

  const getData = async () => {
    try {
      const Response = await fetch("https://fakestoreapi.com/products");
      const data = await Response.json();
      console.log(data);
      setIsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    const words = text.split(' ');
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="w-full bg-gray-100">
      <Navbar />
      <div className="w-[70%] md:max-w-full md:mx-auto ">
        

        <div className="flex justify-center items-center py-4">
          <h4 className="text-lg">This is a our Product List</h4>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-3">

           {isData && isData.length > 0 && isData.map(({image,rating,title,price, category,description }, index)=>(
             <div key={index} className="col-span-1 border p-4 bg-gray-100 items-center rounded-lg">
              <div className="mr-4 flex space-x-4">
                <Image
                  src={image}
                  alt="profile image"
                  className="rounded-lg h-25 w-25"
                  height={100}
                  width={100}
                />
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    {title}
                  </h4>
                  <div className="flex space-x-4 items-center mb-2">
                    <p className="text-lg font-semibold">${price}</p>
                    <Rating rating={rating.rate}/>
                  </div>
                  <p className="text-lg font-semibold">{category}</p>
                </div>
              </div>

              <div>
                <p className="text-sm">
                {truncateText(description, 15)}
                </p>
              </div>
            </div>
  
           ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
