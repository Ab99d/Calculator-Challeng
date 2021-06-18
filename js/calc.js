class Calculator {
    constructor(current, previous) {
        this.current = current
        this.previous = previous
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.PreviuosOperand = ''
        this.opration = undefined
    }
    
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appentNumper(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if(this.currentOperand === '') return
        if(this.PreviuosOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.PreviuosOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.PreviuosOperand)
        const curr = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(curr)) return
        switch (this.operation) {
            case '+':
                computation = prev + curr
                break;
            case '-':
                computation = prev - curr
                break;
            case 'x':
                computation = prev * curr
                break;
            case '/':
                computation = prev / curr
                break;
            default:
                return
        }
        this.currentOperand = computation
        this.opration = undefined
        this.PreviuosOperand = ''
    }

    getDisplayNumber(number) {
        const stringNum = number.toString()
        const integerDigits = parseFloat(stringNum.split('.')[0])
        const decimalDigits = stringNum.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en')
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.current.textContent = this.getDisplayNumber(this.currentOperand)
    }
}

const numBtn = document.querySelectorAll('[data-num]')
const operBtn = document.querySelectorAll('[data-oper]')
const delBtn = document.querySelector('[data-del]')
const resetBtn = document.querySelector('[data-reset]')
const equalsBtn = document.querySelector('[data-equals]')
const current = document.querySelector('[data-output-value]')
let previous = ''

const calculator = new Calculator(current, previous)

numBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appentNumper(button.textContent)
        calculator.updateDisplay()
    });
});

operBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.textContent)
        calculator.updateDisplay()
    });
});

equalsBtn.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

resetBtn.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

delBtn.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})