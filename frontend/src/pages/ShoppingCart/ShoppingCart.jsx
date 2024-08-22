import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';


const ShoppingCart = () => {
    const [counter, setCounter] = React.useState(1);    
    const incrementHandler=()=>{
      setCounter((val) => val + 1);
    }
    const decrementHandler=()=>{
      setCounter((val) => (val > 0 ? val - 1 : val));
    }

  return (
    <section
        class=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
            <div class="grid grid-cols-12">
                <div
                    class="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                   <div class="flex items-center justify-between pb-8 border-b border-gray-300">
                        <h2 class="font-manrope font-bold text-3xl leading-10 text-black">My Shopping Cart</h2>
                        <h2 class="font-manrope font-bold text-xl leading-8 text-gray-600">3 Items</h2>
                    </div>
                    {/* Title of the Shopping cart: Product, Quantity, Subtotal */}
                    <div class="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                        <div class="col-span-12 md:col-span-4">
                            <p class="font-normal text-lg leading-8 text-gray-400">Product</p>
                        </div>
                        <div class="col-span-12 md:col-span-8">
                            <div class="grid grid-cols-8">
                                <div class="col-span-4">
                                    <p class="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
                                </div>
                                <div class="col-span-2">
                                    <p class="font-normal text-lg leading-8 text-gray-400 text-center">Subtotal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Product Card 1 */}
                    <div
                        class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                        <div class="w-full md:max-w-[126px]">
                            <img src={assets.lettuce} alt="lettuce image"
                                class="mx-auto rounded-xl" />
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                            <div class="md:col-span-1">
                                <div class="flex flex-col max-[500px]:items-center gap-3">
                                    <h6 class="font-semibold text-base leading-7 text-black">Lettuce</h6>
                                    <h6 class="font-normal text-base leading-7 text-gray-500">Vegetable</h6>
                                    <h6 class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-green-600">$5.00</h6>
                                </div>
                            </div>
                            <div class="w-32 h-14 mx-auto border-gray-300 rounded-full border-2 mt-5 px-2 py-1">
                                <div class="relative flex items-center max-w-[9rem]">                  
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
                            <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                <p class="font-bold text-lg leading-8 text-gray-600 mr-4 transition-all duration-300 group-hover:text-green-600">$5.00</p>
                            </div>
                            <div class="w-32 h-14 mx-auto ml-24  mt-5 px-2 py-1">
                                <div class="relative flex items-center max-w-[9rem]">                  
                                    <button type="button" id="decrement-button" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-full px-2.5 py-2.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Product Card 2 */}
                    <div
                        class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                        <div class="w-full md:max-w-[126px]">
                            <img src={assets.spinach} alt="lettuce image"
                                class="mx-auto rounded-xl" />
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                            <div class="md:col-span-1">
                                <div class="flex flex-col max-[500px]:items-center gap-3">
                                    <h6 class="font-semibold text-base leading-7 text-black">Spinach</h6>
                                    <h6 class="font-normal text-base leading-7 text-gray-500">Vegetable</h6>
                                    <h6 class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-green-600">$4.00</h6>
                                </div>
                            </div>
                            <div class="w-32 h-14 mx-auto border-gray-300 rounded-full border-2 mt-5 px-2 py-1">
                                <div class="relative flex items-center max-w-[9rem]">                  
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
                            <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                <p class="font-bold text-lg leading-8 text-gray-600 mr-4 transition-all duration-300 group-hover:text-green-600">$5.00</p>
                            </div>
                            <div class="w-32 h-14 mx-auto ml-24  mt-5 px-2 py-1">
                                <div class="relative flex items-center max-w-[9rem]">                  
                                    <button type="button" id="decrement-button" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-full px-2.5 py-2.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Product Card 3 */}
                    <div
                        class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                        <div class="w-full md:max-w-[126px]">
                            <img src={assets.tomato} alt="lettuce image"
                                class="mx-auto rounded-xl" />
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                            <div class="md:col-span-1">
                                <div class="flex flex-col max-[500px]:items-center gap-3">
                                    <h6 class="font-semibold text-base leading-7 text-black">Tomato</h6>
                                    <h6 class="font-normal text-base leading-7 text-gray-500">Vegetable</h6>
                                    <h6 class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-green-600">$1.00</h6>
                                </div>
                            </div>
                            <div class="w-32 h-14 mx-auto border-gray-300 rounded-full border-2 mt-5 px-2 py-1">
                                <div class="relative flex items-center max-w-[9rem]">                  
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
                            <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                <p class="font-bold text-lg leading-8 text-gray-600 mr-4 transition-all duration-300 group-hover:text-green-600">$5.00</p>
                            </div>
                            <div class="w-32 h-14 mx-auto ml-24  mt-5 px-2 py-1">
                                <div class="relative flex items-center max-w-[9rem]">                  
                                    <button type="button" id="decrement-button" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-full px-2.5 py-2.5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Button return to shop and update cart */}
                    <div class="grid grid-cols-4">
                        <button
                            class="w-full col-span-1 text-center bg-gray-100 rounded-full mt-4 py-2 px-1 font-semibold text-sm text-black transition-all duration-500 hover:bg-green-100">Return to shop    </button>
                        <button
                            class="w-full col-start-4 text-center bg-gray-100 rounded-full mt-4 py-2 px-1 font-semibold text-sm text-black transition-all duration-500 hover:bg-green-100">Update Cart    </button>
                    </div>
                </div>
                {/* Cart Total */}
                <div
                    class=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                    <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                        Cart Total</h2>
                    <div class="mt-8">
                        <div class="flex items-center justify-between pb-6 border-b border-gray-300">
                            <p class="font-normal text-lg leading-8 text-black">Subtotal</p>
                            <p class="font-medium text-lg leading-8 text-black">$84.00</p>
                        </div>
                        <div class="flex items-center justify-between pb-6 mt-8 border-b border-gray-300">
                            <p class="font-normal text-lg leading-8 text-black">Shipping</p>
                            <p class="font-medium text-lg leading-8 text-black">Free</p>
                        </div>
                        <form>
                            <div class="flex items-center justify-between py-8">
                                <p class="font-medium text-xl leading-8 text-black">Total</p>
                                <p class="font-semibold text-xl leading-8 text-green-600">$485.00</p>
                            </div>
                            <Link to='./order'><button class="w-full text-center bg-[#00b207] rounded-full py-3 px-6 font-semibold text-lg text-white transition-all duration-300 hover:bg-green-300">Proceed to checkout</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>                                          
  )
}

export default ShoppingCart
