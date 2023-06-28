# SelfImprovementStoreFrontEnd

Welcome to the SelfHelp Webstore! This is an Angular project that aims to provide a platform for selling self-improvement books, t-shirts, workout equipment, and more.

## Features

- Browse and search for self-improvement books, t-shirts, workout equipment, and other products.
- Add products to the shopping cart and proceed to checkout.
- Authentication and user management for registered users.
- Integration with a GraphQL API for retrieving product data and performing transactions.
- Responsive design with the help of Angular Material and Tailwind CSS.

## Technologies Used

- Angular: A powerful JavaScript framework for building web applications.
- Angular Material: A UI component library for Angular that follows the Material Design guidelines.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
- Axios: A lightweight HTTP client library for making HTTP requests from the Angular application.
- GraphQL: A query language for APIs, used to fetch and manipulate data efficiently.

## Installation and Setup

1. Clone the repository:

   ```
   git clone https://github.com/Mapacherama/SelfImprovementStoreFrontEnd.git
   ```

2. Install the dependencies:
 ``` npm install ```

3. Configure the GraphQL API:
- Update the GraphQL API endpoint in the graphql-config.json file.

4. Start the development server:

    ``` ng serve ```

# Project Structure

- ```src/app/components```: Contains the Angular components responsible for rendering different sections of the webstore.
- ```src/app/services```: Contains Angular services for interacting with the GraphQL API, handling authentication, managing the shopping cart, etc.
- ```src/app/models```: Contains TypeScript interfaces and models for representing the data structures used in the application.
- ```src/assets```: Contains static assets such as images and stylesheets.

# Contributing

Contributions are welcome! If you find any issues or have ideas for improvements, please open an issue or submit a pull request.

# License
This project is licensed under the MIT License.


