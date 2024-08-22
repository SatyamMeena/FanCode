import { checkUserTaskCompletion } from "./utils/getMethods.js";

const run = async () => {
  try {
    const results = await checkUserTaskCompletion();
    results.forEach((result) => {
      console.log(
        `User: ${result.userName} - Completion: ${
          result.completionPercentage
        }% - Status: ${result.isCompleted ? "PASS" : "FAIL"}`
      );
    });
  } catch (error) {
    console.error("Error:", error);
  }
};

run();
