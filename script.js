function increaseScore(team) {
    const scoreId = `score${team}`
    const scoreElement = document.getElementById(scoreId)
    let score = parseInt(scoreElement.textContent)
    scoreElement.textContent = ++score
}

function decreaseScore(team) {
    const scoreElement = document.getElementById("score" + team)
    let currentScore = parseInt(scoreElement.innerText)
    if(currentScore > 0){
        currentScore--;
        scoreElement.innerText = currentScore

    } else {
        alert(" Skor Zaten 0. Orda Dur")
    }
    scoreElement.textContent = --score
}

document.getElementById("resetButtonA").addEventListener("click", function () {
    document.getElementById("scoreA").innerText = "0"
})
document.getElementById("resetButtonB").addEventListener("click", function () {
    document.getElementById("scoreB").innerText = "0"
})

function setScorePrompt(team){
    const score = prompt("Yeni Gol Sayısı Giriniz:")
    if(score !== null &&  !isNaN(score)) {
        const scoreNum = parseInt(score) 
            document.getElementById(`score${team}`).textContent = scoreNum
    } else{
        alert("Giriş iptal veya geçersiz bir değer girildi")
    }
}

function setNameA() {
    const name = prompt ("Takım Adı Giriniz:")
    document.getElementById("unknownA").textContent = name
}

function setNameB() {
    const nameb = prompt ("Takım Adı Giriniz:")
    document.getElementById("unknownB").textContent = nameb
}