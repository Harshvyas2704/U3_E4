// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js"
document.querySelector("#navbar").innerHTML = navbar();

let newsArr = JSON.parse(localStorage.getItem("news"))
console.log('newsArr:', newsArr)

let appnedData = (newsArr) => {

    newsArr.forEach((ele) => {

        let box = document.createElement("div")

        let newsImg = document.createElement("img")
        newsImg.src = ele.urlToImage;

        let newsTitle = document.createElement("h3")
        newsTitle.innerText = ele.title

        let newsDescription = document.createElement("p")
        newsDescription.innerText = ele.description

        box.append(newsImg, newsTitle, newsDescription)

        document.querySelector("#detailed_news").append(box)
    })
}

appnedData(newsArr)