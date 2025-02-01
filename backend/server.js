const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.options("*", cors());

const port = 5001;

app.get("/users", async (request, response) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    response.json(response.data);
  } catch (error) {
    response.status(500).json({ message: "Error fetching data" });
  }
});

app.post("/users", async (request, response) => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    response.json(response.data);
  } catch (error) {
    response.status(500).json({ message: "Error adding data" });
  }
});

app.put("/users/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const updatedUser = request.body;
    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updatedUser);
    response.json(response.data); // Return updated user data
  } catch (error) {
    response.status(500).json({ message: "Error updating user" });
  }
});

app.delete("/users/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const deletedUser = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    response.json({
      message: "User deleted successfully",
      data: deletedUser.data,
    });
  } catch (err) {
    response.status(500).json({ message: "Error deleting user", error: err });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});

  