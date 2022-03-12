'use strict'
const cardBody = document.getElementById('card-body')
const diceBtn = document.getElementById('card-dice')
const adviceCounterEl = document.getElementById('advice-counter')
const API_URL = 'https://api.adviceslip.com/advice'
let adviceCounter = 0

const renderAdvice = (advice) => {
    const adviceEl = document.createElement('blockquote')
    adviceEl.innerHTML = `<p class="card__txt">${advice}</p>`
    cardBody.innerHTML = ''
    cardBody.appendChild(adviceEl)
}

const renderCounter = () => {
    adviceCounterEl.innerHTML = adviceCounter
}

const renderError = (errorMessage) => {
    const errorEl = document.createElement('p')
    errorEl.className = 'card__error'
    errorEl.innerHTML = errorMessage
    cardBody.innerHTML = ''
    cardBody.appendChild(errorEl)
}

const setLoading = () => {
    const loadingEl = document.createElement('div')
    loadingEl.className = 'loading'
    loadingEl.innerHTML = `
        <div class="loading__icon">
            <svg class="loading__svg" width="60" height="60" viewBox="-10 -10 60 60">
                <ellipse class="circle2" cx="20" cy="20" rx="20" ry="20" stroke="#53FFAA" stroke-width="3"
                    fill-opacity="0"></ellipse>
                <ellipse class="circle1" cx="20" cy="20" rx="20" ry="20" stroke="#4F5D74" stroke-width="3"
                    fill-opacity="0">
                </ellipse>
            </svg>
        </div>
    `
    cardBody.innerHTML = ''
    cardBody.appendChild(loadingEl)
}

const fetchAdvice = async() => {
    setLoading()

    try {
        const res = await fetch(API_URL, {cache: "no-cache"})
        if(res.ok) {
            const data = await res.json()
            adviceCounter++
            renderCounter()
            renderAdvice(data.slip.advice)
        } else {
            throw new Error('Sorry, we can\'t load an advide. Please try again!')
        }
    } catch(err) {
        renderError(err.message)
    }
}

const init = () => {
    renderCounter()
    setLoading()
    fetchAdvice()
}

init()

diceBtn.addEventListener('click', fetchAdvice)