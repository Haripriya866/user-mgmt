import { Component } from "react";
import axios from "axios";
import { Link ,withRouter} from "react-router-dom";

class UserList extends Component {
  state = {
    users: [],
    error: "",
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        this.setState({ error: "Failed to fetch users." });
        console.error(error);
      });
  }

  render() {
    const { users, error } = this.state;
    let {  onDelete } = this.props;

    onDelete = (id) => {
      axios
        .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(() => {
          const filteredUsers = this.state.users.filter(
            (user) => user.id !== id
          );
          this.setState({ users: filteredUsers });
        })
        .catch((error) => {
          this.setState({ error: "Failed to delete user." });
        });
    };

    return (
      <div>
        <h2>User List</h2>
        {error && <div className="error">{error}</div>}
        <Link to="/users">
          <button type='button' className='add-button'>
          Add+
          </button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const fullName = user.name;
              const [firstName, lastName] = fullName.split(" ");
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.address.city}</td>
                  <td>
                  <Link to={`/users/${user.id}`}>
                    <button type='button'>Update</button>
                 </Link>           
                    <button onClick={() => onDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(UserList);
