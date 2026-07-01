export default function ArtistDashboard({ user }: { user: any }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Artist Dashboard</h1>
      <p>Welcome, Artist: {user.email}</p>
      {/* এখানে Manage Artworks, Add Artwork, Sales History টেবিলগুলো হবে */}
      <div className="mt-6 bg-white p-4 rounded shadow">
        <button className="bg-sky-500 text-white p-2 rounded">Add New Artwork</button>
      </div>
    </div>
  );
}