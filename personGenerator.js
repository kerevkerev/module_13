const personGenerator = {
  surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
  firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
  firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Мария",
            "id_2": "Дарья",
            "id_3": "Глаша",
            "id_4": "Фаина",
            "id_5": "Виктория",
            "id_6": "Таисия",
            "id_7": "Юлия",
            "id_8": "Кристина",
            "id_9": "Олеся",
            "id_10": "Нина"
        }
    }`,
  patronymicFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитична",
            "id_7": "Михайловна",
            "id_8": "Даниловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,

  professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Повар",
            "id_2": "Швея",
            "id_3": "Врач",
            "id_4": "Учитель",
            "id_5": "Бухгалтер",
            "id_6": "Экономист",
            "id_7": "Переводчик",
            "id_8": "Космитолог",
            "id_9": "Массажист",
            "id_10": "Няня"
        }
    }`,
  professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Строитель",
            "id_2": "Инженер",
            "id_3": "Пожарный",
            "id_4": "Полицейский",
            "id_5": "Охранник",
            "id_6": "Спасатель",
            "id_7": "Энергетик",
            "id_8": "Слесарь",
            "id_9": "Сварщик",
            "id_10": "Лодырь"
        }
    }`,

  GENDER_MALE: "Мужчина",
  GENDER_FEMALE: "Женщина",

  randomIntNumber: (max = 1, min = 0) =>
    Math.floor(Math.random() * (max - min + 1) + min),

  randomValue: function (json) {
    const obj = JSON.parse(json);
    const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
    return obj.list[prop];
  },

  // генерация имени и отчества
  randomFirstName: function () {
    if (this.person.gender == "Мужчина") {
      return `${
        this.randomValue(this.firstNameMaleJson) +
        " " +
        this.randomValue(this.firstNameMaleJson)
      }ович`;
    } else {
      return `${
        this.randomValue(this.firstNameFemaleJson) +
        " " +
        this.randomValue(this.patronymicFemaleJson)
      }`;
    }
  },

  // генерация фамилии
  randomSurname: function () {
    if (this.person.gender == "Женщина") {
      return `${this.randomValue(this.surnameJson)}а`;
    } else {
      return this.randomValue(this.surnameJson);
    }
  },
  // генерация пола
  randomGender: function () {
    return this.randomIntNumber() == 1
      ? personGenerator.GENDER_MALE
      : personGenerator.GENDER_FEMALE;
  },

  // генерация профессии
  randomProfession: function () {
    if (this.person.gender == "Женщина") {
      return `${this.randomValue(this.professionFemaleJson)}`;
    } else {
      return this.randomValue(this.professionMaleJson);
    }
  },

  // генерация даты рождения
  randomBirthYear: function () {
    function getRandomFloat(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    let year = getRandomFloat(1921, 2021);
    let arrMonth = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    let month = arrMonth[getRandomFloat(1, 12)];
    let day;
    if (
      month === "апреля" ||
      month === "июня" ||
      month === "сентября" ||
      month === "ноября"
    ) {
      day = getRandomFloat(1, 30);
    } else {
      day = getRandomFloat(1, 31);
    }
    if (
      year % 4 != 0 ||
      (year % 100 == 0 && year % 400 != 0 && month === "февраля")
    ) {
      day = getRandomFloat(1, 28);
    }
    return `${day + " " + month + " " + year+' г.'}`;
  },

  getPerson: function () {
    this.person = {};
    this.person.gender = this.randomGender();
    this.person.firstName = this.randomFirstName();
    this.person.surnameName = this.randomSurname();
    this.person.profession = this.randomProfession();
    this.person.birthYear = this.randomBirthYear();
    return this.person;
  },
};

