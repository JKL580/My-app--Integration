📝 MERN Stack Blog Application
A full-stack blog application built with MongoDB, Express.js, React.js, and Node.js. This project demonstrates seamless integration between front-end and back-end components, including database operations, API communication, and state management.
🚀 Features

CRUD Operations: Create, Read, Update, and Delete blog posts
Category Management: Organize posts by categories
Responsive Design: Clean and modern UI that works on all devices
Form Validation: Input validation on both client and server side
Error Handling: Comprehensive error handling with user-friendly messages
MongoDB Atlas: Cloud database integration
RESTful API: Well-structured API endpoints
React Router: Smooth navigation between pages
Custom Hooks: Reusable React hooks for data fetching
Real-time Updates: Optimistic UI updates for better user experience

🛠️ Tech Stack
Frontend

React.js - UI library
React Router DOM - Client-side routing
Axios - HTTP client for API calls
Vite - Build tool and development server

Backend

Node.js - Runtime environment
Express.js - Web application framework
MongoDB - NoSQL database
Mongoose - MongoDB object modeling
CORS - Cross-origin resource sharing
dotenv - Environment variable management

📋 Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v18 or higher)
npm (comes with Node.js)
MongoDB Atlas account (or local MongoDB installation)
Git

🔧 Installation & Setup
1. Clone the Repository
bashgit clone <your-repository-url>
cd mern-blog
2. Server Setup
bashcd server
npm install
Create a .env file in the server directory:
envPORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/mern-blog?retryWrites=true&w=majority
Important: Replace the MongoDB URI with your actual credentials from MongoDB Atlas.
3. Client Setup
bashcd client
npm install
(Optional) Create a .env file in the client directory:
envVITE_API_URL=http://localhost:5000/api
4. Start the Application
Open two terminal windows:
Terminal 1 - Start the server:
bashcd server
npm start
You should see:
✅ MongoDB Atlas connected successfully
🚀 Server is running on http://localhost:5000
Terminal 2 - Start the client:
bashcd client
npm run dev
You should see:
VITE ready in XXX ms
➜ Local: http://localhost:5173/
5. Access the Application
Open your browser and navigate to: http://localhost:5173
📁 Project Structure
mern-blog/
├── server/
│   ├── models/
│   │   ├── Post.js          # Post schema
│   │   └── Category.js      # Category schema
│   ├── routes/
│   │   ├── posts.js         # Post routes
│   │   └── categories.js    # Category routes
│   ├── .env                 # Environment variables
│   ├── server.js            # Express server setup
│   └── package.json
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── PostCard.jsx      # Post card component
│   │   ├── hooks/
│   │   │   ├── usePosts.js       # Custom hook for posts
│   │   │   └── useCategories.js  # Custom hook for categories
│   │   ├── pages/
│   │   │   ├── PostList.jsx      # Home page with post list
│   │   │   ├── PostForm.jsx      # Create/Edit post form
│   │   │   └── PostDetail.jsx    # Single post view
│   │   ├── services/
│   │   │   └── api.js            # API service layer
│   │   ├── App.jsx               # Main app component
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Global styles
│   ├── vite.config.js
│   └── package.json
│
└── README.md
🌐 API Documentation
Base URL
http://localhost:5000/api
Posts Endpoints
MethodEndpointDescriptionGET/postsGet all posts (supports pagination & search)GET/posts/:idGet a single post by IDPOST/postsCreate a new postPUT/posts/:idUpdate a post by IDDELETE/posts/:idDelete a post by ID
Categories Endpoints
MethodEndpointDescriptionGET/categoriesGet all categoriesGET/categories/:idGet a single category by IDPOST/categoriesCreate a new categoryPUT/categories/:idUpdate a category by IDDELETE/categories/:idDelete a category by ID
Request/Response Examples
Create a Post (POST /posts)
Request Body:
json{
  "title": "My First Blog Post",
  "content": "This is the content of my blog post...",
  "author": "John Doe",
  "category": "60d5ec49f1b2c72b8c8e4f1a",
  "status": "published"
}
Response:
json{
  "_id": "60d5ec49f1b2c72b8c8e4f1b",
  "title": "My First Blog Post",
  "content": "This is the content of my blog post...",
  "author": "John Doe",
  "category": {
    "_id": "60d5ec49f1b2c72b8c8e4f1a",
    "name": "Technology"
  },
  "status": "published",
  "createdAt": "2024-11-21T10:30:00.000Z",
  "updatedAt": "2024-11-21T10:30:00.000Z"
}
📸 Screenshots
Home Page
Show Image
List of all blog posts with create, edit, and delete options
Create Post
Show Image
Form to create a new blog post with validation
Post Detail
Show Image
Detailed view of a single blog post
✨ Key Features Explained
1. Form Validation

Client-side validation for immediate feedback
Server-side validation for security
User-friendly error messages

2. State Management

Custom React hooks for data fetching
Optimistic UI updates
Loading and error states

3. Responsive Design

Mobile-first approach
Clean and modern UI
Consistent styling

4. Error Handling

Try-catch blocks in all async operations
User-friendly error messages
Graceful fallbacks

🧪 Testing the Application
Manual Testing Steps

Create a Post

Click "New Post" button
Fill in all required fields
Click "Create Post"
Verify post appears on home page


View Post Details

Click on a post title
Verify all details are displayed correctly


Edit a Post

Click "Edit" button on any post
Modify the content
Click "Update Post"
Verify changes are saved


Delete a Post

Click "Delete" button
Confirm deletion
Verify post is removed


Create Categories

Use API tool (Postman/Thunder Client) to create categories
Assign categories when creating posts



🐛 Common Issues & Solutions
Issue: Cannot connect to MongoDB
Solution:

Check your MongoDB Atlas connection string
Ensure your IP address is whitelisted in MongoDB Atlas
Verify username and password are correct

Issue: CORS errors
Solution:

Ensure the server CORS configuration includes your client URL
Check that both servers are running

Issue: Port already in use
Solution:
bash# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
🔒 Environment Variables
Server (.env)
envPORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
Client (.env) - Optional
envVITE_API_URL=http://localhost:5000/api
📝 Available Scripts
Server
bashnpm start          # Start the server
npm run dev        # Start with nodemon (auto-restart)
Client
bashnpm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
🚀 Deployment
Deploy Backend (Heroku example)
bashcd server
heroku create your-app-name
git push heroku main
heroku config:set MONGODB_URI=your_mongodb_uri
Deploy Frontend (Vercel example)
bashcd client
vercel --prod
Remember to update the API URL in the client to point to your deployed backend.
🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a new branch (git checkout -b feature/YourFeature)
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature/YourFeature)
Open a Pull Request

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
👨‍💻 Author
Your Name

GitHub: @yourusername
Email: your.email@example.com

🙏 Acknowledgments

MongoDB Atlas for database hosting
Vite for the amazing build tool
React Router for navigation
Express.js community

📞 Support
If you have any questions or run into issues, please:

Check the Common Issues section
Open an issue on GitHub
Contact the author


⭐ If you found this project helpful, please give it a star!
Made with ❤️ using the MERN Stack
