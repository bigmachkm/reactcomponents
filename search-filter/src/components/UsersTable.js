import React from "react";

function User({ data }) {
  return (
    <table className="table-auto shadow-lg my-2 w-full">
      <thead>
        <tr className="drop-shadow-sm">
          <th className="bg-yellow-700 text-left px-8 py-1 text-white">
            First Name
          </th>
          <th className="bg-yellow-700 text-left px-8 py-1 text-white">
            Last Name
          </th>
          <th className="bg-yellow-700 text-left px-8 py-1 text-white">
            Email
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((i) => (
          <tr key={i.id} className="fade-in">
            <td className="border px-8 py-2">{i.firstname}</td>
            <td className="border px-8 py-2">{i.lastname}</td>
            <td className="border px-8 py-2">{i.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default User;
