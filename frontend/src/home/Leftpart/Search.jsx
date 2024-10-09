import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useGetAllusers from "../../context/useGetAllusers.jsx";
import useConversation from "../../zustand/useConversation.js";
import toast from "react-hot-toast";

function Search() {
  const [Search, setSearch] = useState();
  const [allUsers] = useGetAllusers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Search) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(Search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="h-[10vh]">
      <div className="px-6 py-4">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-3">
            <label className="border-[1px] border-gray-700 rounded-lg p-3 flex items-center gap-2 bg-slate-900 w-[80%]">
              <input
                type="text"
                className="grow outline-none bg-transparent"
                placeholder="Search"
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button>
              <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
