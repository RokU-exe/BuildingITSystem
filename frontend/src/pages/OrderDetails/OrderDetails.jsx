import React from 'react'
import { assets } from '../../assets/assets'

const OrderDetails = () => {
  return (
    <div class="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
    <div class="grid gap-6">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        {/* Billing Address */}
        <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Billing Address</h3>
        </div>
        <div class="p-6">
            <address class="grid gap-1 not-italic">
            <span>John Doe</span>
            <span>123 Main St.</span>
            <span>Anytown, CA 12345</span>
            <span>United States</span>
            </address>
        </div>
        </div>
        {/* Shipping address */}
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Shipping Address</h3>
        </div>
        <div class="p-6">
            <address class="grid gap-1 not-italic">
            <span>John Doe</span>
            <span>123 Main St.</span>
            <span>Anytown, CA 12345</span>
            <span>United States</span>
            </address>
        </div>
        </div>
    </div>
    {/* Order Summary */}
    <div class="grid gap-6">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Order Summary</h3>
        </div>
        <div class="p-6 grid gap-4">
            <div class="flex items-center justify-between">
            <span>Order ID</span>
            <span>#12345</span>
            </div>
            <div class="flex items-center justify-between">
            <span>Payment Method</span>
            <div class="flex items-center gap-2">
                <div class="h-5 w-5"></div>
                <span>Visa **** 1234</span>
            </div>
            </div>
            <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div>
            <div class="grid gap-2">
            <div class="flex items-center justify-between">
                <span>Subtotal</span>
                <span>$99.99</span>
            </div>
            <div class="flex items-center justify-between">
                <span>Discount</span>
                <span>-$10.00</span>
            </div>
            <div class="flex items-center justify-between">
                <span>Shipping</span>
                <span>$5.00</span>
            </div>
            <div class="flex items-center justify-between font-medium">
                <span>Total</span>
                <span>$94.99</span>
            </div>
            </div>
        </div>
        </div>
    </div>
    {/* Ordered Products */}
    <div class="col-span-2">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Ordered Products</h3>
        </div>
        <div class="p-6">
            <div class="relative w-full overflow-auto">
            <table class="w-full caption-bottom text-sm">
                <thead class="[&amp;_tr]:border-b">
                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Image
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Product
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Price
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Quantity
                    </th>
                    <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                    Subtotal
                    </th>
                </tr>
                </thead>
                <tbody class="[&amp;_tr:last-child]:border-0">
                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <img
                        src= {assets.tomato}
                        alt="Product Image"
                        width="64"
                        height="64"
                        class="rounded-md object-cover"
                    />
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <div class="font-medium">Tomato</div>
                    <div class="text-muted-foreground">100% Organic</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$9.99</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$99.98</td>
                </tr>
                <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <img
                        src={assets.spinach}
                        alt="Product Image"
                        width="64"
                        height="64"
                        class="rounded-md object-cover"
                    />
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                    <div class="font-medium">Acme Sunglasses</div>
                    <div class="text-muted-foreground">100% Organic</div>
                    </td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$29.99</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">1</td>
                    <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">$29.99</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default OrderDetails
