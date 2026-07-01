export default function AdminDashboard({ user }: { user: any }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      {/* এখানে Manage Users, Manage All Artworks, Analytics এর চার্টগুলো হবে */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white p-4 rounded shadow">Total Users: 150</div>
        <div className="bg-white p-4 rounded shadow">Total Revenue: $5000</div>
      </div>
    </div>
  );
}