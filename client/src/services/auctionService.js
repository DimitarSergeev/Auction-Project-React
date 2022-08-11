
const baseUrl = 'http://localhost:3030';

export const create = async (offerData, token) => {
    const response = await fetch(`${baseUrl}/offer/create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(offerData)
    });
    if (response.ok) {
        const result = await response.json();

        return result;
    } else {
        throw { message: 'Unable to create offer' }
    }
}

export const getLastOfferts = async () => {
    try {
        const response = await fetch(baseUrl)
        const result = await response.json()
        return result
    } catch (error) {
        throw new Error({ error: error.message })
    }
}
export const getAll = async () => {
    try {
        const response = await fetch(`${baseUrl}/auction`)
        const result = await response.json()
        return result
    } catch (error) {
        throw new Error({ error: error.message })
    }
}

export const getOne = async (offerId) => {
    try {
        const response = await fetch(`${baseUrl}/offer/${offerId}/details`)
        const result = await response.json()
        return result
    } catch (error) {
        throw new Error({ error: error.message })
    }
}
