//***********ДЗ№1 ********/
class PrintEditionItem {
  constructor(name, releaseDate, pageCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pageCount = pageCount;
    this.state = 100;
    this.type = null;
  }
  set setValuesState(setState) {
    if (setState <= 0) {
      this.state = 0;
    } else if (setState >= 100) {
      this.state = 100;
    } else {
      this.state = setState;
    }
  }
  fix() {
    this.state = this.state * 1.5;
    if (this.state > 100) {
      this.state = 100;
    }
    return this.state;
  }
  get getValuesState() {
    return this.state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pageCount, state) {
    super(name, releaseDate, pageCount, state);
    this.type = "Magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pageCount, state) {
    super(name, releaseDate, pageCount, state);
    this.author = author;
    this.type = "Book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pageCount, state) {
    super(author, name, releaseDate, pageCount, state);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pageCount, state) {
    super(author, name, releaseDate, pageCount, state);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pageCount, state) {
    super(author, name, releaseDate, pageCount, state);
    this.type = "detective";
  }
}

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);
const times = new Magazine("The Times", 2020, 36);
const ohBraveNewWorld = new FantasticBook(
  "Олдос Хаксли",
  "О дивный новый мир",
  1936,
  306
);

console.log(ohBraveNewWorld.type);
console.log(`Книга '${ohBraveNewWorld.name}' Автор ${ohBraveNewWorld.author}`);
const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);
console.log(picknick.author);
picknick.state = 10;
console.log(picknick.state);
picknick.fix();
console.log(picknick.state);

console.log(sherlock.releaseDate);
times.setValuesState = 40;
sherlock.fix();
console.log(times.getValuesState);
console.log(sherlock.state);

//***********ДЗ№2 ********/

class Library {
  constructor(nameOfLibrary) {
    this.name = nameOfLibrary;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    for (let i in this.books) {
      let book = this.books[i];
      for (let key in book) {
        if (key === type) {
          if (book[key] === value) {
            return book;
          }
        }
      }
    }
    return null;
  }
  giveBookByName(bookName) {
    const book = this.findBookBy("name", bookName);
    const indexBook = this.books.indexOf(book);
    if (indexBook > -1) {
      this.books.splice(indexBook, 1);
    }
    return book
    ;
  }
}
const library = new Library("Библиотека имени Ленина");
library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924).name);

console.log("Количество книг до выдачи: " + library.books.length);
library.giveBookByName("Машина времени");

console.log("Количество книг после выдачи: " + library.books.length);

/***********ДЗ№3********/
class StudentLog {
  constructor(name) {
    this.name = name;
    this.subjectsList = {};
  }
  get getName() {
    return this.name;
  }
  addGrade(grade, subject) {
    const subjects = this.subjectsList;
    let key = subject;
    let gradesList = [];
    const message = `Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`;
    if (!isNaN(grade)) {
      if (grade >= 1 && grade <= 5) {
        if (key in subjects) {
          subjects[subject].push(grade);
        } else {
          gradesList.push(grade);
          subjects[subject] = gradesList;
        }
        this.subjectsList = subjects;
        return this.subjectsList;
      } else {
        return console.log(message);
      }
    } else {
      return console.log(message);
    }
  }
  getAverageBySubject(subject) {
    const subjectsLog = this.subjectsList;
    let count = 0;
    let sum = 0;
    let average = 0;
    if (subject in subjectsLog) {
      let gradeList = subjectsLog[subject];
      for (let grade of gradeList) {
        sum = sum + grade;
        count++;
      }
    } else {
      return average;
    }
    average = sum / count;
    return average.toFixed(2);
  }
  getTotalAverage() {
    let totalSum = 0;
    let totalCount = 0;
    let totalAverage = 0;
    const log = this.subjectsList;
    for (let key in log) {
      const averageSubject = Number(this.getAverageBySubject(key));
      totalSum = totalSum + averageSubject;
      totalCount++;
    }
    if (totalCount > 0) {
      totalAverage = totalSum / totalCount;
    }
    return totalAverage;
  }
}
const student = new StudentLog("Олег Никифоров");
console.log(student.getName);
student.addGrade(3, "algebra");
student.addGrade(5, "algebra");
student.addGrade(3, "geometry");
student.addGrade(2, "geometry");
student.addGrade(5, "geometry");
console.log(student.subjectsList);
console.log(student.getAverageBySubject("algebra"));
console.log(student.getAverageBySubject("geometry"));
console.log(student.getTotalAverage());
/*console.log(library.books);*/
