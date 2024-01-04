## Customers and Contacts Management

## Introduction
This app is a web-based application built using MySQL, Node.js, and Angular.
Customers and Contacts Management is a web application that allows users to manage their customers and contacts. The user can sign up, log in, and then add, edit, delete, and search for customer or contact details. The site is responsive, meaning it can be used on different devices, such as desktops, tablets, and smartphones.

## Features

    User registration and authentication: Users can sign up for an account, log in, and log out. There is also an option for users to log in with their Google account.  which helps to keep customer data secure.
    User interface: The site has a top navbar and sidebar that makes it easy for users to navigate the site.
    Customer and contact management: Users can add, edit, and delete customer and contact details. They can also search for specific customers or contacts.
    Multiple display options: Users can choose how they want to view their customers or contacts, such as with tables, folders, or cards.
    Database: The site uses a database to store and manage all user, customer, and contact details.

## getStarted

To install the app, follow these steps:
Clone the repository to your local machine.
Install XAMPP or WAMP and start the services for Apache and MySQL.
Navigate to the cms-backend folder and run npm install to install the required dependencies.
Create a new file named .env in the Angular-MyProject/backend folder and add the following environment variables:
makefileCopy code
DB_HOST=localhost DB_USER=your-mysql-username DB_PASSWORD=your-mysql-password DB_NAME=cms JWT_SECRET=your-jwt-secret 
Replace your-mysql-username and your-mysql-password with your MySQL credentials, and replace your-jwt-secret with a secret string of your choice.
Run the command node models.js in the cms-backend folder to create the necessary database tables.
Run the command npm start in the Angular-MyProject/backend folder to start the server.
Navigate to the Angular-MyProject/frontend folder and run npm install to install the required dependencies.
Run the command ng serve in the Angular-MyProject/frontend folder to start the application.
Open your web browser and navigate to http://localhost:4200 to use the app.


## License

This project is licensed under the MIT License.

## Usage
To use the site, follow these steps:
    Sign up for an account, or log in with your existing account or Google account.
    Once you're logged in, you can add, edit, and delete customer and contact details.
    You can also search for specific customers or contacts using the search bar.
    To change how the customer or contact list is displayed, click on the display options button and choose your preferred view.
    To log out, click on the logout button.

## Technologies Used

    Angular and Node.js: These are the core technologies used to build the site.
    Scss: A preprocessor scripting language that adds functionality to CSS and used for styling.
    W3Schools: A front-end framework that helps with site responsiveness and styling.
    Icons: Icons were used to enhance the visual design of the site.
    Database: The site uses a database to store and manage all user, customer, and contact details.
    The backend of the application is built with Node.js and uses the MySQL database to store customer data.
The frontend of the application is built with Angular and provides an intuitive user interface for managing customers and contacts data.
In order to get the data structure of the website content, download the "project-data.sql" file to your computer and import it to your data storage location.

## Contributing

If you would like to contribute to the project, feel free to fork the repository and make your changes. Once you're done, create a pull request and I will review your changes.


## author
build by Sara Grazi 2023