import { useState, useEffect } from 'react';
import { getPosts } from '../services/api';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getPosts();
      setPosts(response.data.posts || response.data);
      console.log('Posts loaded:', response.data);
    } catch (err) {
      console.error('Error loading posts:', err);
      setError(err.response?.data?.message || err.message || 'Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return { posts, loading, error, reload: loadPosts, setPosts };
};