const btn = document.querySelector("button");

const generateJoke = async () => {

    const URL = "https://v2.jokeapi.dev/joke/Programming,Dark"

    const setup = document.querySelector(".joke")
    const delivery = document.getElementById('delivery')

    let response = await fetch(URL);
    let data = await response.json();

    if (data) {
        try {
            if (data.hasOwnProperty('joke')) {
                setup.innerText = data.joke
                delivery.style.display = "none"
            }
            else {
                setup.innerText = data.setup;
                delivery.style.display = "flex"
                delivery.innerText = '~ ' + data.delivery;
            }
        } catch (error) {
            setup.innerText = "Maybe touch some grass"
            console.log(error.message);
        }
    } else {
        console.log("API not working");
    }

}

btn.addEventListener("click", () => {
    generateJoke();
})

