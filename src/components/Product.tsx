import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Rating from "../components/Rating/Rating";
import Footer from "./Footer";

const Product = () => {
  const [isData, setIsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const Response = await fetch("https://fakestoreapi.com/products");
      const data = await Response.json();
      console.log(data);
      setIsData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    const words = text.split(" ");
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="w-full bg-gray-100">
      <Navbar />
      <div className="w-[70%] md:max-w-full md:mx-auto ">
        {isLoading && (
          <div className="min-h-[80vh] flex items-center justify-center">
            <Image src="/spinner.svg" alt="" height={100} width={100} className="" />
          </div>
         
        )}

        {!isLoading && (
          <div>
            <div className="flex justify-center items-center py-4">
              <h4 className="text-xl font-Oswald tracking-wide">This is a our Product List</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-3">
              {isData &&
                isData.length > 0 &&
                isData.map(
                  (
                    { image, rating, title, price, category, description },
                    index
                  ) => (
                    <div
                      key={index}
                      className="col-span-1 border p-4 bg-gray-100 items-center rounded-lg"
                    >
                      <div className="mr-4 flex space-x-4">
                        <Image
                          src={image}
                          alt="profile image"
                          className="rounded-lg h-24 w-24"
                          height={100}
                          width={100}
                        />
                        <div>
                          <h4 className="text-lg font-semibold mb-2">
                            {title}
                          </h4>
                          <div className="flex space-x-4 items-center mb-2">
                            <p className="text-lg font-semibold">${price}</p>
                            <Rating rating={rating.rate} />
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
                  )
                )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
