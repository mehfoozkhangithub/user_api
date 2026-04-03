
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_api} from "../Redux/actionType";

export const ApiData = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.users);

  const [typeFilter, setTypeFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    dispatch(get_api());
  }, [dispatch]);


  const processedData = data
    .filter((user) => {
      if (!typeFilter) return true;
      return user.type === typeFilter;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.id - b.id;
      if (sortOrder === "desc") return b.id - a.id;
      return 0;
    });

  return (
    <div style={{ padding: "20px" }}>
      <h2>GitHub Users Table</h2>

  
      <div style={{ marginBottom: "15px" }}>
        <select onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="">All Types</option>
          <option value="User">User</option>
          <option value="Organization">Organization</option>
        </select>

        <select
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ marginLeft: "10px" }}
        >
          <option value="">Sort by ID</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>


      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0" width="100%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Type</th>
              <th>Profile</th>
            </tr>
          </thead>

          <tbody>
            {processedData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.login}</td>
                <td>{user.type}</td>
                <td>
                  <a href={user.html_url} target="_blank" >
                    View Profile
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

