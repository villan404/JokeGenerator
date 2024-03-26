const btn = document.querySelector("button");
    
    const generateJoke = async () => {
        const URL = "https://v2.jokeapi.dev/joke/Programming,Dark"
        const p = document.querySelector(".joke")
    let response = await fetch(URL);
    let data = await response.json();
    if(data.hasOwnProperty('joke')){
        p.innerText = data.joke
    }
    else{
        p.innerText = data.setup;
    }
}

btn.addEventListener("click", () => {
    generateJoke();
})

