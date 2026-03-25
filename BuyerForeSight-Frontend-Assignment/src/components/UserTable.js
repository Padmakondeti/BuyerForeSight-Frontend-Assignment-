import React from "react"
import { useNavigate } from "react-router-dom"

const UserTable = ({ users, sortField, setSortField, sortOrder, setSortOrder }) => {
  const navigate = useNavigate();

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th onClick={() => handleSort("company")}>Company</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} onClick={() => navigate(`/user/${user.id}`)} style={{ cursor: "pointer" }}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;