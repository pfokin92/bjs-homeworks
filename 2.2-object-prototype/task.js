String.prototype.isPalindrome = function checkPalindrome() {
    let message = this.toLowerCase();
    let result = false;
    mess = message;
    message = message.replace(/\s/g, '');
    message = message.split('');
    messageReverse = message.reverse();
    message = message.join('');
    messageReverse = messageReverse.join('');
    if (mess === messageReverse) {
        result = true;
    }
    return result;
}
console.log("sssaaa".isPalindrome())


function getAverageMark(marks) {
    let count = 0;
    let sum = 0;
    let averageMark = 0;
    for (let value of marks) {
        count++;
        sum = sum + value;
    }
    averageMark = sum / count;
    return averageMark;
}

function checkBirthday(birthday) {
    const dateNow = new Date();
    const dateOfBirthday = new Date(birthday);
    let verdict = false;
    let diff = dateNow - dateOfBirthday;
    let diffYear = diff / (1000 * 3600 * 24 * 365.242);
    if (diffYear >= 18) {
        verdict = true;
    }
    return verdict;
}