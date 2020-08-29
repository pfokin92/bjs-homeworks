function getResult(a, b, c) {
    let D = b ** 2 - 4 * a * c;
    let answer = new Array(2);
    if (D < 0) {
        return answer;
    } else if (D == 0) {
        answer[0] = -b / (2 * a);
        return answer;
    } else {
        answer[0] = (-b - Math.sqrt(D)) / (2 * a);
        answer[1] = (-b + Math.sqrt(D)) / (2 * a);
        return answer;
    }
}

function getAverageMark(marks) {
    let count = 0;
    let sum = 0;
    let average = 0;
    let copyMarks = [];
    if (marks.length <= 5) {
        copyMarks = marks;
    } else {
        copyMarks = marks.slice(0, 5);
    }
    for (let i = 0; i < copyMarks.length; i++) {
        if (copyMarks[i] > 0) {
            count++;
            sum = sum + copyMarks[i];
        }
    }
    average = sum / count;
    return average;
}

function askDrink(name, dateOfBirthday) {
    let yearOfBirthday = dateOfBirthday.getFullYear();
    let date = new Date();
    let yearNow = date.getFullYear();
    let message;
    let age = yearNow - yearOfBirthday;
    if (age > 18) {
        message = `Не желаете ли олд-фэшн, ${name}?`;
    } else if (age < 18) {
        message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    } else if (age == 18) {
        let monthNow = date.getMonth();
        let monthOfBirthday = dateOfBirthday.getMonth();
        if (monthOfBirthday < monthNow) {
            message = `Не желаете ли олд-фэшн, ${name}?`;
        } else if (monthOfBirthday > monthNow) {
            message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
        } else if (monthNow == monthOfBirthday) {
            let dayNow = date.getDate();
            let dayOfBirthday = dateOfBirthday.getDate();
            if (dayOfBirthday <= dayNow) {
                message = `Не желаете ли олд-фэшн, ${name}?`;
            } else if (dayOfBirthday > dayNow) {
                message = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
            }
        }
    }
    return message;
}