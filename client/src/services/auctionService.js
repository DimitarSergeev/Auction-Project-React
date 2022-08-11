
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

export const bet = async (offerId,betData) =>{
   const response = await fetch(`${baseUrl}/${offerId}`, {
    method: 'PATCH',
    headers: {
        'content-type': 'application/json',
        'X-Authorization': betData.token
    },
    body: JSON.stringify(betData)})
    if (response.ok) {
        const result = await response.json();

        return result;
    } else {
        throw { message: 'Unable to Bet' }
    }
}

export const buyNow = async (offerId,userId) =>{
    const response = await fetch(`${baseUrl}/${offerId}/${userId}`)

    if (response.ok) {
        const result = await response.json();

        return result;
    } else {
        throw { message: 'Someting wen wrong' }
    }
}
export const del = async (offerId)=>{
    const response = await fetch(`${baseUrl}/${offerId}`)
    if (response.status(204)) {
        const result = await response.json();

        return result;
    } else {
        throw { message: 'Someting wen wrong' }
    }
}
