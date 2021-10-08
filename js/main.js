//Display data returned from an api

document.querySelector('button').addEventListener('click', searchButton)

function searchButton(){ 
    const number = document.querySelector('input').value

    const url =`http://numbersapi.com/${number}?json`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('h2').innerText = data.number
            document.querySelector('h3').innerText = data.text
            document.querySelector('h4').innerText = data.type
        })
    
}


//http://numbersapi.com/random/?json