# Taskify Backend

Taskify is a task management application enabling users to create, assign, and track tasks efficiently.

## Project Structure

### API Endpoints
#### User Routes
- ``` POST /register ``` - Register a new user
- ` POST /login ``` - Login a user
- ``` GET /profile ``` - Get user profile (requires authentication)
- ``` GET /logout ``` - Logout a user (requires authentication)
#### Task Routes
- ``` POST /create ``` - Create a new task (requires authentication)
- ``` GET /getTask ``` - Get all tasks created by the user (requires authentication)
- ``` GET /getTask/:id ``` - Get a task by ID (requires authentication)
- ``` PUT /updateTask/:id ``` - Update a task by ID (requires authentication)
- ``` DELETE /deleteTask/:id ``` - Delete a task by ID (requires authentication)
#### Technologies Used
- Node.js
- Express.js