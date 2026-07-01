'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';

export default function Checkout() {
  const [formData, setFormData] = useState({ name: '', address: '' });
  const [cartItems, setCartItems] = useState<any[]>([]);

  // পেজ লোড হওয়ার সময় লোকাল স্টোরেজ থেকে কার্ট আইটেম নেওয়া
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(savedCart);
  }, []);

  const handleOrder = () => {
    // অর্ডার ডেটা LocalStorage-এ সেভ করা হচ্ছে
    const order = {
      ...formData,
      items: cartItems.map((item) => item.title), // আইটেমের নামগুলো নেওয়া হলো
      date: new Date().toLocaleDateString(),
      status: "Pending"
    };
    
    // আগের অর্ডারগুলো নিয়ে নতুন অর্ডার যোগ করা
    const existingOrders = JSON.parse(localStorage.getItem('myOrders') || '[]');
    localStorage.setItem('myOrders', JSON.stringify([...existingOrders, order]));
    
    // অর্ডার সফল হলে কার্ট খালি করা
    localStorage.removeItem('cartItems');
    
    alert("Order Placed Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartItems.length} onOpenCart={() => {}} />

      <main className="max-w-2xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="bg-white p-6 rounded-xl shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                placeholder="Your Name" 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Shipping Address</label>
              <textarea 
                className="w-full p-2 border rounded" 
                placeholder="Your Address"
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="button" 
              className="w-full py-3 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600"
              onClick={handleOrder}
            >
              Place Order
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}