import { Link } from 'react-router-dom';

function PostCard({ post, onDelete }) {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      onDelete(post._id);
    }
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '20px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: 0 }}>
        <Link to={`/posts/${post._id}`} style={{ color: '#2563eb', textDecoration: 'none' }}>
          {post.title}
        </Link>
      </h2>
      
      <p style={{ color: '#666', lineHeight: '1.6' }}>
        {post.content.substring(0, 150)}...
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
        <small style={{ color: '#888' }}>
          By <strong>{post.author}</strong> • {new Date(post.createdAt).toLocaleDateString()}
          {post.category && <> • <span style={{ color: '#2563eb' }}>{post.category.name}</span></>}
        </small>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link 
            to={`/edit/${post._id}`}
            style={{
              padding: '5px 15px',
              backgroundColor: '#f59e0b',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            Edit
          </Link>
          <button 
            onClick={handleDelete}
            style={{
              padding: '5px 15px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;