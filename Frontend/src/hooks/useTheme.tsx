const UseThemeSkeleton = () => {
  return (
    <div className="w-full h-full bg-gray-100 animate-pulse">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="h-6 w-48 bg-gray-200 rounded-md mb-4"></div>
        <div className="h-4 w-32 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );
};

export default UseThemeSkeleton;