const jokeImg = document.querySelector('#jokeImg')


document.addEventListener('DOMContentLoaded', ()=>{
    
    document.querySelector('button').addEventListener('click', ()=>{
        if(jokeImg.firstChild){
            jokeImg.firstChild.remove()
        }
        fetch('https://icanhazdadjoke.com/', {
            headers: {
            'Accept': 'application/json'
            }
        })
            .then (response => response.json())
            .then(json => {
                document.querySelector('#joke').innerText = json.joke
                console.log(json)
                const img = document.createElement('img')
                img.src = `https://icanhazdadjoke.com/j/${json.id}.png`
                jokeImg.appendChild(img)
            })
    .catch(err => console.log(err))
    })
})