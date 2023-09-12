const tips = document.querySelectorAll('.tip-amount')
let bill = document.getElementById('bill')
let numOfPeople = document.getElementById('numOfPeople')
const warningPeople = document.getElementById('warningPeople')
const warningBill = document.getElementById('warningBill')
const customBtn = document.getElementById('customBtn')
const customParag = document.getElementById('customParag')
let customInp = document.getElementById('customInp')
const tipAmount = document.getElementById('tip-amount-para')
const totalSum = document.getElementById('total-sum-para')
const rates = document.getElementById('number')
const reset = document.getElementById('reset-btn')

let tipAmountValue = 0.00
let totalSumValue = 0.00

let rate = 0
let billAmount = 0
let numOfPeopleConverted = 0


tips.forEach((tip) => {
    tip.addEventListener('click', () => {
        for(let i = tips.length - 1; i >= 0; i--) {
            tips[i].classList.remove('clicked')
        }
        tip.classList.add("clicked")
        
        rate = Number(rates.innerText) / 100
        // console.log(rate)
        // console.log(typeof rate)

        calculator()
    })
})
customBtn.addEventListener('click', () => {
    tips.forEach((tip) => {
        tip.classList.remove('clicked')
    })
})
customInp.addEventListener('change', () => {
    customInpValue = Number(customInp.value)

    rate = customInpValue / 100
    // console.log(rate)
    // console.log(typeof rate)

    calculator()
})

bill.addEventListener('change', () => {
    billAmount = Number(bill.value)

    if(billAmount <= 0) {
        warningBill.style.display = 'flex'
    } else {
        warningBill.style.display = 'none'
    }
    
    // console.log(billAmount)
    // console.log(typeof billAmount)

    calculator()
})

numOfPeople.addEventListener('change', () => {
    numOfPeopleConverted = Number(numOfPeople.value)

    if(numOfPeopleConverted <= 0) {
        warningPeople.style.display = 'flex'
    } else {
        warningPeople.style.display = 'none'
    }

    
    // console.log(numOfPeopleConverted)
    // console.log(typeof numOfPeopleConverted)

    calculator()
})


const calculator = () => {
    if(billAmount == 0 || numOfPeopleConverted == 0){
        totalSumValue = 0
        tipAmountValue = 0
    }

    tipAmountValue = billAmount * rate / numOfPeopleConverted
    tipAmountValue = parseFloat(tipAmountValue).toFixed(2)

    totalSumValue = billAmount * (1 + rate) / numOfPeopleConverted
    totalSumValue = parseFloat(totalSumValue).toFixed(2)

    // console.log(tipAmountValue)

    tipAmount.innerText = '$' + tipAmountValue
    totalSum.innerText = '$' + totalSumValue
}

reset.addEventListener('click', () => {
    tipAmountValue = 0
    totalSumValue = 0
    rate = 0
    billAmount = 0
    numOfPeopleConverted = 0

    bill.value = ''
    numOfPeople.value = ''
    customInp.value = ''

    tips.forEach((tip) => {
        tip.classList.remove('clicked')
    })

    tipAmount.innerText = '$' + 0.00
    totalSum.innerText = '$' + 0.00
})