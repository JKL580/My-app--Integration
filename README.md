# 📝 MERN Stack Blog Application

A full-stack blog application built with MongoDB, Express.js, React.js, and Node.js. This project demonstrates seamless integration between front-end and back-end components with complete CRUD operations.

## 🚀 Features

- **CRUD Operations**: Create, read, update, and delete blog posts
- **Category Management**: Organize posts by categories
- **Responsive Design**: Clean and modern UI
- **Form Validation**: Client and server-side validation
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **MongoDB Atlas**: Cloud database integration
- **RESTful API**: Well-structured API endpoints
- **React Router**: Smooth navigation between pages
- **Custom Hooks**: Reusable React hooks for data fetching

## 🛠️ Tech Stack

### Frontend
- React.js - UI library
- React Router DOM - Client-side routing
- Axios - HTTP client
- Vite - Build tool

### Backend
- Node.js - Runtime environment
- Express.js - Web framework
- MongoDB - NoSQL database
- Mongoose - MongoDB ODM
- CORS - Cross-origin resource sharing

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- MongoDB Atlas account
- Git

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/JKL580/My-app--Integration.git
cd My-app--Integration
```

### 2. Server Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/mern-blog?retryWrites=true&w=majority
NODE_ENV=development
```

**Note:** Replace with your actual MongoDB Atlas credentials.

### 3. Client Setup
```bash
cd client
npm install
```

### 4. Start the Application

**Terminal 1 - Start Server:**
```bash
cd server
npm start
```

Expected output:
```
✅ MongoDB Atlas connected successfully
🚀 Server running on http://localhost:5000
```

**Terminal 2 - Start Client:**
```bash
cd client
npm run dev
```

Expected output:
```
VITE ready in XXX ms
➜ Local: http://localhost:5173/
```

### 5. Access the Application

Open your browser: `http://localhost:5173`

## 📁 Project Structure
```
mern-blog/
├── server/
│   ├── models/
│   │   ├── Post.js              # Post schema
│   │   └── Category.js          # Category schema
│   ├── routes/
│   │   ├── posts.js             # Post routes
│   │   └── categories.js        # Category routes
│   ├── .env                     # Environment variables
│   ├── server.js                # Express server
│   └── package.json
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── PostCard.jsx     # Post card component
│   │   ├── hooks/
│   │   │   ├── usePosts.js      # Posts hook
│   │   │   └── useCategories.js # Categories hook
│   │   ├── pages/
│   │   │   ├── PostList.jsx     # Home page
│   │   │   ├── PostForm.jsx     # Create/Edit form
│   │   │   └── PostDetail.jsx   # Post detail
│   │   ├── services/
│   │   │   └── api.js           # API service
│   │   ├── App.jsx              # Main component
│   │   ├── main.jsx             # Entry point
│   │   └── index.css            # Global styles
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

## 🌐 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Posts Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Get all posts |
| GET | `/posts/:id` | Get single post |
| POST | `/posts` | Create new post |
| PUT | `/posts/:id` | Update post |
| DELETE | `/posts/:id` | Delete post |

### Categories Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/categories` | Get all categories |
| GET | `/categories/:id` | Get single category |
| POST | `/categories` | Create category |
| PUT | `/categories/:id` | Update category |
| DELETE | `/categories/:id` | Delete category |

### Example API Request

**Create Post (POST /api/posts)**

Request Body:
```json
{
  "title": "My First Blog Post",
  "content": "This is the content of my blog post...",
  "author": "John Doe",
  "category": "60d5ec49f1b2c72b8c8e4f1a",
  "status": "published"
}
```

Response:
```json
{
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
```

## 🧪 Testing the Application

### Manual Testing Steps

1. **Create a Post**
   - Click "New Post" button
   - Fill in title, content, and author
   - Click "Create Post"
   - Verify post appears on home page

2. **View Post**
   - Click on any post title
   - Verify all details are displayed

3. **Edit Post**
   - Click "Edit" button
   - Modify content
   - Click "Update Post"
   - Verify changes are saved

4. **Delete Post**
   - Click "Delete" button
   - Confirm deletion
   - Verify post is removed

## 🐛 Common Issues & Solutions

### Cannot connect to MongoDB
**Solution:**
- Check MongoDB Atlas connection string
- Whitelist your IP address in MongoDB Atlas
- Verify username and password

### Port already in use
**Solution:**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

### CORS errors
**Solution:**
- Ensure server is running on port 5000
- Check CORS configuration in server.js
- Verify proxy settings in vite.config.js

## 📝 Available Scripts

### Server
```bash
npm start        # Start server
npm run dev      # Start with nodemon
```

### Client
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🔒 Environment Variables

### Server (.env)
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

**Important:** Never commit `.env` files to GitHub

## 🚀 Deployment

### Backend (Render/Heroku)
1. Create account on Render/Heroku
2. Connect GitHub repository
3. Add environment variables
4. Deploy

### Frontend (Vercel/Netlify)
1. Create account on Vercel/Netlify
2. Connect GitHub repository
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Add environment variable: `VITE_API_URL`
6. Deploy

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Joachim Lagat**
- GitHub: [@JKL580](https://github.com/JKL580)
- Repository: [My-app--Integration](https://github.com/JKL580/My-app--Integration)

## 🙏 Acknowledgments

- MongoDB Atlas for database hosting
- Vite for the build tool
- React Router for navigation
- Express.js community

## 📞 Support

For issues or questions:
1. Check [Common Issues](#-common-issues--solutions)
2. Open an issue on GitHub
3. Contact the repository maintainer

---

⭐ If you found this project helpful, please give it a star!

Made with ❤️ using the MERN Stack
