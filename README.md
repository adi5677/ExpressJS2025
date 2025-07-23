ExpressJS2025
A simple Express.js project demonstrating routing, controller structure, and EJS view rendering. Ideal for learning how to build modular and maintainable Node.js applications using Express.
🚀 Features
•	Built with Express.js
•	Uses EJS as the view engine
•	Modular routing and controller system
•	URL-encoded body parsing for form handling
•	Clean folder structure for scalability
📁 Project Structure

ExpressJS2025/
├── controller/
│   └── userController.js       # Handles logic for /users route
├── routes/
│   └── userRoutes.js           # Routes for user-related pages
├── views/
│   └── users.ejs               # EJS template for /users
├── loopInNode.js               # Main entry file (Express app)
├── package.json
└── README.md

🛠️ Installation & Setup
### Prerequisites
Node.js (v16 or higher)
npm (Node Package Manager)
### Setup Steps
1.	Clone the repository: git clone https://github.com/adi5677/ExpressJS2025.git
2.	Navigate to the project folder: cd ExpressJS2025
3.	Install dependencies: npm install
4.	Start the server: node loopInNode.js
5.	Open in browser: http://localhost:3200/users
🖼️ Sample View (users.ejs)
Make sure you have this in views/users.ejs:

<!DOCTYPE html>
<html>
<head>
    <title>Users</title>
</head>
<body>
    <h1>Welcome to the Users Page!</h1>
</body>
</html>

🧩 Customize Scripts
Add this to your package.json for easier start commands:

"scripts": {
  "start": "node loopInNode.js",
  "dev": "nodemon loopInNode.js"
}

Run with:
npm run start  # normal
npm run dev    # development with auto-restart
📚 Learning Resources
•	Express Documentation: https://expressjs.com/
•	EJS Docs: https://ejs.co/
•	Node.js Basics: https://nodejs.dev/learn
📄 License
This project is licensed under the MIT License.
