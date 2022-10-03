import axios from "axios";

const GET = async(BASE_URL, section) => {
    const res = await fetch(`${BASE_URL}${section}`);
    return res.json();
};


// la funzione getCategory serve a chiamare una lista di attività correlate ad una città (cityId) e una categoria specifica (categoryId)
// il parametro "setter" sarà il setter dello state che prenderà i dati risultanti dalla chiamata
// id activity 185 buono per le attività in città
const getCategory = (cityId, categoryId, setter) => {
    axios
    .get(`https://api.musement.com/api/v3/categories/${categoryId}/activities?city=${cityId}&offset=0&limit=100&sort_by=relevance`)
    .then((res) => {
      setter(res.data);
    })
    .catch((error) => {
      console.log(error.response);
    });
}

const getActivity = (activityId, setter) => {
    axios
    .get(`https://api.musement.com/api/v3/activities/${activityId}`)
    .then((res)=>{
        setter(res.data);
        console.log('====>', res.data);
    })
    .catch((error) =>{
        console.log(error.response);
    })
}


// questa funzione restituisce tutte le attività per città, il parametro sort_by accetta: 
// rating-relevance-price
const getAllActivities = (cityId,sortBy,setter) => {
    axios
    .get(`https://api.musement.com/api/v3/cities/${cityId}/activities?limit=100&offset=0&sort_by=${sortBy}`)
    .then((res)=>{
        setter(res.data.data);
    })
    .catch((error) =>{
        console.log(error.response);
    })   
}


const createCart = (id, setter) => {
    axios({
			method: 'post',
			url: 'https://api.musement.com/api/v3/carts',
			headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'en-US',
        'X-Musement-Application': 'string',
        'X-Musement-Currency': 'USD',
        'X-Musement-Market': 'us',
        'X-Musement-Version': '3.4.0'
      },
			data: {
				firstName: 'Fred',
				lastName: 'Flintstone'
			}
		})
    .then((res)=>{
			setter(res.data);
			console.log(res)
    })
    .catch((error) =>{
        console.log(error.response);
    })   
}

//  81927b61-9b75-49b9-9836-d77116809d04 uuid per addcart



const postInCart = ( setter ) => {
	axios({
		method: 'post',
		url: 'https://api.musement.com/api/v3/81927b61-9b75-49b9-9836-d77116809d04/items',
		headers: {
			'X-Musement-Application': 'string',
			'X-Musement-Version': '3.4.0',
			'Content-Type': 'application/json'
		},
		data: {
			firstName: 'Fred',
			lastName: 'Flintstone'
		}
	})
	.then((res)=>{
		setter(res.data);
		console.log(res)
	})
	.catch((error) =>{
			console.log(error.response);
	})   
}

// const postInCart = (cartUuid, setter) => {
//     axios
//     .post(`https://api.musement.com/api/v3/carts/${cartUuid}/items`)
//     .then((res)=>{
//         setter(res.data.data);
//     })
//     .catch((error) =>{
//         console.log(error.response);
//     })   
// }

export {GET, getCategory, getActivity, getAllActivities, createCart, postInCart};  