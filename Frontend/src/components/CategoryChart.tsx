const CategoryChartSkeleton = () => {
  return (
    <div className="w-full p-6 bg-gray-100 rounded-md shadow-md animate-pulse">
      {/* Chart title skeleton */}
      <div className="h-6 bg-gray-200 rounded-md w-1/3 mb-4"></div>

      {/* Chart area skeleton */}
      <div className="h-48 bg-gray-200 rounded-md"></div>

      {/* Chart labels skeleton */}
      <div className="flex justify-around mt-4">
        <div className="h-4 bg-gray-200 rounded-md w-16"></div>
        <div className="h-4 bg-gray-200 rounded-md w-16"></div>
        <div className="h-4 bg-gray-200 rounded-md w-16"></div>
      </div>
    </div>
  );
};

export default CategoryChartSkeleton;