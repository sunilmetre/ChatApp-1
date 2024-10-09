import React from "react";
import User from "./User";
import "../../css/styles.css";
import useGetAllusers from "../../context/useGetAllusers";

function Users() {
  const [allUsers, loading] = useGetAllusers();
  console.log(allUsers);
  return (
    <div>
      <h1 className="px-8 py-2 text-white font-semibold bg-slate-800 rounded-md">
        Message
      </h1>
      <div
        className="py-2 overflow-y-auto hide-scrollbar"
        style={{ maxHeight: "calc(84vh - 10vh)" }}
      >
        {
          allUsers.map((user,index)=>(
            <User key={index} user={user}/>
          ))
        }
      </div>
    </div>
  );
}

export default Users;
