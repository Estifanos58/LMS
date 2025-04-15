const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-4xl font-bold text-blue-600 mb-4">Welcome to the LMS Dashboard</header>
      <p className="text-lg text-gray-700">Manage your learning system efficiently and effectively.</p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
};

export default Homepage;
