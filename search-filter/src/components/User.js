import React from "react";

function User({ i }) {
  console.log(i);
  return (
    <>
      {/* <tr key={i.id}>
        <td className="border px-8 py-2">{i.firstname}</td>
        <td className="border px-8 py-2">{i.lastname}</td>
        <td className="border px-8 py-2">{i.email}</td>
      </tr> */}
    </>
  );
}

export default User;
