const baseUrl = 'http://localhost:3030/auth';

export const register = async (userData) => {
    if (userData.needAge) {
        const response = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        if (response.ok) {
            const result = await response.json();
    
            return result;
        } else {
            throw { message: 'Unable to create user' };
        }
    }

}