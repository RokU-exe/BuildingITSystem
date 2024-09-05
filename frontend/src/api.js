const API_URL = process.env.REACT_APP_API_URL;

export const signUp = async (email, password) => {
    const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
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