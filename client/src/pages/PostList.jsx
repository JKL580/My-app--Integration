import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import { deletePost } from '../services/api';
import PostCard from '../components/PostCard';

function PostList() {
  const { posts, loading, error, reload, setPosts } = usePosts();

  const handleDelete = async (id) => {
    try {
      await deletePost(id);
      setPosts(posts.filter(post => post._id !== id));
      alert('Post deleted successfully');
    } catch (err) {
      alert('Error deleting post: ' + (err.response?.data?.message || err.message));
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Loading posts...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', color: '#ef4444' }}>
        <h2>Error: {error}</h2>
        <button 
          onClick={reload}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '30px' 
      }}>
        <h1 style={{ margin: 0 }}>Blog Posts ({posts.length})</h1>
        <Link 
          to="/create"
          style={{
            padding: '10px 20px',
            backgroundColor: '#10b981',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold'
          }}
        >
          + Create New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '50px',
          backgroundColor: '#f3f4f6',
          borderRadius: '8px'
        }}>
          <h2 style={{ color: '#666' }}>No posts yet</h2>
          <p>Create your first blog post to get started!</p>
          <Link 
            to="/create"
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
            Create Post
          </Link>
        </div>
      ) : (
        <div>
          {posts.map(post => (
            <PostCard key={post._id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;