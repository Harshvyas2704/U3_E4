// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js"
document.querySelector("#navbar").innerHTML = navbar();



let searched = document.querySelector("#search_input")
searched.addEventListener("keypress", function () {
    onEventFun(event, searched)

})

// 12:08

function onEventFun(event, searched) {
    if (event.key == "Enter") {
        // console.log(event)

        getSearchedNews(searched.value)

    }
}

// console.log('searched:', searched.textContent)



let getSearchedNews = async (searchedData) => {
    
    try {
        

        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${searchedData}`)
        let data = await res.json()
        // console.log('data:', data)

        appnedData1(data.articles)

    } catch (err) {
        console.log('err:', err)
    }

}

let newsArr1 = [];

function appnedData1(data) {
    document.querySelector("#results").innerHTML = null
    console.log('data:', data)
    data.forEach((ele) => {
        let line = document.createElement("div")
        line.setAttribute("class", "news")
        line.addEventListener("click", function () {
            newsArr1.push(ele)
            getClickedNews1(ele)
        })

        let box1 = document.createElement("div")
        let box2 = document.createElement("div")

        let img = document.createElement("img")
        img.src = ele.urlToImage
        box1.append(img)

        let newsTitle = document.createElement("h3")
        newsTitle.innerText = ele.title

        let newsDescription = document.createElement("p")
        newsDescription.innerText = ele.description

        box2.append(newsTitle, newsDescription)
        line.append(box1, box2)

        document.querySelector("#results").append(line)
    })
}



function getClickedNews1(ele) {
    localStorage.setItem("news", JSON.stringify(newsArr))
    window.location.href = "search.html"
}


let code = "in"

function inFun() {
    let code = "in"
    getNews(code)
}

let chFun = () => {

    let code = "ch"
    getNews(code)
}

let usFun = () => {
    let code = "us"
    getNews(code)
}

let ukFun = () => {
    let code = "uk"
    getNews(code)
}

let nzFun = () => {
    let code = "nz"
    getNews(code)
}

document.querySelector("#in").addEventListener("click", inFun)
document.querySelector("#ch").addEventListener("click", chFun)
document.querySelector("#us").addEventListener("click", usFun)
document.querySelector("#uk").addEventListener("click", ukFun)
document.querySelector("#nz").addEventListener("click", nzFun)

let getNews = async (code) => {
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${code}`)
    let data = await res.json()
    appnedData(data.articles)

}

let newsArr = [];
let appnedData = (data) => {
    document.querySelector("#results").innerHTML = null
    console.log('data:', data)
    data.forEach((ele) => {
        let line = document.createElement("div")
        line.setAttribute("class", "news")
        line.addEventListener("click", function () {
            newsArr.push(ele)
            getClickedNews(ele)
        })

        let box1 = document.createElement("div")
        let box2 = document.createElement("div")

        let img = document.createElement("img")
        img.src = ele.urlToImage
        box1.append(img)

        let newsTitle = document.createElement("h3")
        newsTitle.innerText = ele.title

        let newsDescription = document.createElement("p")
        newsDescription.innerText = ele.description

        box2.append(newsTitle, newsDescription)
        line.append(box1, box2)

        document.querySelector("#results").append(line)
    })

}

getNews(code)

function getClickedNews(ele) {
    localStorage.setItem("news", JSON.stringify(newsArr))
    window.location.href = "news.html"
}