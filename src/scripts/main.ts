const annualSpan = document.querySelector('.annually')
const monthSpan = document.querySelector('.monthly')
const checkbox = document.querySelector('#check')
const priceElements = document.querySelectorAll('.price')

annualSpan?.addEventListener('click' , () => {
    (checkbox as HTMLInputElement).checked = true
    changePriceAnnual()
})

monthSpan?.addEventListener('click' , () => {
    (checkbox as HTMLInputElement).checked = false
    changePriceMonth()
})

const changePriceAnnual = () => {
    priceElements.forEach(item => item.innerHTML = item.innerHTML.substring(0,2).concat('9.99') )
}

const changePriceMonth = () => {
    priceElements.forEach(item => item.innerHTML = item.innerHTML.substring(0,2).concat('.99') )
}

checkbox?.addEventListener('click', () => {
    (checkbox as HTMLInputElement).checked ? changePriceAnnual() : changePriceMonth()
})


window.addEventListener('DOMContentLoaded', () => {
    (checkbox as HTMLInputElement).checked = false;
})