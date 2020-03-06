const axios = require('axios');
const $axios = axios.create({
    timeout: 1000 * 2
});

//https://cse.google.com/cse/element/v1?rsz=filtered_cse&num=10&hl=zh-CN&source=gcsc&gss=.com&cselibv=8b2252448421acb3&cx=011450975203877314992:itycvatvhcp&q=%E5%89%91%E7%BD%913&safe=off&cse_tok=AJvRUv1uzoZVBPZdoY2V12TSDcYm:1583494719524&sort=&exp=csqr,cc&callback=googlecse
module.exports = async function (query){
    const url = `https://cse.google.com/cse/element/v1?rsz=filtered_cse&num=10&hl=zh-CN&source=gcsc&gss=.com&cselibv=8b2252448421acb3&cx=011450975203877314992:itycvatvhcp&q=${query}&safe=off&cse_tok=AJvRUv1uzoZVBPZdoY2V12TSDcYm:1583494719524&sort=&exp=csqr,cc&callback=googlecse`

    let result = null
    try{
        result = await $axios.get(url)
    }catch(e){
        console.log('google cse api error')
    }
    return result
}