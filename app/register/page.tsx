'use client';
import { useState, useEffect } from 'react';
import { auth, googleProvider } from '@/lib/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isClient, setIsClient] = useState(false); // সার্ভার-সাইড এরর এড়াতে
  const router = useRouter();

  // এটি নিশ্চিত করে যে কোডটি শুধুমাত্র ব্রাউজারে রান হচ্ছে
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registration Successful!");
      router.push('/dashboard');
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/dashboard');
    } catch (error: any) {
      alert(error.message);
    }
  };

  if (!isClient) return null; // ব্রাউজারে লোড না হওয়া পর্যন্ত খালি রাখবে

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-2 border rounded mb-4" 
        />
        <input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-2 border rounded mb-4" 
        />
        <button onClick={handleRegister} className="w-full bg-sky-500 text-white p-2 rounded mb-4 hover:bg-sky-600">Register with Email</button>
        <button onClick={handleGoogleLogin} className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">Login with Google</button>
      </div>
    </div>
  );
}