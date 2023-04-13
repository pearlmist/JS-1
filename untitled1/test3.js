function sum(text) {
    let ans = "";
    text = text.trim();
    if (text == "")
        return 0;
    let ind = 0;
    let substr = "";
    text += " ";
    let sum = 0;
    while (ind >= 0){
        ind = text.indexOf(" ");
        if (ind < 0)
            break;
        substr = text.substring(0, ind);
        text = text.substring(ind + 1);
        text = text.trimLeft();
        ans = "";
        if (substr[0] >= "0" && substr[0] <= "9")
            ans = substr;
        if (isNaN(ans) || !isFinite(ans) || Number(ans) < 10 || Number(ans) > 99)
            continue;
        ans = +ans;
        sum += ans;
    }
    return sum;
}

let text = "fd fde htr bb";
document.write(sum(text));