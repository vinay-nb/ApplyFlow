import React, { useMemo, useState } from "react";
import { useJobStore } from "../../appStore";

const NavBar = () => {
  const jobs = useJobStore((s) => s.jobs);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e?.target?.value);
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) =>
      job.companyName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, jobs]);

  return (
    <nav className="flex items-center justify-between w-[100%] h-14 bg-light-background shadow-xs p-6 mt-1.5">
      <span className="font-bold text-2xl">Apply Flow</span>

      <div>
        <input
          type="text"
          className="border-[1px] border-[#f44336] rounded-md w-96 h-10 p-2"
          placeholder="search by company name"
          value={searchQuery}
          onChange={handleSearchQuery}
        />
      </div>
    </nav>
  );
};

export default NavBar;
