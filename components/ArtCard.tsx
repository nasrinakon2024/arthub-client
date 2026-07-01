import React from 'react';

interface ArtCardProps {
  title: string;
  artist: string;
  price: number; // প্রাইস নাম্বার হিসেবে রাখা ভালো (ক্যালকুলেশনের সুবিধার জন্য)
  image: string;
  onBuyNow: () => void; // নাম পরিবর্তন করা হলো
}

const ArtCard: React.FC<ArtCardProps> = ({ title, artist, price, image, onBuyNow }) => {
  return (
    <div className="card w-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-100">
      <figure className="h-56 w-full">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover"
        />
      </figure>
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-500 text-sm mb-3">By {artist}</p>
        <div className="flex items-center justify-center gap-4">
          <p className="text-sky-600 font-bold text-lg">${price}</p>
          <button 
            onClick={onBuyNow}
            className="px-5 py-2 text-sm bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition shadow-md"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;