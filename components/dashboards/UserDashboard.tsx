export default function UserDashboard({ user }: { user: any }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">User Dashboard</h1>
      <p>Welcome, User: {user.email}</p>
    </div>
  );
}