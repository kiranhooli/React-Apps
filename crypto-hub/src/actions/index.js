const axios = require("axios").default;

const getAllCoinsoptions = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        tiers: '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
    },
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': 'SOjCinN2pamshVlC4dq8pLUbYJ67p1DdqGwjsn7DuyKCVnWM22'
    }
};

const getCoinoptions = (id) => {
    return {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${id}`,
        params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h' },
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': 'SOjCinN2pamshVlC4dq8pLUbYJ67p1DdqGwjsn7DuyKCVnWM22'
        }
    }
};


const getNewsoptions = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: { q: 'crypto', lang: 'en' },
    headers: {
        'x-rapidapi-host': 'free-news.p.rapidapi.com',
        'x-rapidapi-key': 'SOjCinN2pamshVlC4dq8pLUbYJ67p1DdqGwjsn7DuyKCVnWM22'
    }
};


export const fetchAllCoins = () => async (dispatch) => {
    const data = await axios.request(getAllCoinsoptions).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
    dispatch({
        type: 'FETCH_COINS',
        payload: data.data.coins
    })
}

export const fetchVisibleCoins = (coins) => (dispatch) => {
    dispatch({
        type: 'FETCH_VISIBLE_COINS',
        payload: coins
    })
}

export const fetchAllNews = () => async dispatch => {
    const data = await axios.request(getNewsoptions).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
    dispatch({
        type: 'FETCH_ALL_NEWS',
        payload: data.articles
    })
}

export const fetchTopNews = (news) => dispatch => {
    dispatch({
        type: 'FETCH_TOP_NEWS',
        payload: news
    })
}


export const fetchSelectedCoin = (id) => async (dispatch) => {
    const data = await axios.request(getCoinoptions(id)).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
    dispatch({
        type: 'FETCH_SELECTED_COIN',
        payload: data.data.coin
    })
}