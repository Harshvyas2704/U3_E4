
let searched = document.querySelector("#search_input").value
let getSearchedNews = async (searched) => {
    try {

        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${searched}`)
        let data = await res.json()
        console.log('data:', data)
        // appnedData(data.articles)
    } catch (err) {
        console.log('err:', err)

    }

}

getSearchedNews(searched)