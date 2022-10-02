let suggestion = [
    "How to Eat a Burger",
    "Why should we learn coding",
    "What is the future of blockchain",
    "Will Automation kill developers",
    "How to learn UI/UX",
    "Stackoverflow 2022 Reports",
    "How to get a job at Google",
    "10 important JS interview questions",
    "How to start freelancing",
    "React VS Angular VS Vue",
    "History of android",
    "Should i buy android or IOS",
    "How to have a blueprint of website",
    "Best illustration software",
    "Figma VS Adobe XD"
]

let inputField = document.querySelector("input")
let suggestionEl = document.querySelector(".suggestion")


inputField.onkeyup = (e) => {
    let userData = e.target.value;
    let emptyArr = [];
    if(userData){
        emptyArr = suggestion.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase())
        })

        emptyArr = emptyArr.map(data => {
            return data = `<li>${data}</li>`
        })
        console.log(emptyArr)
        showSuggestion(emptyArr)
    }
}

function showSuggestion(data){
    suggestionEl.classList.add("visible")
    // data.forEach(element => {
    //     suggestionEl.innerHTML = element
    // });

    let listData;
    if(!data.length || data == undefined){
        listData = `<h3 class="notFound">😔 Search Not Found 😔</h3>`
    } else {
        listData = data.join('')
    }

    suggestionEl.innerHTML = listData
}

document.addEventListener("click", () => [
    suggestionEl.classList.remove("visible")
])