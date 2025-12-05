const ExpenseListSkeleton = () => {
  return (
    <div className="w-full animate-pulse">
      {/* List header skeleton */}
      <div className="flex items-center justify-between mb-4">
        <div className="h-6 bg-gray-200 rounded-md w-1/4"></div>
        <div className="h-6 bg-gray-200 rounded-md w-1/6"></div>
      </div>

      {/* List items skeleton */}
      <div className="space-y-2">
        {/* Item 1 */}
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
          <div className="h-4 bg-gray-200 rounded-md w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded-md w-1/6"></div>
          <div className="h-4 bg-gray-200 rounded-md w-1/6"></div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
          <div className="h-4 bg-gray-200 rounded-md w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded-md w-1/6"></div>
          <div className="h-4 bg-gray-200 rounded-md w-1/6"></div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md">
          <div className="h-4 bg-gray-200 rounded-md w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded-md w-1/6"></div>
          <div className="h-4 bg-gray-200 rounded-md w-1/6"></div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseListSkeleton;