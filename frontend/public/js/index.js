var button = document.querySelector("#submit_button");
var rounds = document.querySelector("#rounds");


var pedra_1 = document.querySelector("#pedra_1");
var papel_1 = document.querySelector("#papel_1");
var tesoura_1 = document.querySelector("#tesoura_1");

var pedra_2 = document.querySelector("#pedra_2");
var papel_2 = document.querySelector("#papel_2")
var tesoura_2 = document.querySelector("#tesoura_2");



button.addEventListener("click", (e) => {
    rounds = rounds.value
    let jogador1 = [pedra_1.value, papel_1.value, tesoura_1.value]
    let jogador2 = [pedra_2.value, papel_2.value, tesoura_2.value]
    //console.log({ rounds, jogador1, jogador2 })

    e.preventDefault();
    fetch('http://localhost:3000/calc', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: { rounds, jogador1, jogador2 } })
    }).then((data) => {
        return data.json()
        console.log(data)
    })
        .then((data) => {
            document.querySelector("#min").value = data[0]
            document.querySelector("#max").value = data[1]

        })
})