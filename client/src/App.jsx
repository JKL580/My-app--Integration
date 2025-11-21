import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PostList from './pages/PostList';
import PostForm from './pages/PostForm';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <BrowserRouter>
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f3f4f6'
      }}>
        {/* Navigation Header */}
        <nav style={{
          backgroundColor: '#1f2937',
          color: 'white',
          padding: '20px',
          marginBottom: '30px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Link 
              to="/" 
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '24px',
                fontWeight: 'bold'
              }}
            >
              📝 MERN Blog
            </Link>
            
            <div style={{ display: 'flex', gap: '20px' }}>
              <Link 
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#374151'}
                onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Home
              </Link>
              <Link 
                to="/create"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  backgroundColor: '#10b981',
                  borderRadius: '4px',
                  fontWeight: 'bold'
                }}
              >
                + New Post
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px 40px'
        }}>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create" element={<PostForm />} />
            <Route path="/edit/:id" element={<PostForm />} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer style={{
          backgroundColor: '#1f2937',
          color: 'white',
          textAlign: 'center',
          padding: '20px',
          marginTop: '40px'
        }}>
          <p style={{ margin: 0 }}>
            © 2024 MERN Blog Application | Built with MongoDB, Express, React & Node.js
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;