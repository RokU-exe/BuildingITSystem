import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const OrderHistory = () => {
  return (

    <div class="grid grid-cols-2 rounded-lg mt-4 border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <aside className="w-64 p-4 bg-white border-r">
        <nav className="space-y-4">
          <h2 className="text-lg font-bold">Navigation</h2>
          <ul className="space-y-2">
                <Link to='/profile'>
                    <li>
                    <a href="#" className="flex items-center p-2 space-x-2 hover:bg-green-100 rounded">
                        <div className="w-5 h-5" />
                        <span>Dashboard</span>
                    </a>
                    </li>
                </Link>
                <li>
                <a href="#" className="flex items-center p-2 space-x-2 hover:bg-green-100 rounded">
                    <div className="w-5 h-5" />
                    <span>Order History</span>
                </a>
                </li>
            <li>
              <a href="#" className="flex items-center p-2 space-x-2 hover:bg-green-100 rounded">
                <div className="w-5 h-5" />
                <span>Wishlist</span>
              </a>
            </li>
            <Link to='/shoppingcart'>
                <li>
                <a href="#" className="flex items-center p-2 space-x-2 hover:bg-green-100 rounded">
                    <div className="w-5 h-5" />
                    <span>Shopping Cart</span>
                </a>
                </li>
            </Link>
            <li>
              <a href="#" className="flex items-center p-2 space-x-2 hover:bg-green-100 rounded">
                <div className="w-5 h-5" />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 space-x-2 hover:bg-green-100 rounded">
                <div className="w-5 h-5" />
                <span>Log-out</span>
              </a>
            </li>
          </ul>
        </nav>
        </aside>
        <div>
            <div class="flex flex-col space-y-1.5 p-6 px-7">
                <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Order History</h3>
                <p class="text-sm text-muted-foreground">View your past orders.</p>
            </div>
            <div class="p-6">
                <div class="relative w-full overflow-auto">
                <table class="w-full caption-bottom text-sm">
                    <thead class="[&amp;_tr]:border-b">
                    <tr class="border-b transition-colors data-[state=selected]:bg-muted">
                        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Order ID
                        </th>
                        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        Date
                        </th>
                        <th class="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-left">
                        Total
                        </th>
                        <th class="h-12 px-8 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        Status
                        </th>
                    </tr>
                    </thead>
                    <tbody class="[&amp;_tr:last-child]:border-0">
                    <tr class="border-b duration-300 ease-in-out transition-colors hover:bg-gray-100 data-[state=selected]:bg-muted">
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div class="font-medium">INV001</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <time datetime="2023-06-23">June 23, 2023</time>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-left">$250.00</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                            class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                            data-v0-t="badge"
                        >
                            Fulfilled
                        </div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-left">
                        <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background bg-white text-black hover:bg-green-300 hover:text-green-900  duration-300 ease-in-out transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                            View Details
                        </button>
                        </td>
                    </tr>
                    <tr class="border-b duration-300 ease-in-out transition-colors hover:bg-gray-100 data-[state=selected]:bg-muted">
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div class="font-medium">INV002</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <time datetime="2023-06-24">June 24, 2023</time>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-left">$150.00</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                            class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs"
                            data-v0-t="badge"
                        >
                            Declined
                        </div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-left">
                        <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background bg-white text-black hover:bg-green-300 hover:text-green-900  duration-300 ease-in-out transition-colors  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                            View Details
                        </button>
                        </td>
                    </tr>
                    <tr class="border-b duration-300 ease-in-out transition-colors hover:bg-gray-100 data-[state=selected]:bg-muted">
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div class="font-medium">INV003</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <time datetime="2023-06-25">June 25, 2023</time>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-left">$350.00</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                            class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                            data-v0-t="badge"
                        >
                            Fulfilled
                        </div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-left">
                        <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background bg-white text-black hover:bg-green-300 hover:text-green-900  duration-300 ease-in-out transition-colors  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                            View Details
                        </button>
                        </td>
                    </tr>
                    <tr class="border-b duration-300 ease-in-out transition-colors hover:bg-gray-100 data-[state=selected]:bg-muted">
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div class="font-medium">INV004</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <time datetime="2023-06-26">June 26, 2023</time>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-left">$450.00</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                            class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                            data-v0-t="badge"
                        >
                            Fulfilled
                        </div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-left">
                        <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background bg-white text-black hover:bg-green-300 hover:text-green-900  duration-300 ease-in-out transition-colors  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                            View Details
                        </button>
                        </td>
                    </tr>
                    <tr class="border-b transition-colors hover:bg-gray-100 data-[state=selected]:bg-muted">
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        <div class="font-medium">INV005</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <time datetime="2023-06-27">June 27, 2023</time>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-left">$550.00</td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 hidden sm:table-cell">
                        <div
                            class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                            data-v0-t="badge"
                        >
                            Fulfilled
                        </div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-left">
                        <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background bg-white text-black hover:bg-green-300 hover:text-green-900  duration-300 ease-in-out transition-colors  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                            View Details
                        </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderHistory
