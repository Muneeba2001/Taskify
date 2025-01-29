# **Taskify** 🚀  
Taskify is a task management system that allows users to create, update, and manage their tasks efficiently.  

## **Features** 🌟  
### **User Features**  
- User Registration & Login (JWT Authentication)  
- Profile Management  
- Secure Logout  

### **Task Management**  
- Create, Update, and Delete Tasks  
- View All Tasks  
- View a Specific Task by ID  
- Assign Priorities and Due Dates  

## **Tech Stack** 🛠  
### **Frontend**  
- React.js (with Vite)  
- Tailwind CSS  
- Redux Toolkit (State Management)  
- React Router  
- Axios (API Calls)  

### **Backend**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JSON Web Tokens (JWT)  
- bcrypt.js (Password Hashing)  

## **Project Setup** ⚙️  
### **Backend Setup**  
1. Clone the repository:  
   ```sh
   git clone https://github.com/your-username/taskify-backend.git
   cd taskify-backend
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
   
4. Start the server:  
   ```sh
   npm run dev
   ```  

### **Frontend Setup**  
1. Navigate to the frontend directory:  
   ```sh
   cd taskify-frontend
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Start the React app:  
   ```sh
   npm run dev
   ```  

## **API Endpoints** 📌  
### **User Routes**  
- `POST /register` → Register a new user  
- `POST /login` → Login a user  
- `GET /profile` → Get user profile (requires authentication)  
- `GET /logout` → Logout a user (requires authentication)  

### **Task Routes**  
- `POST /create` → Create a new task (requires authentication)  
- `GET /getTask` → Get all tasks created by the user (requires authentication)  
- `GET /getTask/:id` → Get a task by ID (requires authentication)  
- `PUT /updateTask/:id` → Update a task by ID (requires authentication)  
- `DELETE /deleteTask/:id` → Delete a task by ID (requires authentication)  

## **Folder Structure** 📂  
### **Backend**  
```
/taskify-backend
│── /models          # Mongoose Models (User, Task)
│── /routes          # Express Routes (User, Task)
│── /controllers     # Business Logic for API
│── /middlewares     # JWT Authentication Middleware
│── server.js        # Entry Point
│── .env.example     # Environment Variables Example
```

### **Frontend**  
```
/taskify-frontend
│── /src
│   ├── /components  # Reusable UI Components
│   ├── /pages       # Application Pages (Dashboard, Profile, etc.)
│   ├── /store       # Redux Store
│   ├── /api        # Axios API Calls
│── App.js           # Main App Component
│── index.js         # Entry Point
│── .env.example     # Environment Variables Example
```

## **Contributing** 🤝  
1. Fork the repository  
2. Create a new branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m "Add new feature"`)  
4. Push to your branch (`git push origin feature-name`)  
5. Open a pull request  

## **License** 📜  
This project is licensed under the **MIT License**.  