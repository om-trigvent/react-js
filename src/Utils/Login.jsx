// login.js
import axios from 'axios';

export const login = async (email, password, setLoading, setError, navigate) => {
    setLoading(true);
    setError('');
    const apiEndpoint = 'https://reqres.in/api/login';
    try {
        const response = await axios.post(apiEndpoint, { email, password });
        const { token } = response.data;
        localStorage.setItem('token', token);
        alert('Login successful!');
        navigate('/dashboards'); // Use navigate here since it's passed from the component
        setLoading(false);
        return true;
    } catch (error) {
        setError('Invalid email or password');
        setLoading(false);
        return false;
    }
};
