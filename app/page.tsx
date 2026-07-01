'use client'; // এটি অবশ্যই রাখতে হবে
import { useState } from 'react';
import Link from 'next/link'; // লিঙ্ক ইমপোর্ট করা হলো
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtCard from '@/components/ArtCard';
import CartModal from '@/components/CartModal'; // মডাল ইমপোর্ট

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<any[]>([]); // কার্ট আইটেম রাখার জন্য স্টেট
  const [isModalOpen, setIsModalOpen] = useState(false); // মডাল ওপেন/ক্লোজ স্টেট

  const addToCart = (item: any) => {
    setCartItems([...cartItems, item]);
    setCartCount(cartCount + 1);
  };

  // রিমুভ করার ফাংশন
  const removeFromCart = (index: number) => {
    const newItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newItems);
    setCartCount(cartCount - 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar 
        cartCount={cartCount} 
        onOpenCart={() => setIsModalOpen(true)} 
      />
      
      {/* মডাল কম্পোনেন্ট */}
      <CartModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        cartItems={cartItems} 
        onRemove={removeFromCart} 
      />

      <main className="flex-grow">
        <div className="text-center py-20 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Discover & Buy <span className="text-sky-500">Original Art</span></h1>
          {/* লিঙ্ক দিয়ে বাটনটি কানেক্ট করা হলো */}
          <Link href="/browse">
            <button className="px-8 py-3 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition">
              Browse Artworks
            </button>
          </Link>
        </div>

        <section className="py-10 px-4 md:px-16">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Artworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ArtCard 
              title="Colorful Abstract" 
              artist="Jisan Ahmed" 
              price={150}
              image="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400" 
              onAddToCart={() => addToCart({ title: "Colorful Abstract", artist: "Jisan Ahmed", price: "$150", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400" })}
            />
            
            <ArtCard 
              title="Mountain Breeze" 
              artist="Nasrin Naina" 
              price={250}
              image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400" 
              onAddToCart={() => addToCart({ title: "Mountain Breeze", artist: "Nasrin Naina", price: "$200", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400" })}
            />
            
            <ArtCard 
              title="Urban Dreams" 
              artist="Anonymous" 
              price={350} 
              image="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=400" 
              onAddToCart={() => addToCart({ title: "Urban Dreams", artist: "Anonymous", price: "$120", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=400" })}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}