let n = prompt(`Введите число:`);
if (isNaN(parseInt(n)) || !isFinite(n) || +n <= 2 || +n >= 15)
    alert("Неверное число");
else {
    let b = Math.round(100 / n);
    let h = Math.round((100 - b) / n);
    for (let i = 0; i < n; i++)
        document.write(`<hr width=${100 - h * i}<br>`);
    document.write(`<table border = "1" width = 40% cellpadding="20px" bgcolor = "FFFFFF" align="center">`);
    for (let i = 0; i < n; i++) {
        document.write(`<tr>`)
        for (let j = 0; j < n; j++) {
            document.write(`<td`)
            if ((j % 4 > 1 && i % 4 < 2) || (j % 4 < 2 && i % 4 > 1)) {
                document.write(`>`);
            }
            else document.write(` bgcolor="000000">`);
            document.write(`</td>`);
        }
        document.write(`</tr>`);
    }
    document.write(`</table>`);
    for (let i = n - 1; i >= 0; i--)
        document.write(`<hr width=${100 - h * i}<br>`);
}