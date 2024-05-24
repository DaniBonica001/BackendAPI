# Event Management System API

This project is an Event Management System API built with Node.js and Express.js, featuring user authentication with Firebase Auth, email notifications with Nodemailer, and containerized deployment using Docker.

## Technologies

- **Node.js**: JavaScript runtime used for building the backend.
- **Express.js**: Web framework for Node.js to create robust APIs.
- **Firebase Auth**: Authentication service for user registration and login.
- **Nodemailer**: Library to send emails from Node.js applications.
- **PostgreSQL**: Relational database management system.
- **Docker**: Platform for developing, shipping, and running applications in containers.

### Why These Technologies?

**Express.js** was chosen for its simplicity and flexibility in creating RESTful APIs. It allows for easy integration with middleware and other modules, making it a popular choice for building scalable server-side applications.

**Firebase Auth** provides secure and easy-to-implement authentication, handling user registration, login, and password management out of the box.

**Nodemailer** is a reliable solution for sending emails from Node.js applications, essential for notifications and user communication.

**Docker** enables consistent deployment across different environments, simplifying the deployment process and ensuring that the application runs smoothly in production.

## Database Diagram

### Swagger Enpoint
   - **URL**: `/swagger`
   - **Description**: Swagger to test the endpoints.
![image](https://github.com/DaniBonica001/BackendAPI/assets/72984897/03e7680e-6f12-4025-804e-6add30ae6b7d)



## Database Diagram

<img width="801" alt="image" src="https://github.com/DaniBonica001/BackendAPI/assets/72984897/3f7bf686-836f-469f-869e-034572b24ce5">


## Evidence

### Users in Firebase

<img width="1440" alt="image" src="https://github.com/DaniBonica001/BackendAPI/assets/72984897/67dc0971-fb45-4003-bfee-d8f0e1bdc6f5">


### Database

<img width="467" alt="image" src="https://github.com/DaniBonica001/BackendAPI/assets/72984897/a1b41796-ddd5-430f-a183-b833d3a11f23">

## Deployment
In opting to dockerize the application, I aimed to streamline the deployment process and enhance portability across various environments. By encapsulating the application and its dependencies within Docker containers, we ensure consistency in development, testing, and production environments. Dockerization facilitates easier scaling, simplifies dependency management, and minimizes compatibility issues, ultimately fostering a more efficient and reliable deployment workflow.
```bash
cd Deploy/
chmod +x deploy.sh
./deploy.sh
```




