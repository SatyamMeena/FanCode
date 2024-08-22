# SDET Assignment - FanCode City Task Completion

## Overview
This project is designed to automate the scenario where all users belonging to the city "FanCode" should have more than 50% of their to-do tasks completed. The city "FanCode" can be identified by geographical coordinates where the latitude is between `-40` to `5` and the longitude is between `5` to `100`.

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Running the Application](#running-the-application)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Project Structure
```bash
FANCODE/
├── src/
│   ├── api/
│   │    └── getRequests.js        # Contains API request functions
│   ├── services/
│   │     └── getMethods.js        # Contains core business logic
│   └── index.js                   # Main application entry point
├── test/
│    └── task_completion.test.js   # Automation Tests for the application
├── config/
│   └── config.js                  # Configuration file (e.g., API base URL)
├── README.md                      # Project documentation
├── package.json                   # Node.js project metadata and dependencies
```

## Prerequisites
Before you begin, ensure you have met the following requirements:
- **Node.js** (v12.x or higher) and **npm** installed on your machine.

## Setup Instructions
Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone 
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Application
To execute the main logic and validate the task completion for users in the FanCode city:
```bash
node src/index.js
```
Upon running, the application will print out the task completion status for each user in the FanCode city.

## Running Tests
The project includes tests to ensure the functionality is working as expected.
```bash
npm test
```

## Configuration
The project configuration, including the base URL for API requests, is managed in the `config/config.js` file:

```javascript
// config/config.js
const config = {
    apiBaseUrl: 'http://jsonplaceholder.typicode.com',
};
export default config;
```
You can modify this file to point to a different API endpoint if necessary.

## Contributing
If you wish to contribute to this project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is open-source and available under the [MIT License](LICENSE).
