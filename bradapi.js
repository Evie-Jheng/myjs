
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
        let letter = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
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

/*
    猜數字-產生1組亂數
*/
function createAnswer(n = 3) {
    let poker = [];
    for (let i = 1; i < 10; i++) {
        poker[i - 1] = i; //1~9
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


/*
    驗證使用者輸入的數字
*/
function checkAB(ans, gus) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < gus.length; i++) {
        if (gus.charAt(i) == ans.charAt(i)) {
            a++;
        } else {
            let countMatch = ans.match(gus.charAt(i));
            if (countMatch != null) {
                b++;
            }
        }
    }

    return a + "A" + b + "B";

}

/*
    判斷是不是質數
*/
function judgePrime(num) {
    let isPrime = false;

    //若num 是 0 和 1 直接return false 
    if (num == 0 || num == 1) {
        return false;
    } else if (num == 2) {
        return true;
    } else {
        /*num除以2,3,4..... 直到num本身，
          若都沒有可以整除的數，
          表示num為質數
        */
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
                break;
            }
        }
        return true;
    }
}


/*
    將數字轉成國字
*/
function transferNumber(num) {
    let result = "";
    let transfer = ["零", "壹", "貳", "參", "肆", "伍", "陸", "柒", "捌", "玖", "拾"];

    for (let i = 0; i < num.length; i++) {
        let str = num.charAt(i);
        result += transfer[parseInt(str)];
    }
    return result;
}


/*
    產生一組身分證字號
 */
function generatorID(gender, place) {
    let letter = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    let placeNum = letter.indexOf(place) + 10;
    let n1 = parseInt(placeNum / 10);
    let n2 = placeNum % 10;

    let idNum = [];
    idNum[0] = n1;
    idNum[1] = n2;
    idNum[2] = parseInt(gender);

    //存入7個亂數
    for (let i = 3; i < 10; i++) {
        let rand = parseInt(Math.random() * 10);  //0~9
        idNum[i] = rand;
    }

    let sum = idNum[0] * 1 +
    idNum[1] * 9 +
    idNum[2] * 8 +
    idNum[3] * 7 +
    idNum[4] * 6 +
    idNum[5] * 5 +
    idNum[6] * 4 +
    idNum[7] * 3 +
    idNum[8] * 2 +
    idNum[9] * 1 

    if(sum % 10 == 0){
        idNum[10] = 0;
    }else{
        idNum[10] = 10 - (sum % 10);
    } 
    let str = place;


    for(let i = 2; i < idNum.length; i++){
        str += idNum[i] ;
    }
    return str;
}


/**
 * 
 * 複製
 */
function clone(source){
    if(typeof(source) != 'Object') return null;

    let target = new Object();
    for(let attr in source){
        target[attr] = source[attr];
    }
    return target;
}