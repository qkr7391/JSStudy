//switch

let day = 6; // 0 : Mon, 1 : Tue ...
let dayName;

switch (day) {
    case 0:
        dayName = 'Mon';
        break;

    case 1:
        dayName = 'Tue';
        break;

    case 2:
        dayName = 'Wed';
        break;

    case 3:
        dayName = 'Thur';
        break;

    case 4:
        dayName = 'Fri';
        break;

    case 5:
        dayName = 'Sat';
        break;

    case 6:
        dayName = 'Sun';
        break;
    default :
        dayName = '';
        break;
}
console.log(dayName);