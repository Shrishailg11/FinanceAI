import { useState } from 'react';

interface BudgetCategory {
  id: string;
  name: string;
  limit: number;
  spent: number;
}

const BudgetCategories = () => {
  const [categories, setCategories] = useState<BudgetCategory[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', limit: '' });

  const totalBudget = categories.reduce((sum, cat) => sum + cat.limit, 0);

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCategory.name && newCategory.limit) {
      const category: BudgetCategory = {
        id: Date.now().toString(),
        name: newCategory.name,
        limit: parseFloat(newCategory.limit),
        spent: 0
      };
      setCategories([...categories, category]);
      setNewCategory({ name: '', limit: '' });
      setShowAddForm(false);
    }
  };

  const removeCategory = (id: string) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-slate-700">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Budget Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Define your spending limits per category.
          </p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center space-x-2"
        >
          <span>➕</span>
          <span>Add Category</span>
        </button>
      </div>

      {showAddForm && (
        <div className="mb-6 p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
          <form onSubmit={handleAddCategory} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Category name"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                className="px-3 py-2 bg-white dark:bg-slate-600 border border-gray-300 dark:border-slate-500 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="number"
                step="0.01"
                placeholder="Monthly limit"
                value={newCategory.limit}
                onChange={(e) => setNewCategory({ ...newCategory, limit: e.target.value })}
                className="px-3 py-2 bg-white dark:bg-slate-600 border border-gray-300 dark:border-slate-500 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {categories.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
            <span className="text-2xl text-gray-400 dark:text-gray-500">🏷️</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 italic">
            No categories defined. Add one to start tracking your budget.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {categories.map((category) => {
            const percentage = (category.spent / category.limit) * 100;
            return (
              <div key={category.id} className="p-4 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      ${category.spent.toFixed(2)} / ${category.limit.toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeCategory(category.id)}
                      className="text-red-600 hover:text-red-700 text-sm"
                    >
                      ✕
                    </button>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      percentage > 80 ? 'bg-red-500' : percentage > 60 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
                <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {percentage.toFixed(1)}% used
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-slate-600">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            Total Monthly Budget
          </span>
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ${totalBudget.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BudgetCategories;