# URL Shortener

A simple URL shortener built with Node.js, Express, and MongoDB using Mongoose. This application allows users to enter a long URL and receive a shortened version, which can be shared easily. It also tracks the number of clicks on each shortened URL.

## Features

- Shorten long URLs
- Redirect to the original URL when the shortened link is accessed
- Track the number of clicks on each shortened URL
- Simple and responsive user interface with Bootstrap
- MongoDB database for storing URLs and click counts

## Technologies Used

- **Node.js**: JavaScript runtime for building the server
- **Express**: Web framework for building the application
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB
- **MongoDB**: NoSQL database for storing URL data
- **EJS**: Templating engine for rendering HTML views
- **Bootstrap**: CSS framework for styling the application

## Getting Started

1. Install dependencies:
                  Copy code
                  npm install
                      
2. Set up the MongoDB connection:
                  Update the connection string in server.js to include your MongoDB credentials.
                      
3. Run the application:
                  npm start
                  
4. Open your browser and visit:
                  http://localhost:5000
                  
### Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account (or local MongoDB installation)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd url-shortener
