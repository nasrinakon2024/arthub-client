'use client';
import React, { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

// মডাল খোলার ফাংশনটি প্রপস হিসেবে রিসিভ করবে
const Navbar = ({ cartCount, onOpenCart }: { cartCount: number, onOpenCart: () => void }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md border-b sticky top-0 z-50">
      <a className="text-2xl font-extrabold text-sky-600" href="/">ArtHub</a>
      
      {/* ডেস্কটপ মেনু */}
      <div className="hidden md:flex items-center gap-6">
        <a href="/browse" className="font-semibold text-gray-700 hover:text-sky-500">Browse</a>
        <a href="/dashboard" className="font-semibold text-gray-700 hover:text-sky-500">Dashboard</a>
        
        {/* কার্ট আইকন (ডেস্কটপ) */}
        <div className="relative cursor-pointer transition-transform hover:scale-110" onClick={onOpenCart}>
          <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 rounded-full">{cartCount}</span>
          )}
        </div>

        {user ? (
          <button onClick={handleLogout} className="px-6 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600">Logout</button>
        ) : (
          <>
            <a href="/login" className="font-semibold text-gray-700 hover:text-sky-500">Login</a>
            <a href="/register" className="px-6 py-2 bg-sky-500 text-white rounded-lg font-bold hover:bg-sky-600">Register</a>
          </>
        )}
      </div>

      <div className="md:hidden flex items-center gap-4">
        {/* কার্ট আইকন (মোবাইল) */}
        <div className="relative cursor-pointer transition-transform hover:scale-110" onClick={onOpenCart}>
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 rounded-full">{cartCount}</span>
          )}
        </div>

        <details className="dropdown dropdown-end">
          <summary className="btn btn-ghost p-1"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></summary>
          <ul className="p-4 shadow menu dropdown-content z-[100] bg-white rounded-box w-52 mt-4 border">
            <li><a href="/browse">Browse</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            {user ? (
              <li><button onClick={handleLogout} className="text-red-600 font-bold">Logout</button></li>
            ) : (
              <>
                <li><a href="/login">Login</a></li>
                <li><a href="/register" className="text-sky-600 font-bold">Register</a></li>
              </>
            )}
          </ul>
        </details>
      </div>
    </nav>
  );
};

export default Navbar;