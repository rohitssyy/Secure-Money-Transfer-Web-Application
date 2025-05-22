# Paytm Frontend

This is the frontend part of a Paytm-like payment application, built using **React**, **Vite**, and **Tailwind CSS**. It provides a user-friendly interface for user authentication, viewing account balance, searching users, and transferring money between accounts.

## Features

- **User Authentication:** Sign up and sign in with email and password.
- **Dashboard:** View your current account balance and search for other users.
- **Send Money:** Transfer money to other users securely.
- **Responsive UI:** Built with Tailwind CSS for a modern and responsive design.

## Folder Structure

- `components/`: Reusable UI components (AppBar, Balance, Button, Input, etc.)
- `src/pages/`: Main pages (Dashboard, Signin, Signup, Sendmoney)
- `src/App.jsx`: Main app routing and layout
- `src/main.jsx`: Entry point for React
- `index.html`: Main HTML file
- `vite.config.js`: Vite configuration with React and Tailwind plugins

## Installation

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd paytm/frontend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**

   ```sh
   npm run dev
   ```

   The app will be available at http://localhost:5173 by default.

Usage
Sign Up: Create a new account with your email, first name, last name, and password.

Sign In: Log in with your registered email and password.

Dashboard: View your balance and search for users to send money.
Send Money: Select a user and transfer funds.

Note: The frontend expects the backend server to be running at http://localhost:3001. Make sure to start the backend before using the frontend.
