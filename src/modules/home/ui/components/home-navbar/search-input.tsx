import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const SearchInput = () => {
  return (
    <>
      <form className="flex w-full max-w-[600px]">
        <div className="relative w-full flex">
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-4 border-red-500-none py-2 rounded-l-full focus:outline-none focous:border-blue-500"
          />
          <button className="border border-l-0 rounded-r-full w-12 flex items-center justify-center">
            <SearchIcon />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchInput;
