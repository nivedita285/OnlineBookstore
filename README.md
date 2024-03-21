## Online Bookstore

This application provides a platform for users to browse and purchase books online. Additionally, administrators have access to perform CRUD (Create, Read, Update, Delete) operations on books and manage user accounts.

## Features

- User Authentication:
  - Users can register for a new account with email and password.
  - Existing users can log in securely to access the bookstore features.
  - Passwords are stored securely in the database.

- Admin Dashboard:
  - Administrators have access to a dashboard where they can manage books.

- Book Management:
  - Admins can perform CRUD operations on books, including adding new books, updating book details, and deleting books.
  - Each book includes information such as id, title, author, price, language, cover photo, isbn number.

## Technologies Used

- Frontend:
  - React.js: A JavaScript library for building user interfaces.
  - Material-UI: A popular React UI framework for designing responsive and accessible user interfaces.

- Backend (Spring Boot):
  - Java: Programming language for backend development.
  - Spring Boot: Framework for building robust and scalable Java applications.
  - Spring Security: Authentication and authorization framework for securing the application.
  - Spring Data JPA: Simplifies data access and persistence with JPA (Java Persistence API).

- Database:
  - MySQL: database for storing application data.

## Setup Instructions

1. Clone the repository:
  - git clone https://github.com/nivedita285/OnlineBookstore.git
    
2. Navigate to the project directory:
  - cd OnlineBookstore

3. Set up the backend (Spring Boot):
- Open the `java` directory in your preferred IDE (e.g., IntelliJ IDEA, Eclipse).
- Configure the database connection in `application.properties`.
- Run the Spring Boot application.

4. Set up the frontend:
- Navigate to the `reactapp` directory.
- Install dependencies:
  ```
  npm install
  ```
- Start the development server:
  ```
  npm start
  ```

5. Open your web browser and navigate to `http://localhost:3000` to access the application.


