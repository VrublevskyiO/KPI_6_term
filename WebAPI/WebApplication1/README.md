# API Documentation

This API provides endpoints for managing tasks and users in a calendar service.

## Tasks API

### Endpoints

- `GET /api/tasks` - Get all tasks.
    - Response: 200 OK (Array of task objects).

- `POST /api/tasks` - Add a new task.
    - Request Body: Task object.
    - Response:
        - 201 Created (Added task object).
        - 400 Bad Request (If request body is invalid).

- `PUT /api/tasks/{id}` - Update an existing task.
    - Request Path Parameter: Task ID.
    - Request Body: Updated task object.
    - Response:
        - 200 OK (Updated task object).
        - 404 Not Found (If task with specified ID does not exist).
        - 400 Bad Request (If request body is invalid).

- `DELETE /api/tasks/{id}` - Delete a task.
    - Request Path Parameter: Task ID.
    - Response:
        - 204 No Content.
        - 404 Not Found (If task with specified ID does not exist).

## Users API

### Endpoints

- `GET /api/users` - Get all users.
    - Response: 200 OK (Array of user objects).

- `GET /api/users/{id}` - Get a user by ID.
    - Request Path Parameter: User ID.
    - Response:
        - 200 OK (User object).
        - 404 Not Found (If user with specified ID does not exist).

- `POST /api/users` - Add a new user.
    - Request Body: User object.
    - Response:
        - 201 Created (Added user object).
        - 400 Bad Request (If request body is invalid).

- `PUT /api/users/{id}` - Update an existing user.
    - Request Path Parameter: User ID.
    - Request Body: Updated user object.
    - Response:
        - 200 OK (Updated user object).
        - 404 Not Found (If user with specified ID does not exist).
        - 400 Bad Request (If request body is invalid).

- `DELETE /api/users/{id}` - Delete a user.
    - Request Path Parameter: User ID.
    - Response:
        - 204 No Content.
        - 404 Not Found (If user with specified ID does not exist).
