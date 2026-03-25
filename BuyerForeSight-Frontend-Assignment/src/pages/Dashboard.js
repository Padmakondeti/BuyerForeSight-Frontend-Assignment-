import React, { useEffect, useState } from "react"
import { fetchUsers } from "../services/api"
import UserTable from "../components/UserTable"
import SearchBar from "../components/SearchBar"

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const filteredUsers = users
    .filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      let valA = sortField === "company" ? a.company.name : a[sortField];
      let valB = sortField === "company" ? b.company.name : b[sortField];

      if (valA < valB) return sortOrder === "asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  return (
    <div>
      <h2>User Directory</h2>
      <SearchBar search={search} setSearch={setSearch} />
      <UserTable
        users={filteredUsers}
        sortField={sortField}
        setSortField={setSortField}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </div>
  );
};

export default Dashboard;