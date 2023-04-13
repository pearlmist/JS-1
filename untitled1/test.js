function radius(x,y){
    return Math.sqrt(x**2 + y**2);
}

let n = prompt(`Введите число пар:`);
if (isNaN(parseInt(n)) || !isFinite(n) || +n < 1 || +n % 1 != 0)
    alert("Неверное число");
else {
    let max = 0;
    let cur = 0;
    for (let i = 0; i < +n; i++){
        x = Math.round((Math.random() * 1000) % 20 - 10);
        y = Math.round((Math.random() * 1000) % 20 - 10);
        cur = Math.round(radius(x, y)*1000)/1000;
        if (max < cur)
            max = cur;
        document.write(cur + ` - ${x} ${y}<br>`);

    }

    alert(max);
}