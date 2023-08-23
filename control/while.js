let num = 5;
while (num >= 0) {
    console.log(num);
    num--;
}


let isActive = true;
let i = 0;
while (isActive) {
    console.log('activating');
    if (i === 100) {
        break;
    }
    i++;
}


do {
    console.log('activating');
    if (i === 100) {
        break;
    }
    i++;
    
} while (isActive);