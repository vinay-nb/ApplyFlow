import React from "react";

interface JobActionsMenuProps {
  onEdit: () => void;
  onDelete: () => void;
}

const MoreOption: React.FC<JobActionsMenuProps> = ({ onDelete, onEdit }) => {
  return (
    <div className="absolute left-[40%] top-[12%] right-0 mt-2 w-44 bg-yellow-50 border border-gray-100 rounded-lg shadow-xl z-10 text-black">
      <button
        className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
        onClick={onEdit}
      >
        Edit
      </button>
      <button
        className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 text-sm text-red-600"
        onClick={onDelete}
      >
        Delete
      </button>
      <button className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 text-sm">
        AI Suggestions
      </button>
    </div>
  );
};

export default MoreOption;
