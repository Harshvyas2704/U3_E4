// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import navbar from "../components/navbar.js"
document.querySelector("#navbar").innerHTML = navbar();



document.querySelector("#results").innerHTML = null
console.log('data:', data)
data.forEach((ele) => {
    let line = document.createElement("div")
    line.setAttribute("class", "news")
    line.addEventListener("click", function () {
        newsArr.push(ele)
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


function getClickedNews1(ele) {
    localStorage.setItem("news", JSON.stringify(newsArr))
    window.location.href = "news.html"
}