# React Weather App

This is a simple weather application built using React. It allows users to check the current weather conditions for a specific location.

## Features

- Display current weather conditions including temperature, humidity, wind speed, etc.
- Search for weather conditions in different locations by city name.
- Responsive design for use on desktop and mobile devices.

## Technologies Used

- React
- [OpenWeatherMap API](https://openweathermap.org/api)
- HTML
- SCSS
-Javascript

## Installation

1. Clone the repository:

    ```
    git clone <https://github.com/sakshiigupta28/weather-app.git>
    ```


2. Install dependencies:

    ```
    npm install
    ```

3. Get an API key from [OpenWeatherMap](https://openweathermap.org/api) and replace `'API_KEY'` in `src/config.js` with your API key.

    ```javascript
    // src/config.js
    const API_KEY = '9950c59379133e8b93f14fbe4d25cce6';
    export default API_KEY;
    ```

4. Start the application:

    ```
    npm start
    ```

5. Open your browser and visit `http://localhost:3000` to view the app.

## Usage

1. Enter the name of the city you want to check the weather for in the search bar.
2. Press Enter or click the search button.
3. The app will display the current weather conditions for the entered city.

## Screenshots

![Screenshot of the React Weather App](src\assets\image.png)

## Credits

This application was created by Sakshi Gupta.

## License

This project is licensed under the [MIT License](LICENSE).
