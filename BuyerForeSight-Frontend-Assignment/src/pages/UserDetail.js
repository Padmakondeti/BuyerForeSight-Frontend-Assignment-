import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchUsers } from "../services/api"

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsers().then((data) => {
      const selectedUser = data.find((u) => u.id === parseInt(id));
      setUser(selectedUser);
    });
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Phone:</b> {user.phone}</p>
      <p><b>Website:</b> {user.website}</p>

      <h3>Company</h3>
      <p>{user.company.name}</p>

      <h3>Address</h3>
      <p>
        {user.address.street}, {user.address.city}
      </p>
    </div>
  );
};

export default UserDetail;