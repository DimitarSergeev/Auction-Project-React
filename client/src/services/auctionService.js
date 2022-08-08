
const baseUrl = 'http://localhost:3030';

export const create = async (offerData,token) => {
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
    }else{
        throw { message: 'Unable to create offer' }
    }
}
