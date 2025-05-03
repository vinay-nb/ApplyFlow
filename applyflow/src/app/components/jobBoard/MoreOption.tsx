import React from "react";

const MoreOption = () => {
  return (
    <div className="absolute right-0 mt-2 w-44 bg-yellow-50 border border-gray-100 rounded-lg shadow-xl z-10 text-black">
      <button className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 text-sm">
        Edit
      </button>
      <button className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-red-600">
        Delete
      </button>
      <button className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 text-sm">
        AI Suggestions
      </button>
    </div>
  );
};

export default MoreOption;
