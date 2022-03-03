import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function User({ data }) {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };
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
          <motion.tr
            key={i.id}
            initial="hidden"
            animate="visible"
            variants={list}
          >
            <motion.td
              variants={item}
              transition={{ duration: 0.9 }}
              className="border px-8 py-2"
            >
              {i.firstname}
            </motion.td>
            <motion.td
              variants={item}
              transition={{ duration: 0.9 }}
              className="border px-8 py-2"
            >
              {i.lastname}
            </motion.td>
            <motion.td
              variants={item}
              transition={{ duration: 0.9 }}
              className="border px-8 py-2"
            >
              {i.email}
            </motion.td>
          </motion.tr>
        ))}
      </tbody>
    </table>
  );
}

export default User;
