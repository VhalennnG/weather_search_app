# Weather Search App

<p align="center">
  <img src="public/ss.png" alt="Screenshot" />
  <br />
  <br />
  <a href="https://weather-search-app-amber.vercel.app/" style="font-size: 40px; font-weight: bold;">View Demo</a>
  <br />
</p>

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Development Environment Setup](#development-environment-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setting up .env](#setting-up-env)
  - [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Learn More](#learn-more)
- [Deployment](#deployment)

## Introduction

The **Weather Search App** is a React-based application that allows users to search for the weather in any city. It fetches real-time data from the OpenWeatherMap API and displays the current weather, temperature, and other relevant information.

## Features

- Search for weather by city.
- Real-time data fetching from OpenWeatherMap API.
- Responsive design for all device sizes.

## Development Environment Setup

### Prerequisites

Before setting up the application, ensure you have the following installed on your machine:

1. **Node.js and npm**: Download and install Node.js from the [official website](https://nodejs.org/). This will also install npm, which is the Node.js package manager.

   - To verify the installation, run the following commands in your terminal:
     ```bash
     node -v
     npm -v
     ```

2. **Git**: Ensure you have Git installed to clone the repository. You can download Git from [here](https://git-scm.com/downloads).
   - To verify the installation, run:
     ```bash
     git --version
     ```

### Installation

Follow these steps to set up the project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VhalennnG/weather_search_app.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd weather_search_app
   ```
3. **Install project dependencies**:
   ```bash
   npm install
   ```
   This command installs all the required packages listed in the `package.json` file.

### Setting up .env

After installing the dependencies, you need to set up a `.env` file to store sensitive information like your API key for OpenWeatherMap.

1.  **Create a `.env` file** in the root of your project:
    ```bash
    touch .env
    ```
2.  **Add your API Key** to the `.env` file: Inside the `.env` file, add the following line:
    ```bash
    REACT_APP_API_KEY=your_api_key_here
    ```
    Make sure to replace `your_api_key_here` with your actual API key from OpenWeatherMap.
3.  Save the `.env` file.

## Running the Application

Start the development server:

```bash
npm run dev
```

This will start a local development server. Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

## Testing

Run the following command to launch the test runner in interactive mode:

```bash
npm run test
```

## Troubleshooting

- **API Key issues**: Make sure your API key is valid and correctly set in the `.env` file. If the key is invalid, you may see errors related to authorization (401 Unauthorized).
- **CORS Issues**: If you're getting CORS-related errors, it may be due to restrictions from the API provider.

## Available Scripts

In the project directory, you can run the following scripts:

- **Install project dependencies**:
  ```bash
  npm install
  ```
  Installs the project dependencies. Run this after cloning the project or whenever dependencies are updated.
- **Run the app in development mode**:
  ```bash
  npm run dev
  ```
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.
- **Launch the test runner**:
  ```bash
  npm run test
  ```
  Launches the test runner in interactive watch mode. Refer to the Create React App documentation for more information.
- **Build the app for production**:
  ```bash
  npm run build
  ```
  Builds the app for production to the `build` folder. It bundles the app in production mode and optimizes the build for better performance.
- **Eject the app**:
  ```bash
  npm run eject
  ```
  This is a one-way operation. Once you eject, you cannot go back. This command copies all the configuration files and dependencies (Webpack, Babel, etc.) into the project so you can have full control over them.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

## Deployment

To deploy this app to a hosting service like Vercel, follow these steps:

1.  **Build the project**:
    ```bash
    npm run build
    ```
2.  **Deploy to Vercel**: Follow the Vercel Deployment Guide to deploy your project. Ensure your `.env` variables are set correctly in the Vercel dashboard for production.
