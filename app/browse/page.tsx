'use client';
import { useState } from 'react'; 
import Link from 'next/link'; // Link ইমপোর্ট করা হলো
import Navbar from '@/components/Navbar';
import ArtCard from '@/components/ArtCard';
import CartModal from '@/components/CartModal'; 

export default function Browse() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (item: any) => {
    setCartItems([...cartItems, item]);
    setCartCount(cartCount + 1);
  };

  const removeFromCart = (index: number) => {
    const newItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newItems);
    setCartCount(cartCount - 1);
  };

  const artworks = [
    { title: "Colorful Abstract", artist: "Jisan Ahmed", price: 150, image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400" },
    { title: "Mountain Breeze", artist: "Nasrin Naina", price: 200, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400" },
    { title: "Urban Dreams", artist: "Anonymous", price: 120, image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=400" },
    { title: "Desert Sunset", artist: "Rahim Khan", price: 180, image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=400" },
    { title: "Ocean Harmony", artist: "Fatima Akter", price: 220, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400" },
    { title: "Forest Whisper", artist: "David Chen", price: 190, image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=400" },
    { title: "City Lights", artist: "Sofia Lopez", price: 140, image: "https://images.unsplash.com/photo-1519501025264-65ba15a8c390?q=80&w=400" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartCount} onOpenCart={() => setIsModalOpen(true)} />
      
      <CartModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        cartItems={cartItems} 
        onRemove={removeFromCart} 
      />

      <main className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Browse All Artworks</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artworks.map((art, index) => (
            <Link href={`/artwork/${index + 1}`} key={index}>
              <ArtCard 
                title={art.title} 
                artist={art.artist} 
                price={art.price} 
                image={art.image} 
                onBuyNow={() => {
                  // এখানে e.preventDefault() সরানো হয়েছে যাতে TypeScript এরর না দেয়
                  addToCart(art);
                }} 
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  ); 