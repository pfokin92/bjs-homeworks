function getSolutions(a, b, c) {
    let Disc = b ** 2 - 4 * a * c;
    let answer = {};
    let rootsMass = [];
    answer.D = Disc;
    if (Disc < 0) {
        answer.roots = rootsMass;
    } else if (Disc == 0) {
        rootsMass[0] = (-b) / (2 * a);
        answer.roots = rootsMass;
    } else {
        rootsMass[0] = (-b - Math.sqrt(Disc)) / (2 * a);
        rootsMass[1] = (-b + Math.sqrt(Disc)) / (2 * a);
        answer.roots = rootsMass;
    }
    return answer;
}

function showSolutionsMessage(a, b, c) {
    const result = getSolutions(a, b, c);
    const message = `Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`;
    const message_str2 = `Значение дискриминанта: ${result.D}`;
    let message_str3 = "";
    if (result.D < 0) {
        message_str3 = `Уравнение не имеет вещественных корней`;
    } else if (result.D == 0) {
        message_str3 = `Уравнение имеет один корень X₁ = ${result.roots[0]}`;
    } else {
        message_str3 = `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
    }
    console.log(message);
    console.log(message_str2);
    return console.log(message_str3);
}
console.log(showSolutionsMessage(2, 4, 2));

//ДЗ №2

function getAverageScore(data) {
    let countGeneral = 0;
    let sumGeneral = 0;
    let dataNew = {};
    let averageGeneral = 0;
    for (let subject in data) {
        let values = data[subject];
        let averageOfSubject = getAverageMark(values);
        sumGeneral = sumGeneral + averageOfSubject;
        countGeneral++;
        dataNew[subject] = averageOfSubject;

    }
    if (countGeneral == 0) {
        dataNew.average = averageGeneral;
        return dataNew;
    }
    averageGeneral = sumGeneral / countGeneral;
    dataNew.average = averageGeneral;
    return dataNew;

}

function getAverageMark(marks) {
    let count = 0;
    let sum = 0;
    let average = 0;
    for (values of marks) {
        count++;
        sum = sum + values;
    }
    if (count == 0) {
        return average;
    }
    average = sum / count;
    return average;
}

console.log(getAverageScore({
    algebra: [4, 5, 5, 4],
    geometry: [2, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 5],
    english: [4, 4, 3, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}));

//ДЗ№3

function getPersonData(secretData) {
    let decodedData = {};
    for (let prop in secretData) {
        let value = getDecodedValue(secretData[prop]);
        if (prop === "aaa") {
            decodedData.firstName = value;
        } else if (prop === "bbb") {
            decodedData.lastName = value;
        }
    }
    return decodedData;
}

function getDecodedValue(secret) {
    let decodedStr = "";
    if (secret === 0) {
        decodedStr = "Родриго";
    } else if (secret === 1) {
        decodedStr = "Эмильо";
    }
    return decodedStr;
}

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));