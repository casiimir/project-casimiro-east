import axios from "axios";

const GET = async (BASE_URL, section) => {
  const res = await fetch(`${BASE_URL}${section}`);
  return res.json();
};

const getCategory = (cityId, categoryId, setter) => {
  axios
    ({
      method: "get",
      url: `https://api.musement.com/api/v3/categories/${categoryId}/activities?city=${cityId}&offset=0&limit=100&sort_by=relevance`,
      headers: { 
        'Accept-Language': 'en-EN'
      },
    })
    .then((res) => {
      setter(res.data);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

const getActivity = (activityId, setter) => {
  axios
  ({
    method: "get",
    url: `https://api.musement.com/api/v3/activities/${activityId}`,
    headers: { 
      'Accept-Language': 'en-EN'
    },
  })
    .then((res) => {
      setter(res.data);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

const getAllActivities = (cityId, sortBy, setter, offset) => {
  axios
  ({
    method: "get",
    url: `https://api.musement.com/api/v3/cities/${cityId}/activities?limit=10&offset=${offset}&sort_by=${sortBy}`,
    headers: { 
      'Accept-Language': 'en-EN'
    },
  })
    .then((res) => {
      setter(res.data);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

const createCart = (id, setter) => {
  axios({
    method: "post",
    url: "https://api.musement.com/api/v3/carts",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "en-US",
      "X-Musement-Application": "string",
      "X-Musement-Currency": "USD",
      "X-Musement-Market": "us",
      "X-Musement-Version": "3.4.0",
    },
    data: {
      firstName: "Fred",
      lastName: "Flintstone",
    },
  })
    .then((res) => {
      setter(res.data);
    })
    .catch((error) => {
      console.log(error.response);
    });
};


const postInCart = (setter) => {
  axios({
    method: "post",
    url: "https://api.musement.com/api/v3/81927b61-9b75-49b9-9836-d77116809d04/items",
    headers: {
      "X-Musement-Application": "string",
      "X-Musement-Version": "3.4.0",
      "Content-Type": "application/json",
    },
    data: {
      firstName: "Fred",
      lastName: "Flintstone",
    },
  })
    .then((res) => {
      setter(res.data);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

export {
  GET,
  getCategory,
  getActivity,
  getAllActivities,
  createCart,
  postInCart,
};
