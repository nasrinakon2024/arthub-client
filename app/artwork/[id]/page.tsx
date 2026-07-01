'use client';
import { useParams } from 'next/navigation';

// যেহেতু তোমার Browse পেজে হার্ডকোডেড ডাটা আছে, এখানেও আমরা একটি ডামি লিস্ট ব্যবহার করছি
const artworks = [
  { id: '1', title: "Colorful Abstract", artist: "Jisan Ahmed", price: 150, image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400" },
  { id: '2', title: "Mountain Breeze", artist: "Nasrin Naina", price: 200, image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400" },
  // তোমার অন্যান্য আর্টওয়ার্কগুলো এখানে অ্যাড করে দিও
];

export default function ArtworkDetails() {
  const { id } = useParams();
  const art = artworks.find((item) => item.id === id);

  if (!art) return <p className="text-center py-20">Artwork not found!</p>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <img src={art.image} alt={art.title} className="w-full h-96 object-cover rounded-xl" />
      <h1 className="text-4xl font-bold mt-6">{art.title}</h1>
      <p className="text-xl text-gray-600 mt-2">Artist: {art.artist}</p>
      <p className="text-2xl font-bold text-sky-600 mt-4">${art.price}</p>
      <button className="mt-6 px-8 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700">
        Buy Now
      </button>
    </div>
  );
}