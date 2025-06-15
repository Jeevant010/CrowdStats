export default function Navbar() {
  return (
    <nav className="bg-white shadow fixed w-full z-10 top-0">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <span className="font-bold text-2xl text-blue-700">CrowdStats</span>
        <div>
          <a href="/" className="mr-6 hover:text-blue-600">Home</a>
          <a href="/create" className="mr-6 hover:text-blue-600">Create</a>
          <a href="/profile" className="hover:text-blue-600">Profile</a>
        </div>
      </div>
    </nav>
  );
}
