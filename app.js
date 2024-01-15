const display = document.getElementById('screen-calculations');
const buttons = document.getElementsByTagName('button');


const pressButton = (value) => {
    if (display.value == 0) {
        display.value = value;
    }
    else {
        display.value+= value;
        
    }

}

const clearDisplay = () => {
    display.value = 0;
}

const printResult = () => {
    display.value = eval(display.value);
}

const noMorePoints = (displayText, inputText) =>  {
    if (displayText[displayText.length - 1] === '.' && inputText !== '.') {
        console.log(displayText)
        return true
    }
    else {
        return false
    }
}

