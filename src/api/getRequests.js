import axios from "axios";
import config from "../../Config/config.js";

const getUsers = async () => {
  try {
    const response = await axios.get(`${config.apiBaseUrl}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const getTodosByUserId = async (userId) => {
  try {
    const response = await axios.get(
      `${config.apiBaseUrl}/todos?userId=${userId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching todos for user ${userId}:`, error);
    throw error;
  }
};

export { getUsers, getTodosByUserId };