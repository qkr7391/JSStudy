//loop

for (let index = 0; index < 5; index++) {
    console.log(i);
    
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i, j);
    }
    
}


for (let index = 0; index < 5; index++) {
    if (i == 10) {
        console.log('out');
        break;
    }
    console.log(i);
}

for (let index = 0; index < 5; index++) {
    if (i == 10) {
        continue;
        console.log('out');
        break;
    }
    console.log(i);
}