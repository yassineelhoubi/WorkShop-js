window.addEventListener('load', () => {
    //all numbers 
    const keys = document.querySelector('.calculator-grid')
    //affichage
    const currentOperand = document.querySelector('[data-current-operand]');
    const prevOperand = document.querySelector('[data-previous-operand]');

    keys.addEventListener('click', function(e) {

        pressedBtn = e.target

        if (
            pressedBtn.matches('button') &&
            !pressedBtn.matches('[data-equals]') &&
            !pressedBtn.matches('[data-delete]') &&
            !pressedBtn.matches('[data-all-clear]')

        ) {

            /* if (currentOperand.textContent === '0'  ){
                return
            } */
            if (currentOperand.textContent === '0' ) {
                currentOperand.textContent = pressedBtn.textContent === '.' ?
                    '0.' :
                    pressedBtn.textContent
                return

            } else if (currentOperand.textContent.includes('.') && pressedBtn.textContent === '.') {
                return
            } else  {
                currentOperand.textContent += pressedBtn.textContent
                return
            }
        }
        if(pressedBtn.matches('[data-all-clear]')){
            currentOperand.textContent='0'
            prevOperand.textContent='0'
        }


        if (pressedBtn.matches('[data-equals]')) {
            prevOperand.innerHTML=currentOperand.textContent
            currentOperand.textContent = calculate(currentOperand.textContent)
            
        }
        if(pressedBtn.matches('[data-delete]')){
            val=currentOperand.textContent
            currentOperand.textContent=val.substring(0,val.length-1)
            
            
            
        }
        

    })
})

function calculate(string = '') {
    return eval(string)
}




