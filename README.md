# NestJS CRUD API

A simple RESTful API built with NestJS for managing todos with full CRUD operations.

## Features

- RESTful API endpoints for Todo management
- Full CRUD operations (Create, Read, Update, Delete)
- Input validation using class-validator
- Data transformation using class-transformer
- In-memory data storage
- Type-safe TypeScript implementation

## Tech Stack

- **Framework**: NestJS 11.x
- **Runtime**: Node.js
- **Language**: TypeScript
- **Validation**: class-validator & class-transformer
- **Testing**: Jest
- **Code Quality**: ESLint & Prettier

## Prerequisites

- Node.js (version 14.x or higher)
- npm or yarn package manager

## Installation

```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start:prod
```

### Debug Mode
```bash
npm run start:debug
```

The server will start on `http://localhost:3000` by default. You can configure the port using the `PORT` environment variable.

## API Endpoints

### Get All Todos
```
GET /todos
```

**Response:**
```json
[
  {
    "title": "Learn NestJS",
    "description": "Complete the NestJS tutorial",
    "completed": false
  }
]
```

### Create a Todo
```
POST /todos
```

**Request Body:**
```json
{
  "title": "Learn NestJS",
  "description": "Complete the NestJS tutorial",
  "completed": false
}
```

**Response:**
```json
[
  {
    "title": "Learn NestJS",
    "description": "Complete the NestJS tutorial",
    "completed": false
  }
]
```

### Get a Single Todo
```
GET /todos/:title
```

**Response:**
```json
{
  "title": "Learn NestJS",
  "description": "Complete the NestJS tutorial",
  "completed": false
}
```

### Update a Todo
```
PATCH /todos/:title
```

**Request Body:**
```json
{
  "title": "Learn NestJS",
  "description": "Complete the advanced NestJS tutorial",
  "completed": true
}
```

**Response:**
```json
{
  "title": "Learn NestJS",
  "description": "Complete the advanced NestJS tutorial",
  "completed": true
}
```

### Delete a Todo
```
DELETE /todos/:title
```

**Response:** 204 No Content

## Project Structure

```
src/
├── todo/
│   ├── DTOs/
│   │   ├── create-todo.dto.ts    # DTO for creating todos
│   │   └── update-todo.dto.ts    # DTO for updating todos
│   ├── todo.controller.ts        # Todo controller with endpoints
│   ├── todo.service.ts           # Business logic for todos
│   ├── todo.module.ts            # Todo module
│   └── todo.*.spec.ts            # Unit tests
├── utils/
│   └── object.utils.ts           # Utility functions
├── app.module.ts                 # Root application module
├── app.controller.ts             # Root controller
├── app.service.ts                # Root service
└── main.ts                       # Application entry point
```

## Testing

### Run Unit Tests
```bash
npm run test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Generate Test Coverage
```bash
npm run test:cov
```

### Run E2E Tests
```bash
npm run test:e2e
```

## Code Quality

### Linting
```bash
npm run lint
```

### Format Code
```bash
npm run format
```

## Data Validation

The API uses class-validator decorators for input validation:

- `title`: Required string
- `description`: Required string for creation, optional for updates
- `completed`: Required boolean for creation, optional for updates

Invalid requests will return a 400 Bad Request response with validation error details.

## Error Handling

The API includes proper error handling:

- **404 Not Found**: When a todo with the specified title doesn't exist
- **400 Bad Request**: When validation fails
- **204 No Content**: Successful deletion

## Development

The application includes:

- Global validation pipes with transformation and whitelist enabled
- Automatic stripping of properties not defined in DTOs
- Type-safe DTO classes
- Utility function for filtering undefined properties during updates

## Notes

- This implementation uses in-memory storage, so data will be lost when the server restarts
- Todos are identified by their `title` field
- For production use, consider integrating a database (e.g., PostgreSQL, MongoDB)

## License

UNLICENSED
