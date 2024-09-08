const API_URL = 'http://localhost:8000';

export const fetchHomeData = async () => {
    console.log('Fetching home data from:', `${API_URL}/`);
    try {
        const response = await fetch(`${API_URL}/`);
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Received data:', data);
        return data;
    } catch (error) {
        console.error('Error fetching home data:', error);
        throw error;
    }
};

export const signUp = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
};

export const login = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });
    return response.json();
};

export const logout = async () => {
    const response = await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
    });
    return response.json();
};