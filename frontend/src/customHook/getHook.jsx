import { useState } from 'react';
import axios from 'axios';

const useGet = () => {
  const [loading, setLoading] = useState(false);

  const fetchAPI = async() => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      console.log('Success:', response.data);
      // Clear form data after successful submission
      resetForm();
    } catch (error) {
      console.error('Error in form submission:', error);
    } finally {
      setLoading(false); // Reset loading state whether successful or not
    }
  };

  return { fetchAPI };
};

export default useGet;
