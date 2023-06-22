let i = 0;
while (i < 2) {
    console.log ('Привет!');
    i++;
}

let i = 1;
while (i <= 5) {
    console.log ( i );
    i++;
}

let i = 7;
while (i <=22) {
    console.log ( i );
    i++;
}

let obj = {'Коля': 200, 'Вася':300, 'Петя': 400};

for(key in obj){
    console.log([key]+ ' - Зарплата'+ obj[key]+'долларов');
}

n = 1000;
i = 0;

while (n >= 50){
    n= n / 2;
    i++;
}

let dayNumber = 1;
while (dayNumber <= 31) {
    if (dayNumber >=6 && dayNumber <=8) {
        console.log('Сегодня пятница, 7-е число. Необходимо подготовить отчет.');
    } else if (dayNumber >=13 && dayNumber <=15) {
        console.log('Сегодня пятница, 14-е число. Необходимо подготовить отчет.');
    } else if (dayNumber >=20 && dayNumber <=22) {
        console.log('Сегодня пятница, 21-е число. Необходимо подготовить отчет.');
    } else if (dayNumber >=27 && dayNumber <=29) {
        console.log('Сегодня пятница, 28-е число. Необходимо подготовить отчет.');
    }
    dayNumber++;
}