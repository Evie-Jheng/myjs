
/*
驗證身份證字號
    檢查身分證字號
    總共十碼
    第一個字大寫英文
    後面9個數字
    第二個字1 || 2
*/
function checkTWId(id) {
    let reqex = /^[A-Z][12][0-9]{8}$/;
    let result = id.match(reqex);
    let ret = false;

    if (result != null) {
        let letter = 'ABCDEFGHJKLMNPQTUVXYWZIO';
        let c12 = id.substr(0, 1);
        let n12 = letter.indexOf(c12) + 10;
        let n1 = parseInt(n12 / 10);
        let n2 = n12 % 10;
        let n3 = parseInt(id.substr(1, 1));
        let n4 = parseInt(id.substr(2, 1));
        let n5 = parseInt(id.substr(3, 1));
        let n6 = parseInt(id.substr(4, 1));
        let n7 = parseInt(id.substr(5, 1));
        let n8 = parseInt(id.substr(6, 1));
        let n9 = parseInt(id.substr(7, 1));
        let n10 = parseInt(id.substr(8, 1));
        let n11 = parseInt(id.substr(9, 1));

        let sum = n1 * 1 + n2 * 9 + n3 * 8 + n4 * 7 + n5 * 6 +
            n6 * 5 + n7 * 4 + n8 * 3 + n9 * 2 + n10 * 1 + n11 * 1;

        ret = sum % 10 == 0;
    }
    return ret;
}




function createAnswer(n = 3) {
    let poker = [];
    for (let i = 0; i < 10; i++) {
        poker[i] = i;
    }
    //打亂數字
    for (let i = poker.length - 1; i > 0; i--) {
        let rand = parseInt(Math.random() * (i + 1));
        [poker[i], poker[rand]] = [poker[rand], poker[i]];
    }
    let ret = '';
    for (let i = 0; i < n; i++) ret += poker[i];
    return ret;
}