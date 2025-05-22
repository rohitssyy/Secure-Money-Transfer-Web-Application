# Paytm Backend

This is the backend part of a Paytm-like payment application. It is built using **Node.js** and **Express**, with **MongoDB** as the database. The backend provides RESTful APIs for user authentication, account management, and money transfers.

## Features

- **User Authentication:** Sign up and sign in using email and password, with JWT-based authentication.
- **Account Management:** Each user has an account with a balance.
- **User Search:** Search for users by name.
- **Money Transfer:** Securely transfer money between user accounts.
- **Middleware:** JWT authentication middleware to protect routes.

## Folder Structure

- `index.js`: Main entry point for the Express server.
- `database.js`: MongoDB connection and models for User and Account.
- `middleware.js`: JWT authentication middleware.
- `routes/`
  - `user.js`: Routes for user signup, signin, update, and search.
  - `account.js`: Routes for account-related operations (e.g., transfer money).
- `.env`: Environment variables (database URL, JWT secret).
- `package.json`: Project dependencies and scripts.

## Installation

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd paytm/Backend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   DATABASE_URL="your-mongodb-connection-string"
   JWT_SECRET="your-secret-key"
   ```

4. **Start the server:**

   ```sh
   node index.js
   ```
