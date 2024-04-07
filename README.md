# Spam Detection API

This is a RESTful API for a spam detection system that allows users to register, mark numbers as spam, search for contacts by name or phone number, and retrieve contact details including spam likelihood.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Postman Collection](#postman-collection)
- [License](#license)

## Technologies Used

- Node.js
- Express.js
- Sequelize (ORM)
- SQLite (Database)
- bcrypt (Password hashing)
- JSON Web Tokens (JWT) for authentication

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/spam-detection-api.git
   cd spam-detection-api


2. Install Dependencies
  
  ```npm install```

3. Set up the database:
    - Initialize Sequelize:
     ```npx sequelize-cli init```

    - Run Migrations:
    ```npx sequelize-cli db:migrate```

4. Start the server:
    ```npm start```

5. The API server should now be running on http://localhost:3000.

## Usage

# Register a new user using the registration endpoint.

# Login to obtain an authentication token.
Use the token to access authenticated endpoints such as marking numbers as spam, searching for contacts, and getting contact details.
API Endpoints
- POST /auth/register: Register a new user.
- POST /auth/login: Login to the system.
- POST /contacts/mark-spam: Mark a number as spam.
- GET /search/by-name: Search contacts by name.
- GET /search/by-phone: Search contacts by phone number.
- GET /contacts/:id: Get contact details.


