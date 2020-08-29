function calculateTotalMortgage(percent, contribution, amount, date) {
    let message = "";
    let dateNow = new Date();
    if (isNaN(percent)) {
        message = message + `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (isNaN(contribution)) {
        message = message + `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`
    } else if (isNaN(amount)) {
        message = message + `Параметр "Общая стоимость" содержит неправильное значение ${amount}`
    }
    if (message.length > 0) {
        return message;
    }
    // рассчет срока кредита в месяцах возможно лучше этот расцет объеденить в отдельныю функцию
    let d1Y = dateNow.getFullYear();
    let d2Y = date.getFullYear();
    let d1M = dateNow.getMonth();
    let d2M = date.getMonth();
    let loanTermInMonth = (d2M - d1M) + 12 * (d2Y - d1Y); // кол-во месяцев
    let S = amount - contribution; //сумма кредита
    let P = percent / (12 * 100); //начисления за месяц 
    let monthlyFee = S * (P + P / (((1 + P) ** loanTermInMonth) - 1))
    let totalAmount = monthlyFee * loanTermInMonth;
    return totalAmount.toFixed(2);
}

function getGreeting(name) {
    let forChange;
    if (!isNaN(name)) {
        forChange = "Аноним";
    } else {
        forChange = String(name);
    }
    let greeting = `Привет, мир! Меня зовут ${forChange}`;
    return greeting;
}