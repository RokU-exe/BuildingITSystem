import React from 'react';
import { assets } from '../../assets/assets'


const ProductDisplay = () => {
    const [isFavorited, setIsFavorited] = React.useState(false);

    const [counter, setCounter] = React.useState(1);    
    const incrementHandler=()=>{
      setCounter((val) => val + 1);
    }
    const decrementHandler=()=>{
      setCounter((val) => (val > 0 ? val - 1 : val));

    }


    const [toggleState, setToggleState] = React.useState(1);
    const toggleTab = (index) => {
      setToggleState(index)
    }

    const imgs = [
      {id:0, src: assets.tomato},
      {id:1, src: assets.lettuce},
      {id:2, src: assets.spinach},
      {id:3, src: assets.stockcake},
    ];

    const[sliderData,setSliderData] = React.useState(imgs[0])
    const handleClick=(index) =>{
      console.log(index);
      const slider=imgs[index];
      setSliderData(slider);
    }


    return (

    <section class="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
        {/* Picture of Products */}
      <div class="max-w-screen-xl px-4 mx-1 2xl:px-0">
        <div class="lg:grid lg:grid-cols-7 lg:gap-4 xl:gap-4">
          <div class>
          {
            imgs.map((data,i) => 
              <img class={sliderData.id==i?"clicked border-2 border-green-500":""} key={data.id} src={data.src} onClick={()=>handleClick(i)} height="70" width="100" alt="" />
            )
          }
          </div>

          <div class="col-start-2 col-end-5 shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img class="w-96 h-auto dark:hidden" src={sliderData.src} alt="" />
          </div>

        {/* Introduce Product */}
        <div class="col-start-5 col-end-8 mt-6 sm:mt-8 lg:mt-0">


          <h1 class="text-xl font-bold text-gray-900 sm:text-4xl dark:text-white ">
            Vietnam Tomato
          </h1>

        {/* Rating Stars */}
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              <div class="flex items-center gap-1">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
              </div>
              <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
              >
                (5.0)
              </p>
              <a
                href="#"
                class="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
              >
                345 Reviews
              </a>
            </div>
          </div>

        {/* Price */}
          <p class="text-6xl mt-4 font-semibold text-green-700 sm:text-2xl dark:text-white">
              $1,249.99
          </p>

          <hr class="my-4 border-gray-200 dark:border-gray-800" />

        {/* Executive Summary */}
          <p class=" text-gray-500 dark:text-gray-400">
            Studio quality three mic array for crystal clear calls and voice
            recordings. Six-speaker sound system for a remarkably robust and
            high-quality audio experience. Up to 256GB of ultrafast SSD storage.
          </p>

          <p class="text-gray-500 dark:text-gray-400">
            Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
            Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
            Magic Keyboard or Magic Keyboard with Touch ID.
          </p>

          <hr class="my-2 border-gray-200 dark:border-gray-800" />

        {/* Quantity/Add to Cart/Favorite */}
          <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
          <div class="w-40 mx-auto border-gray-300 rounded-full border-2 px-2 py-1">
                <div class="relative flex items-center max-w-[8rem]">                  
                    <button type="button" id="decrement-button" onClick={decrementHandler}  class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-full px-2.5 py-2.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <span id="quantity-input" class="bg-white rounded-full border-white h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-10 px py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>{counter}</span>
                    <button type="button" id="increment-button" onClick={incrementHandler} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-full px-2.5 py-2.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>

          <a
              href="#"
              title=""
              class="mt-0 sm:mt-0 bg-[#00b207] hover:bg-green-300 text-white focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-40 py-4 dark:bg-primary-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 flex items-center justify-center"
              role="button"
            >
              <p class= "w-max ">Add To Cart</p> 
              <svg
                class="w-7 h-7 ms-2 -me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
            </a>
            
            <a
              href="#"
              title=""
              class="flex items-center justify-center py-3.5 px-3.5  text-white  bg-green-900 rounded-full  hover:bg-green-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-green-100 dark:focus:ring-green-700 dark:bg-green-800 dark:text-green-400 dark:border-green-600 dark:hover:text-white dark:hover:bg-green-700"
              role="button"
              onClick={()=> setIsFavorited(!isFavorited)}
              className={`flex items-center justify-center py-3.5 px-3.5 rounded-full ${isFavorited ? "bg-green-900 text-white hover:bg-green-600" : "bg-green-100 text-green-900 hover:bg-green-200"}`}
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
            </a>
            
          </div>
          <hr class="mt-8 border-gray-200 dark:border-gray-800" />
          <div class='flex my-3'><p class="text-black font-bold mr-2"> Category: </p> 
            <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Vegetables</p>
          </div>
          <div class='flex'><p class="text-black font-bold mr-2">Tag: </p > 
            <div class = 'flex'>
                <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Vegetables </p>
                <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Healthy</p>
                <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Cabbage</p>
                <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Green</p>
                <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Cabbage</p>
            </div>
          </div>
        </div>
        </div>
        {/* MultiTab: Description, Additional Info, Customer Feedback */}
        <div class="relative">
        <div class="flex justify-center text-sm font-medium text-center mt-20 text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul class="bloc-tabs flex flex-wrap -mb-px">
                <li class="me-2">
                    <a className={toggleState === 1 ? "tabs active-tabs inline-block p-4 cursor-pointer text-black border-b-2 border-[#00b207] rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "tabs inline-block p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}
                    onClick={() => toggleTab(1)} aria-current="page">Descriptions</a>
                </li>
                <li class="tab-item me-2">
                    <a className={toggleState === 2 ? "tabs active-tabs inline-block p-4 cursor-pointer text-black border-b-2 border-[#00b207] rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "tabs inline-block p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"} 
                    onClick={() => toggleTab(2)}>Additional Information</a>
                </li>
                <li class="tab-item me-2">
                    <a className={toggleState === 3 ? "tabs active-tabs inline-block p-4 cursor-pointer text-black border-b-2 border-[#00b207] rounded-t-lg active dark:text-blue-500 dark:border-blue-500" : "tabs inline-block p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}
                    onClick={() => toggleTab(3)}>Customer Feedback</a>
                </li>
            </ul>
          </div>
            {/*Description*/}
          <div class="content-tabs">
            <div className={toggleState === 1 ? "content active-content p-7 h-1 mb-3 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16":"content active-content absolute invisible p-7 h-auto mb-20 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16"}>
              <p class="mt-10 text-gray-500 dark:text-gray-400">
                  Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
                  Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
                  Magic Keyboard or Magic Keyboard with Touch ID.
              </p>
              <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <video class="h-100 w-full mt-10 mb-5 rounded-md" controls autoPlay muted>
                  <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div class="w-full mx-auto border-gray-300 rounded-lg border-2 px-2 py-1 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                  <div class="p-4">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15.5 14.25C14.8096 14.25 14.25 14.8096 14.25 15.5C14.25 16.1904 14.8096 16.75 15.5 16.75C16.1904 16.75 16.75 16.1904 16.75 15.5C16.75 14.8096 16.1904 14.25 15.5 14.25ZM7.25 8.5C7.25 7.80964 7.80964 7.25 8.5 7.25C9.19036 7.25 9.75 7.80964 9.75 8.5C9.75 9.19036 9.19036 9.75 8.5 9.75C7.80964 9.75 7.25 9.19036 7.25 8.5ZM15.4697 7.46967C15.7626 7.17678 16.2374 7.17678 16.5303 7.46967C16.8232 7.76256 16.8232 8.23744 16.5303 8.53033L8.53033 16.5303C8.23744 16.8232 7.76256 16.8232 7.46967 16.5303C7.17678 16.2374 7.17678 15.7626 7.46967 15.4697L15.4697 7.46967Z" fill="#000000"></path></svg>
                    <p class="font-semibold">64% discount</p>
                    <p>Save your 64% money with us</p>
                  </div>

                  <div class="mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-leaf" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
                    <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
                  </svg>
                    <p class="font-semibold">100% Organic</p>
                    <p>100% Organic Vegetables</p>
                  </div>
                </div>

              </div>
            </div>

              {/* Additional Information */}
            <div className={toggleState === 2 ? "content active-content p-7 h-1 mb-3 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16":"content active-content absolute invisible p-7 h-auto mb-20 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16"}>
              <div>
                <div class='flex my-5'><p class="text-black font-bold mr-2">Weight: </p > 
                  <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> 03 </p>
                </div>
                <div class='flex my-5'><p class="text-black font-bold mr-2">Colour: </p > 
                  <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Green </p>
                </div>
                <div class='flex my-5'><p class="text-black font-bold mr-2">Type: </p > 
                  <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Organic </p>
                </div>
                <div class='flex my-5'><p class="text-black font-bold mr-2">Category: </p > 
                  <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Vegetables </p>
                </div>
                <div class='flex my-5'><p class="text-black font-bold mr-2">Stock Status: </p > 
                  <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Available (5413) </p>
                </div>
                <div class='flex'><p class="text-black font-bold mr-2">Tags: </p > 
                  <div class = 'flex'>
                      <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Vegetables </p>
                      <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Healthy</p>
                      <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Cabbage</p>
                      <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Green</p>
                      <p class='text-gray-500 mx-2 no-underline hover:underline dark:text-white cursor-pointer'> Cabbage</p>
                  </div>
                </div>
              </div>
              <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <video class="h-100 ml-0 w-full mt-10 mb-5 rounded-md" controls autoPlay muted>
                  <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div class="w-full ml-0 mx-auto border-gray-300 rounded-lg border-2 px-2 py-1 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                  <div class="p-4">
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" stroke-width="1.5"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM15.5 14.25C14.8096 14.25 14.25 14.8096 14.25 15.5C14.25 16.1904 14.8096 16.75 15.5 16.75C16.1904 16.75 16.75 16.1904 16.75 15.5C16.75 14.8096 16.1904 14.25 15.5 14.25ZM7.25 8.5C7.25 7.80964 7.80964 7.25 8.5 7.25C9.19036 7.25 9.75 7.80964 9.75 8.5C9.75 9.19036 9.19036 9.75 8.5 9.75C7.80964 9.75 7.25 9.19036 7.25 8.5ZM15.4697 7.46967C15.7626 7.17678 16.2374 7.17678 16.5303 7.46967C16.8232 7.76256 16.8232 8.23744 16.5303 8.53033L8.53033 16.5303C8.23744 16.8232 7.76256 16.8232 7.46967 16.5303C7.17678 16.2374 7.17678 15.7626 7.46967 15.4697L15.4697 7.46967Z" fill="#000000"></path></svg>
                    <p class="font-semibold">64% discount</p>
                    <p>Save your 64% money with us</p>
                  </div>

                  <div class="mt-5">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-leaf" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 21c.5 -4.5 2.5 -8 7 -10" />
                    <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z" />
                  </svg>
                    <p class="font-semibold">100% Organic</p>
                    <p>100% Organic Vegetables</p>
                  </div>
                </div>
              </div>
            </div>

              {/* Customer Feedback */}
            <div className={toggleState === 3 ?"content active-content p-7 h-auto mx-auto my-10 px-4 md:px-6 max-w-2xl gap-12 lg:gap-8 xl:gap-16":"content active-content invisible p-7 h-auto mx-auto my-10 px-4 md:px-6 max-w-2xl gap-12 lg:gap-8 xl:gap-16"}>
              <div class="flex gap-4">
                <div class="rounded-full w-20 h-20" >
                  <img class="rounded-full h-100" src={assets.avatar_comment} alt="image description"/>
                </div>
                <div class="grid gap-4">
                  <div class="flex gap-4 items-start">
                    <div class="grid gap-0.5 text-sm">
                      <h3 class="font-semibold">Sarah Johnson</h3>
                      <time class="text-sm text-muted-foreground">2 days ago</time>
                    </div>
                    <div class="flex items-center gap-0.5 ml-auto">
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                      <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                      />
                    </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="text-sm leading-loose text-muted-foreground">
                    <p>
                      I've been experimenting with my LuminaCook Multi-Function Air Fryer for a few weeks now, and it's been a
                      versatile addition to my kitchen. It's great for making crispy fries, chicken wings, and even some
                      healthier options.
                    </p>
                  </div>
                </div>
              </div>
              <hr class="my-4 border-gray-200 dark:border-gray-800" />

              <div class="flex gap-4">
              <div class="rounded-full w-20 h-20" >
                  <img class="rounded-full h-100" src={assets.avatar_comment} alt="image description"/>
                </div>
                <div class="grid gap-4">
                  <div class="flex gap-4 items-start">
                    <div class="grid gap-0.5 text-sm">
                      <h3 class="font-semibold">Sarah Johnson</h3>
                      <time class="text-sm text-muted-foreground">2 days ago</time>
                    </div>
                    <div class="flex items-center gap-0.5 ml-auto">
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                      <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                      />
                    </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="text-sm leading-loose text-muted-foreground">
                    <p>
                      I've been experimenting with my LuminaCook Multi-Function Air Fryer for a few weeks now, and it's been a
                      versatile addition to my kitchen. It's great for making crispy fries, chicken wings, and even some
                      healthier options.
                    </p>
                  </div>
                </div>
              </div>
              <hr class="my-4 border-gray-200 dark:border-gray-800" />

              <div class="flex gap-4">
                <div class="rounded-full w-20 h-20" >
                  <img class="rounded-full h-100" src={assets.avatar_comment} alt="image description"/>
                </div>
                <div class="grid gap-4">
                  <div class="flex gap-4 items-start">
                    <div class="grid gap-0.5 text-sm">
                      <h3 class="font-semibold">Sarah Johnson</h3>
                      <time class="text-sm text-muted-foreground">2 days ago</time>
                    </div>
                    <div class="flex items-center gap-0.5 ml-auto">
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                      <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                      />
                    </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="text-sm leading-loose text-muted-foreground">
                    <p>
                      I've been experimenting with my LuminaCook Multi-Function Air Fryer for a few weeks now, and it's been a
                      versatile addition to my kitchen. It's great for making crispy fries, chicken wings, and even some
                      healthier options.
                    </p>
                  </div>
                </div>
              </div>
              <hr class="my-4 border-gray-200 dark:border-gray-800" />

              <div class="flex gap-4">
                <div class="rounded-full w-20 h-20" >
                  <img class="rounded-full h-100" src={assets.avatar_comment} alt="image description"/>
                </div>
                <div class="grid gap-4">
                  <div class="flex gap-4 items-start">
                    <div class="grid gap-0.5 text-sm">
                      <h3 class="font-semibold">Sarah Johnson</h3>
                      <time class="text-sm text-muted-foreground">2 days ago</time>
                    </div>
                    <div class="flex items-center gap-0.5 ml-auto">
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                      <svg
                      class="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                      />
                    </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                      <svg
                        class="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="text-sm leading-loose text-muted-foreground">
                    <p>
                      I've been experimenting with my LuminaCook Multi-Function Air Fryer for a few weeks now, and it's been a
                      versatile addition to my kitchen. It's great for making crispy fries, chicken wings, and even some
                      healthier options.
                    </p>
                  </div>
                </div>
              </div>
              <button class="bg-[#00b207] hover:bg-green-300 text-white focus:ring-4 focus:ring-green-300 font-bold py-1 px-4 mt-4 rounded-full">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
        {/* Related Products */}
        <p class="relative text-xl grid justify-items-center font-bold text-gray-900 sm:text-4xl dark:text-white ">
          Related Products 
        </p>
  </section>
  
  )
}

export default ProductDisplay
