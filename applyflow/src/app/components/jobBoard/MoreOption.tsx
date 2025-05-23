import React from "react";

interface JobActionsMenuProps {
  onEdit: () => void;
  onDelete: () => void;
}

const MoreOption: React.FC<JobActionsMenuProps> = ({ onDelete, onEdit }) => {
  return (
    <div className="absolute left-[60%] top-[12%] right-0 mt-2 w-43 bg-[#374151] border-[#f44336] border-[1px] rounded-lg shadow-xl z-10 text-black">
      <button
        className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-[#71717a] text-sm text-[#f44336] cursor-pointer"
        onClick={onEdit}
      >
        Edit
      </button>
      <button
        className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-[#71717a] text-sm text-[#f44336] cursor-pointer"
        onClick={onDelete}
      >
        Delete
      </button>
      <button className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-[#71717a] text-sm text-[#f44336] cursor-pointer">
        AI Suggestions
      </button>
    </div>
  );
};

export default MoreOption;
