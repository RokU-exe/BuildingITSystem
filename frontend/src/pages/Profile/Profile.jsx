import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    //customer navigation bar
    <div>
        <div>
        <div className="flex min-h-screen bg-gray-50">
        <aside className="w-64 pt-8 pl-4 bg-white border-r">
        <nav className="space-y-4">
          <h2 className="text-lg font-bold">Navigation</h2>
          <ul className="space-y-2">
                <Link to='/profile'>
                    <li>
                    <a href="#" className="flex items-center p-2 mb-2 space-x-2 hover:bg-green-100 rounded">
                        <div className="w-5 h-5" />
                        <span>Dashboard</span>
                    </a>
                    </li>
                </Link>
                <Link to='/orderhistory'>
                <li>
                <a href="#" className="flex items-center p-2 space-x-2 hover:bg-green-100 rounded">
                    <div className="w-5 h-5" />
                    <span>Order History</span>
                </a>
                </li>
                </Link>
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
      {/* customer profile */}
      <main className="flex-1 p-8 space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center p-4 pt-20 border-2 rounded-lg ">
                <div>
                    <div src="/placeholder-user.jpg" alt="Profile Picture" />
                    <div>DP</div>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold">Dohyun Park</h3>
                    <p className="text-sm text-muted-foreground">Customer</p>
                </div>
            </div>
            <div className="p-4 space-y-4 border-2 rounded-lg">
                <h3 className="text-xl font-bold">Billing Address</h3>
                <p>Dohyun Park</p>
                <p>0454H, Hanwha Building, 88 Cheonggyecheon-ro, Jung-gu, Seoul, Korea</p>
                <p>loopy*******@gmail.com</p>
                <p>(+84) *** *** 678</p>
                <div variant="outline">Edit Address</div>
            </div>
        </div>
        {/* order history */}
        <div className='border-2 rounded-lg'>
          <h3 className=" m-2 text-xl font-bold">Recent Order History</h3>
          <div>
            <div>
              <div className='m-2 grid grid-cols-5'>
                <div className='text-lg font-semibold'>Order ID</div>
                <div className='text-lg font-semibold'>Date</div>
                <div className='text-lg font-semibold'>Total</div>
                <div className='text-lg font-semibold'>Status</div>
                <div className='text-lg font-semibold'>View</div>
              </div>
            </div>
            <div className='m-2'>
              <div className=' pb-4 grid grid-cols-5'>
                <div>#738</div>
                <div>8 Sep, 2020</div>
                <div>$135.00 (5 Products)</div>
                <div>Processing</div>
                <div className="text-[#00b207] hover:text-green-300 transition-all duration-200 ease-linear">
                  <Link to='/orderdetails'>View Details</Link>
                </div>
              </div>
              <div className='pb-4 grid grid-cols-5'>
                <div>#703</div>
                <div>24 May, 2020</div>
                <div>$25.00 (1 Product)</div>
                <div>On the way</div>
                <div className="text-[#00b207] hover:text-green-300 transition-all duration-200 ease-linear">
                  <Link to='/orderdetails'>View Details</Link>
                </div>
              </div>
              <div className='pb-4 grid grid-cols-5'>
                <div>#130</div>
                <div>22 Oct, 2020</div>
                <div>$250.00 (4 Products)</div>
                <div>Completed</div>
                <div className=" text-[#00b207] hover:text-green-300 transition-all duration-200 ease-linear">
                  <Link to='/orderdetails'>View Details</Link>
                </div>
              </div>
              <div className='pb-4 grid grid-cols-5'>
                <div>#561</div>
                <div>1 Feb, 2020</div>
                <div>$35.00 (1 Product)</div>
                <div>Completed</div>
                <div className=" text-[#00b207] hover:text-green-300 transition-all duration-200 ease-linear">
                  <Link to='/orderdetails'>View Details</Link>
                </div>
              </div>
              <div className='pb-4 grid grid-cols-5'>
                <div>#536</div>
                <div>21 Sep, 2020</div>
                <div>$678.00 (13 Products)</div>
                <div>Completed</div>
                <div className=" text-[#00b207] hover:text-green-300 transition-all duration-200 ease-linear">
                  <Link to='/orderdetails'>View Details</Link>
                </div>
              </div>
              <div className='pb-4 grid grid-cols-5'>
                <div>#492</div>
                <div>22 Oct, 2020</div>
                <div>$345.00 (7 Products)</div>
                <div>Completed</div>
                <div className=" text-[#00b207] hover:text-green-300 transition-all duration-200 ease-linear">
                  <Link to='/orderdetails'>View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
    </div>
  )
}

export default Profile