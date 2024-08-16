import React from 'react'
import './PlaceOrder.css'

const PlaceOrder = () => {
  return (
    <form className='place-order'>
        <div className="place-order-left">
            <p className="title">Billing Information</p>
            <div className="multi-fields">
                <input type="text" placeholder='First name' />
                <input type="text" placeholder='Last name' />
            </div>
            <input type="email" placeholder='Email address' />
            <input type="text" placeholder='Street' />
            <div className="multi-fields">
                <input type="text" placeholder='City' />
                <input type="text" placeholder='State' />
            </div>
            <div className="multi-fields">
                <input type="text" placeholder='Zip code' />
                <input type="text" placeholder='Country' />
            </div>
            <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        </div>
        <div
            class=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
            <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                Cart Total
            </h2>
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
                    <button
                        class="w-full text-center bg-[#00b207] rounded-full py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-green-300">Place Order</button>
                </form>
            </div>
        </div>
    </form>
  )
}

export default PlaceOrder