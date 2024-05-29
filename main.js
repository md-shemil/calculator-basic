let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.getAttribute('data-value')
        if ( buttonValue == '=') {
            try{
                string = eval(string)
                input.value = string;
            }catch(error){
                string ="Error";
            }
            
        }
        else if(buttonValue == 'AC'){
            string = "";
            input.value = string
        }
        else if(buttonValue == 'DEL'){
            string = string.substring(0,string.length-1);
            input.value = string
        }
        else {
            string += buttonValue;
            input.value = string;
        }
    })
})