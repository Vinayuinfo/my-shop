import React from "react";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "./Footer";

interface ProductFormValues {
  title: string;
  price: string;
  image: string;
  category: string;
  description: string;
}

const AddProduct = () => {

  const { values, errors, handleSubmit, handleChange, touched, resetForm } =
    useFormik<ProductFormValues>({
      initialValues: {
        title: "",
        price: '',
        image: "",
        category: "",
        description: "",
      },
      validationSchema: Yup.object().shape({
        title: Yup.string().required(),
        price: Yup.string().required(),
        image: Yup.string().required(),
        category: Yup.string().required(),
        description: Yup.string().required(),
      }),
      onSubmit: (values) => {
        getPostData(values)   
        resetForm()     
      },
    });
    console.log("touched>>>", touched.title)



    const getPostData = (values: ProductFormValues) => {
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    };
  

  return (
    <div>
      <div className="w-full bg-gray-100">
        <div className="w-full md:max-w-[1600px] md:mx-auto">
          <Navbar />
          <div className="flex p-6 justify-center items-center">
            <h4 className="text-xl font-Oswald">Add a Product</h4>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="w-full mx-auto max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6">
                  <div className="flex justify-between">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-base font-Oswald font-bold mb-2"
                      htmlFor="grid-title"
                    >
                      Product Title
                    </label>
                    {errors.title && touched.title ?<p className="text-red-500 flex items-end font-semibold text-sm">Required*</p> : ''}
                  </div>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    value={values.title}
                    placeholder="Enter product title"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <div className="flex justify-between">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-base font-Oswald font-bold mb-2"
                    htmlFor="grid-price"
                  >
                    Price
                  </label>
                  {errors.price && touched.price ?<p className="text-red-500 flex items-center font-semibold text-sm">Required*</p> : ''}
                  </div>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="price"
                    type="number"
                    onChange={handleChange}
                    value={values.price}
                    name="price"
                    placeholder="Enter price"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <div className="flex justify-between">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-base font-Oswald font-bold mb-2"
                    htmlFor="grid-category"
                  >
                    Category
                  </label>
                  {errors.category && touched.category ? <p className="text-red-500 flex items-center font-semibold text-sm">Required*</p>: ''}
                  </div>

                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="category"
                    name="category"
                    type="text"
                    onChange={handleChange}
                    value={values.category}
                    placeholder="Enter product category"
                  />
                </div>
                <div className="w-full mt-6 px-3">
                  <div className="flex justify-between">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-base font-Oswald font-bold mb-2"
                    htmlFor="grid-image"
                  >
                    Image URL
                  </label>
                  {errors.image && touched.image ? <p className="text-red-500 flex items-center font-semibold text-sm">Required</p> : ''}
                  </div>
                  <input
                    id="image"
                    name="image"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    onChange={handleChange}
                    value={values.image}
                    placeholder="Enter image URL"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-base font-Oswald font-bold mb-2"
                    htmlFor="grid-description"
                  >
                    Description
                  </label>
                  {errors.description && touched.description ? <p className="text-red-500 flex items-center font-semibold text-sm">Required</p>: ''}
                  </div>
                  <textarea
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="description"
                    name="description"
                    onChange={handleChange}
                    value={values.description}
                    placeholder="Enter product description"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <button type="submit" className="bg-red-500 rounded-md px-3 text-white font-Oswald py-3">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddProduct;
