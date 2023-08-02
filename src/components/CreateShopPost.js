import React from "react";

const CreateShopPost = () => {
  const handleAddToShop = (event) => {
    event.preventDefault();
    const form = event.target;
    const clubName = form.clubName.value;
    const editionYear = form.editionYear.value;
    const price = form.price.value;
    const sellerName = form.sellerName.value;
    const phoneNumber = form.phoneNumber.value;
    const email = form.email.value;
    const tShirtInfo = form.tShirtInfo.value;
    const photo = form.photo.value;
    console.log(
      clubName,
      editionYear,
      price,
      sellerName,
      phoneNumber,
      email,
      tShirtInfo,
      photo
    );
    form.reset();
  };
  return (
    <section className="dark:bg-gray-900">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md"
              src="https://merakiui.com/images/components/Email-campaign-bro.svg"
              alt="Illustration Vector Art"
            />
          </div>
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <h2 className="mb-4 text-xl text-center py-2 md:text-2xl lg:text-3xl font-bold bg-teal-400 rounded-full text-gray-900 dark:text-white">
                Post Your Club's T-shirt Ad Here
              </h2>
              <form className="mt-8" onSubmit={handleAddToShop}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Club Name
                    </label>
                    <input
                      type="text"
                      name="clubName"
                      id="clubName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your club's name here"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="edition"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Edition
                    </label>
                    <input
                      type="number"
                      name="editionYear"
                      id="editionYear"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter which year's edition here"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      T-shirt's Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Price per T-shirt"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="photo"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Add T-shirt Photo
                    </label>
                    <input
                      type="file"
                      name="photo"
                      id="photo"
                      className="p-2 w-11/12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="brand"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="sellerName"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="contact-number"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Contact Number
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      id="phone-number"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Phone Number"
                      required=""
                    />
                  </div>
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Description
                    </label>
                    <textarea
                      id="description"
                      name="tShirtInfo"
                      rows="4"
                      className="block p-2 w-11/12 md:w-3/4 lg:w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Your description here"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  value="addUser"
                  className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-700"
                >
                  Add to Shop
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CreateShopPost;
