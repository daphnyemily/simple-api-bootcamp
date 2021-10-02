//Display data returned from an api

const form = document.querySelector('form')
// const factDiv = document.querySelector('.numberFact')

form.addEventListener('submit', (i) =>{
    i.preventDefault()
    const number = i.target.querySelector('input[type="number"]').value
    console.log(number)

    // const loadText = 'Wait one sec ...'
    // factDiv.innerHTML = loadText

    const url ='http://numbersapi.com/random?json'

    fetch(url+number)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('h2').innerText = data.number
            document.querySelector('h3').innerText = data.text
            document.querySelector('h4').innerText = data.type

        })
    
})

