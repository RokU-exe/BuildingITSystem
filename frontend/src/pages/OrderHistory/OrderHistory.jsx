import React from 'react'
import { assets } from '../../assets/assets'


const OrderHistory = () => {
  return (
    <div class="rounded-lg mt-4 border bg-card text-card-foreground shadow-sm" data-v0-t="card">
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
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background bg-white text-black hover:bg-green-300 hover:text-green-900  duration-300 ease-in-out  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
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
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background bg-white text-black hover:bg-green-300 hover:text-green-900  duration-300 ease-in-out transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
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
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background bg-white text-black hover:bg-green-300 hover:text-green-900  duration-300 ease-in-out transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
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
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background bg-white text-black hover:bg-green-300 hover:text-green-900  duration-300 ease-in-out transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    View Details
                </button>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
    </div>
  )
}

export default OrderHistory
