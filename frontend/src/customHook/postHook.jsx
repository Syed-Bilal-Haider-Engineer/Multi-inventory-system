import { useState } from 'react';
import axios from 'axios';

const useFormHook = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData, file,resetForm,url,contentType) => {
    setLoading(true);
    let userFormData;
    if(file) {
        userFormData = new FormData();
        userFormData.append('name', formData.fullName);
        userFormData.append('email', formData.email);
        userFormData.append('password', formData.password);
        userFormData.append('file', file);
    } else {
        userFormData = formData;
    }

    try {
        const headers = contentType === 'json'
        ? { 'Content-Type': 'application/json' }
        : { 'Content-Type': 'multipart/form-data' };

      const response = await axios.post(url, userFormData, {headers});
      console.log('Success:', response.data);
      // Clear form data after successful submission
      resetForm();
    } catch (error) {
      console.error('Error in form submission:', error);
    } finally {
      setLoading(false); // Reset loading state whether successful or not
    }
  };

  return { handleSubmit, loading };
};

export default useFormHook;
