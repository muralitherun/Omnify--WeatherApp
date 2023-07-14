# Omnify-Weather-App
It is a Web Application that fetches the current weather conditions, temperature, and humidity of the city which the user provides as an input.

## Features

- Users can enter a city name to get weather information.
- The application displays the current weather condition, temperature, and humidity for the selected location.
- Responsive user interface that works on both desktop and mobile devices.

## Technologies Used

- Frontend: React
- Backend: Node.js, Express
- API: OpenWeatherMap

## Getting Started

### Prerequisites

- Node.js (https://nodejs.org)
- npm (comes with Node.js)

### Installation

1. Download the repository as a Zip folder.

2. Extract the files.

3. Open VS Code or any other code editor of your preference and open the terminal/ command prompt and change to the project's directory.

4. Navigate to the project directory and then do the following:

   Install dependencies for the frontend and backend:

      - cd frontend
      - npm install
      - cd ../backend
      - npm install

5. Configure the OpenWeatherMap API:

   - Sign up for an API key at https://openweathermap.org/.

6. Create a .env file in the backend directory.

   Add the following line to the .env file, replacing YOUR_API_KEY with your actual API key:
     - API_KEY=YOUR_API_KEY

7. How to run?

   # Start the backend server:

      - cd backend
      - npm start

   The server will start running on http://localhost:5000.
 
   # Start the frontend development server:

      - cd frontend
      - npm start

   The application will open in your default browser at http://localhost:3000.

8. Open the browser where the frontend is running and witness the app give the apt output.

