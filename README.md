# Secure Money Transfer Web Application (Paytm Clone)

This project is a full-stack web application inspired by Paytm, designed to securely handle user authentication, account management, and peer-to-peer money transfers. It demonstrates a modern approach to building scalable and secure financial web apps using popular technologies.

---

## Project Overview

The application allows users to:

- **Sign up and sign in** with email and password.
- **View their account balance** after logging in.
- **Search for other users** by name or email.
- **Transfer money** securely to other registered users.

The system is split into two main parts: **Frontend** and **Backend**, each with a clear separation of concerns and responsibilities.

---

## Tech Stack

### Frontend

- **React**: For building interactive user interfaces with reusable components.
- **Vite**: For fast development and optimized builds.
- **Tailwind CSS**: For utility-first, responsive, and modern styling.
- **React Router**: For client-side routing and navigation.
- **Axios**: For making HTTP requests to the backend API.

**Key Features:**

- Modular component structure (`components/` folder) for UI elements like buttons, input fields, navigation bar, and user lists.
- Pages for authentication (`Signin`, `Signup`), dashboard (showing balance and users), and sending money.
- State management using React hooks.
- Responsive and clean UI using Tailwind CSS.

---

### Backend

- **Node.js** & **Express**: For building RESTful APIs and handling HTTP requests.
- **MongoDB** (via **Mongoose**): For storing user data and account balances.
- **JWT (JSON Web Tokens)**: For secure authentication and route protection.
- **Zod**: For validating incoming request data.
- **dotenv**: For managing environment variables securely.
- **CORS**: For enabling cross-origin requests from the frontend.

**Key Features:**

- User authentication (signup/signin) with JWT-based session management.
- Account creation and balance management for each user.
- Secure money transfer between users, with transaction validation and atomicity using MongoDB sessions.
- Middleware for authentication and input validation.
- Modular routing (`routes/user.js`, `routes/account.js`) for clean API structure.

---

## Architecture

- **Frontend** communicates with the **Backend** via RESTful API endpoints (e.g., `/api/signup`, `/api/signin`, `/api/account/transfer`).
- **Backend** handles all business logic, data validation, and database operations.
- **MongoDB** stores user credentials, account information, and balances.
- **JWT** tokens are used to protect sensitive routes and ensure only authenticated users can access or modify their data.

---

## Security & Best Practices

- Passwords and sensitive data are handled securely.
- JWT tokens are used for stateless authentication.
- Input validation is enforced using Zod schemas.
- Database operations for money transfers are wrapped in transactions to ensure atomicity and consistency.

---

## Summary

This project is a practical demonstration of building a secure, scalable, and user-friendly money transfer web application using a modern JavaScript stack. It is suitable for learning full-stack development, authentication, REST API design, and secure transaction handling.

## Preview

![PREVIEW](<./Secure-Money-Transfer-Web-Application//prevSnapShots/Screenshot%20(334).png>)
![PREVIEW](<./Secure-Money-Transfer-Web-Application//prevSnapShots/Screenshot%20(335).png>)
![PREVIEW](<./Secure-Money-Transfer-Web-Application//prevSnapShots/Screenshot%20(336).png>)
![PREVIEW](<./Secure-Money-Transfer-Web-Application//prevSnapShots/Screenshot%20(337).png>)
