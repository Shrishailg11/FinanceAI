const NearbyPlacesSkeleton = () => {
  return (
    <div className="w-full p-6 bg-gray-100 rounded-md shadow-md animate-pulse">
      {/* Title skeleton */}
      <div className="h-6 bg-gray-200 rounded-md w-1/2 mb-4"></div>

      {/* Place items skeleton */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded-md w-full"></div>
        <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded-md w-1/2"></div>
      </div>
    </div>
  );
};

export default NearbyPlacesSkeleton;