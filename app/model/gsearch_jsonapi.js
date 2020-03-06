const axios = require('axios');
const $axios = axios.create({
    timeout: 1000 * 2
});

//https://www.googleapis.com/customsearch/v1?cx=011450975203877314992:jodaglbrnlh&key=AIzaSyAi1UmUzIp7eRbgeG_VFxNZxNnX7cvBHaM&q=%E6%B5%AE%E7%83%9F
module.exports = async function (query){
    const api = 'https://www.googleapis.com/customsearch/v1'
    const cx = '011450975203877314992:jodaglbrnlh'
    const key = 'AIzaSyAi1UmUzIp7eRbgeG_VFxNZxNnX7cvBHaM'
    //const key = 'AIzaSyBUn0N_MIXYqfCIS2iNbzIv4d8wiIquZzY'

    const url = api + '?' + 'cx=' + cx + '&key=' + key + '&q=' + query
    //const url = api + '?' + 'cx=' + cx + '&key=' + key + '&q=' + query

    console.log(`[gsearch/jsonapi] ready get : ${url}`)
    let res = null
    try{
        res = await $axios.get(url)
    }catch(e){
        console.log('[gsearch/jsonapi] proxy get error')
    }
    console.log(`[gsearch/jsonapi] response : ${res}`)
    return res
}
