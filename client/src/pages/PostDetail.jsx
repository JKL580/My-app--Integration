import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getPost, deletePost } from '../services/api';

function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadPost();
  }, [id]);

  const loadPost = async () => {
    try {
      setLoading(true);
      const response = await getPost(id);
      setPost(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost(id);
        alert('Post deleted successfully');
        navigate('/');
      } catch (err) {
        alert('Error deleting post: ' + err.message);
      }
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Loading post...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', color: '#ef4444' }}>
        <h2>Error: {error}</h2>
        <Link 
          to="/"
          style={{
            display: 'inline-block',
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#2563eb',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px'
          }}
        >
          Back to Home
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Post not found</h2>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Link 
        to="/"
        style={{
          display: 'inline-block',
          marginBottom: '20px',
          color: '#2563eb',
          textDecoration: 'none',
          fontSize: '16px'
        }}
      >
        ← Back to Posts
      </Link>

      <article style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {post.image && (
          <img 
            src={post.image} 
            alt={post.title}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '30px'
            }}
          />
        )}

        <h1 style={{ marginTop: 0, fontSize: '2.5rem', color: '#1f2937' }}>
          {post.title}
        </h1>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '20px',
          borderBottom: '2px solid #e5e7eb',
          marginBottom: '30px'
        }}>
          <div style={{ color: '#6b7280' }}>
            <p style={{ margin: '5px 0' }}>
              <strong>Author:</strong> {post.author}
            </p>
            <p style={{ margin: '5px 0' }}>
              <strong>Published:</strong> {new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            {post.category && (
              <p style={{ margin: '5px 0' }}>
                <strong>Category:</strong> <span style={{ color: '#2563eb' }}>{post.category.name}</span>
              </p>
            )}
            <p style={{ margin: '5px 0' }}>
              <strong>Status:</strong> <span style={{
                padding: '2px 8px',
                backgroundColor: post.status === 'published' ? '#10b981' : '#f59e0b',
                color: 'white',
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                {post.status.toUpperCase()}
              </span>
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <Link 
              to={`/edit/${post._id}`}
              style={{
                padding: '8px 20px',
                backgroundColor: '#f59e0b',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              Edit
            </Link>
            <button 
              onClick={handleDelete}
              style={{
                padding: '8px 20px',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
            >
              Delete
            </button>
          </div>
        </div>

        <div style={{
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#374151',
          whiteSpace: 'pre-wrap'
        }}>
          {post.content}
        </div>

        {post.updatedAt !== post.createdAt && (
          <div style={{
            marginTop: '40px',
            paddingTop: '20px',
            borderTop: '1px solid #e5e7eb',
            color: '#6b7280',
            fontSize: '14px'
          }}>
            Last updated: {new Date(post.updatedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        )}
      </article>
    </div>
  );
}

export default PostDetail;