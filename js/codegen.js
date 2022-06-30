// the goal is to randomly generate a five-digit code/equation that equals the price set in the input field
// turned off input for now but you can still click the button and choose currency from the dropdown so thats neat

// dictionary that contains all base values
const letters = {
    copper: {
      L: 1,
      V: 2,
      C: 3,
      W: 5,
      D: 10,
      A: 20,
      Q: 30,
      U: 50,
      S: 100
    },
    silver: {
      G: 1,
      X: 2,
      H: 3,
      K: 5,
      R: 10,
      E: 20,
      Z: 30,
      N: 50,
      P: 100
    },
    gold: {
      O: 1,
      T: 2,
      Y: 3,
      B: 5,
      I: 10,
      J: 20,
      F: 30,
      M: 50
    }
};
  
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let codeDigit = ""; // blank string to be pushed to codeArray
let currentVal; // blank value to be pushed to valueArray

const codeArray = []; // blank array that codeDigit will be pushed to
const valueArray = []; // blank array that will calculate the unfiltered code value
const newValue = []; // blank array that calculate the final/filtered code value

function randomProperty(obj) {
    const keys = Object.keys(obj);
    return keys[Math.floor(Math.random() * keys.length)];
}

function randomString(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

function currencyValue() {
    const currency = document.getElementById("currencySelect").value;
    return currency;
}

function moneyCheck(money) {
    switch (money) {
        case "copper":
        moneyText = " copper pieces";
        break;
        case "silver":
        moneyText = " silver pieces";
        break;
        case "gold":
        moneyText = " gold pieces";
        break;
    }
}

// evaluates each digit in codeArray for the current value
function digitEval() {
    switch (codeDigit) {
        case "0":
        currentVal += 10;
        break;
        // case '1': filter out previous value
        case "2":
        currentVal /= 3;
        break;
        case "3":
        currentVal *= 2;
        break;
        case "4":
        currentVal += 0;
        break;
        // case '5': reset to letter value
        case "6":
        currentVal -= 5;
        break;
        case "7":
        currentVal *= 3;
        break;
        case "8":
        currentVal /= 2;
        break;
        // case '9': skip next number
        default:
        currentVal += 0;
        break;
    }
}

function codeText() {
    let text = "";
    codeArray.forEach((e) => {
        text += e;
    });
    return text + ":";
}

function codeVal(e) {
    const total = Math.floor(Math.abs(e));
    return total + moneyText;
}

function filterEval(e, i) {
    codeDigit = e;
    if (i < 1) {
        currentVal = valueArray[0];
    } else {
        currentVal = newValue[i - 1];
    }

    if (i > 0 && codeDigit === "5") {
        currentVal = newValue[0];
    }
    
    digitEval();
    newValue.push(currentVal);
}

function filterCode(e, i) {
    let len = codeArray.length;
    let current = codeArray[i];

    // filter previous if e === '1'
    let nextA = codeArray[(i + 1) % len];
    let nextB = codeArray[(i + 2) % len];
    let nextC = codeArray[(i + 3) % len];
    const allNext = [nextA, nextB, nextC].every((e) => {
        return e === "1";
    });

    // filter next if e === '9'
    let prevA = codeArray[(i + len - 1) % len];
    let prevB = codeArray[(i + len - 2) % len];
    let prevC = codeArray[(i + len - 3) % len];
    const allPrev = [prevA, prevB, prevC].every((e) => {
        return e === "9";
    });

    if (i >= 1 && current !== "1" && allNext === true) {
        return false;
    } else if (i >= 1 && current !== "9" && allPrev === true) {
        return false;
    } else if (i >= 1 && current !== "1" && nextA === "1" && nextB !== "1") {
        return false;
    } else if (i >= 1 && current !== "9" && prevA === "9" && prevB !== "9") {
        return false;
    }
    return true;
}

function codeGen(money) {
    const userLetters = letters[money];
    const letter = randomProperty(userLetters);
    const letterVal = userLetters[letter];
    const moneyText = moneyCheck(money);

    const priceValue = document.getElementById("price").value;
    console.log(priceValue);

    let i = 0;
    while (i < 5) {
        if (i <= 0) {
        codeDigit = letter;
        currentVal = letterVal;
        } else {
        codeDigit = randomString(digits);
        currentVal = valueArray[i - 1];
        }

        if (i > 0 && codeDigit === "5") {
        currentVal = valueArray[0];
        }

        digitEval();
        codeArray.push(codeDigit);
        valueArray.push(currentVal);
        i++;
    }

    let newCode = codeArray.filter(filterCode);
    newCode.forEach(filterEval);

    console.log(letter + ": " + letterVal);
    console.log(codeArray);
    console.log(newCode);
    console.log(newValue);

    const total = newValue[newValue.length - 1];

    document.getElementById("returnText").innerHTML = codeText();
    document.getElementById("returnValue").innerHTML = codeVal(total);

    codeArray.length = 0;
    valueArray.length = 0;
    newValue.length = 0;
}  