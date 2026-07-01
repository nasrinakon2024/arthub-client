'use client';
import { useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

// তোমার কম্পোনেন্ট পাথ নিশ্চিত করো
import UserDashboard from '@/components/dashboards/UserDashboard';
import ArtistDashboard from '@/components/dashboards/ArtistDashboard';
import AdminDashboard from '@/components/dashboards/AdminDashboard';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<string | null>(null); 
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        
        // এখানে তোমার ডাটাবেস থেকে ইউজারের রোল চেক করতে হবে
        // আপাতত টেস্টিংয়ের জন্য আমরা 'artist' ধরে নিচ্ছি
        setRole('artist'); 
      } else {
        router.push('/login');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) return <div className="text-center mt-20 text-xl font-bold">Loading ArtHub Dashboard...</div>;

  return (
    <main className="min-h-screen bg-gray-50">
      {role === 'user' && <UserDashboard user={user} />}
      {role === 'artist' && <ArtistDashboard user={user} />}
      {role === 'admin' && <AdminDashboard user={user} />}
    </main>
  );
}