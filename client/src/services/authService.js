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

export const login = async (userData) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    if (response.ok) {
        const result = await response.json();

        return result;
    } else {
        throw { message: 'Email or password dont match' };
    }
}
export const getOneUser = async(userId,token) =>{
      const response = await fetch(`${baseUrl}/profile`,{
        method: 'POST',
        headers: {
            'X-Authorization': token
        },
        body: JSON.stringify(userId)
      })
      if (response.ok) {
        const result = await response.json();

        return result;
    } else {
        throw { message: 'User not found' };
    }
}

export const logout = async (token) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': token
            },
        })
        return response
    } catch (error) {
        throw new Error({ message: error.message })
    }
}