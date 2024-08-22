import { getUsers, getTodosByUserId } from "../api/getRequests.js";

const isFanCodeCity = (lat, lng) => {
  return lat >= -40 && lat <= 5 && lng >= 5 && lng <= 100;
};

const getFanCodeUsers = async () => {
  const users = await getUsers();
  return users.filter((user) =>
    isFanCodeCity(user.address.geo.lat, user.address.geo.lng)
  );
};

const calculateUserTaskCompletion = async (userId) => {
  const todos = await getTodosByUserId(userId);
  const completedTasks = todos.filter((todo) => todo.completed).length;
  const totalTasks = todos.length;

  return {
    completedTasks,
    totalTasks,
    completionPercentage: ((completedTasks / totalTasks) * 100).toFixed(2),
  };
};

const checkUserTaskCompletion = async () => {
  const fanCodeUsers = await getFanCodeUsers();
  const results = [];

  for (const user of fanCodeUsers) {
    const { completionPercentage } = await calculateUserTaskCompletion(user.id);
    results.push({
      userId: user.id,
      userName: user.name,
      completionPercentage,
      isCompleted: completionPercentage > 50,
    });
  }

  return results;
};

export {
  getFanCodeUsers,
  calculateUserTaskCompletion,
  checkUserTaskCompletion,
  isFanCodeCity,
};
