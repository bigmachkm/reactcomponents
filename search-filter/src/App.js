import { useState, useEffect } from "react";
import axios from "axios";
import UsersTable from "./components/UsersTable";

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const res = await axios.get("https://api.srecms.co.uk/api/v1/users");
      const results = await res.data.users;
      setUsers(results);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
    setLoading(false);
  }, []);

  if (loading) {
    return <h3>Loading....</h3>;
  }

  // Fine, if this is a basic component, filtering using the method below is fine but its not opitimal
  // Need a third, more efficient and less resource hungry method

  const search = () => {
    return users.filter(
      (item) =>
        item.firstname.toLowerCase().includes(query) ||
        item.lastname.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );
  };

  return (
    <div className="container mx-auto w-full max-w-4xl fade-in">
      <div className="flex flex-col py-10 px-5 border border-gray-100 my-3 rounded shadow-xl">
        <h1 className="text-3xl text-center">Search Filter Component</h1>
        <div className="my-5 mx-auto w-full p-5 bg-purple-600 rounded-xl shadow-xl text-center fade-in">
          <input
            type="text"
            className="w-full max-w-xl p-2 text-lg border outline-none rounded-lg text-gray-500"
            placeholder="Search...."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="w-full fade-in-bottom">
          <UsersTable data={search(users)} />
        </div>
      </div>
    </div>
  );
}

export default App;
