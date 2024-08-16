import React from 'react'
const Dashboard = () => {
  return (
    <div>
        <div className="flex min-h-screen bg-gray-50">
        <aside className="w-64 p-4 bg-white border-r">
        <nav className="space-y-4">
          <h2 className="text-lg font-bold">Navigation</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 space-x-2 text-green-600 bg-green-100 rounded">
                <div className="w-5 h-5" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 space-x-2">
                <div className="w-5 h-5" />
                <span>Order History</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 space-x-2">
                <div className="w-5 h-5" />
                <span>Wishlist</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 space-x-2">
                <div className="w-5 h-5" />
                <span>Shopping Cart</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 space-x-2">
                <div className="w-5 h-5" />
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 space-x-2">
                <div className="w-5 h-5" />
                <span>Log-out</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center p-4 border-2 rounded-lg ">
                <div>
                    <div src="/placeholder-user.jpg" alt="Profile Picture" />
                    <div>DP</div>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-bold">Dohyun Park</h3>
                    <p className="text-sm text-muted-foreground">Customer</p>
                    <div variant="outline" className="mt-2">
                        Edit Profile
                    </div>
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
        <div className='border-2 rounded-lg'>
          <h3 className=" m-2 text-xl font-bold">Recent Order History</h3>
          <div>
            <div>
              <div className='m-2 grid grid-cols-5'>
                <div>Order ID</div>
                <div>Date</div>
                <div>Total</div>
                <div>Status</div>
                <div>View</div>
              </div>
            </div>
            <div className='m-1'>
              <div className=' pb-4 grid grid-cols-5'>
                <div>#738</div>
                <div>8 Sep, 2020</div>
                <div>$135.00 (5 Products)</div>
                <div>Processing</div>
                <div className="text-green-600">
                  <a href="#">View Details</a>
                </div>
              </div>
              <div className='pb-4 grid grid-cols-5'>
                <div>#703</div>
                <div>24 May, 2020</div>
                <div>$25.00 (1 Product)</div>
                <div>On the way</div>
                <div className="text-green-600">
                  <a href="#">View Details</a>
                </div>
              </div>
              <div className='pb-4 grid grid-cols-5'>
                <div>#130</div>
                <div>22 Oct, 2020</div>
                <div>$250.00 (4 Products)</div>
                <div>Completed</div>
                <div className=" text-green-600">
                  <a href="#">View Details</a>
                </div>
              </div>
              <div className='pb-4 grid grid-cols-5'>
                <div>#561</div>
                <div>1 Feb, 2020</div>
                <div>$35.00 (1 Product)</div>
                <div>Completed</div>
                <div className=" text-green-600">
                  <a href="#">View Details</a>
                </div>
              </div>
              <div className='pb-4 grid grid-cols-5'>
                <div>#536</div>
                <div>21 Sep, 2020</div>
                <div>$678.00 (13 Products)</div>
                <div>Completed</div>
                <div className=" text-green-600">
                  <a href="#">View Details</a>
                </div>
              </div>
              <div className='pb-4 grid grid-cols-5'>
                <div>#492</div>
                <div>22 Oct, 2020</div>
                <div>$345.00 (7 Products)</div>
                <div>Completed</div>
                <div className=" text-green-600">
                  <a href="#">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}

export default Dashboard