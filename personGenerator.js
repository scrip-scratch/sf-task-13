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
            "id_1": "Александра",
            "id_2": "Марина",
            "id_3": "Ирина",
            "id_4": "Анна",
            "id_5": "Диана",
            "id_6": "Нина",
            "id_7": "Милана",
            "id_8": "Дарья",
            "id_9": "Елена",
            "id_10": "Анастасия"
        }
    }`,
    professionsJson: `{
        "count": 10,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Солдат",
            "id_3": "Шахтер",
            "id_4": "Балерина",
            "id_5": "Актрисса",
            "id_6": "Медсестра",
            "id_7": "Архитектор",
            "id_8": "Повар",
            "id_9": "Программист",
            "id_10": "Учитель"
        }
    }`,
    

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        // возвращаем объект сразу с двумя именами, мужским и женским
        // (!) не думаю, что это лучшее решение, но наиболее простое из придуманных
        // буду признателен комментарию по поводу этого варианта решения 
        return {
            maleName: this.randomValue(this.firstNameMaleJson), 
            femaleName: this.randomValue(this.firstNameFemaleJson)
        };

    },

    randomSurname: function() {

        return this.randomValue(this.surnameJson);

    },

    randomGender: function() {
        // генерируем рандомное value, если value четное - мучжина, если нет женщина
        const value = this.randomIntNumber(0,10);
        if(value % 2 == 0){ 
            return this.GENDER_MALE;
        } else {return this.GENDER_FEMALE;
        }
    },

    randomBirthDate: function() {
        const year = this.randomIntNumber(1900, 2021);

        const monthes = [
            'январь',
            'февраль',
            'март',
            'апрель',
            'май',
            'июнь',
            'июль',
            'август',
            'сентябрь',
            'октябрь',
            'ноябрь',
            'декабрь'
        ];
        let month = monthes[this.randomIntNumber(-1, 11)];
        if(month == 'март' || month == 'август'){
            month = month + 'а';
        } else {month = month.slice(0, -1) + 'я';
        }

        let day;
        if(month == 'январь' || month == 'март' || month == 'май' || month == 'июль' || month == 'август' || month == 'октябрь' || month == 'декабрь'){
            day = this.randomIntNumber(0, 31);
        } else if(month == 'апрель' || month == 'июнь' || month == 'сентябрь' || month == 'ноябрь'){
            day = this.randomIntNumber(0, 30);
        } else {
            // проверяем високосный ли год
            if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
                day = this.randomIntNumber(0, 29);
            } else {
                day = this.randomIntNumber(0, 28);
            }; 
        }
        const date = day + ' ' + month + ' ' + year;

        return date;                        
    },



    getPerson: function () {
        this.person = {};
        // генерируем пол
        this.person.gender = this.randomGender();
        // генерируем имя
        if(this.person.gender == 'Мужчина'){
            this.person.firstName = this.randomFirstName().maleName;
            this.person.surname = this.randomSurname();
        } else {
            this.person.firstName = this.randomFirstName().femaleName;
            this.person.surname = this.randomSurname() + 'а';
        }
        // генерируем дату рождения
        this.person.birthDate = this.randomBirthDate();
        // генерируем отчество
        this.person.middleName = '';
        let fatherName = this.randomFirstName().maleName;
        if(this.person.gender == 'Мужчина'){            
            if(fatherName.substr(-2) == 'ий'){
                this.person.middleName = fatherName.slice(0, -1) + 'евич';
            } else if(fatherName.substr(-2) == 'ей'){
                this.person.middleName = fatherName.slice(0, -1) + 'вич';
            } else if(fatherName.substr(-1) == 'а'){
                this.person.middleName = fatherName.slice(0, -1) + 'ич';
            } else {
                this.person.middleName = fatherName + 'ович';
            }
        } else {
            if(fatherName.substr(-2) == 'ий'){
                this.person.middleName = fatherName.slice(0, -1) + 'евна';
            } else if(fatherName.substr(-2) == 'ей'){
                this.person.middleName = fatherName.slice(0, -1) + 'евна';
            } else if(fatherName.substr(-1) == 'а'){
                this.person.middleName = fatherName.slice(0, -1) + 'ична';
            } else {
                this.person.middleName = fatherName + 'овна';
            }
        }
        // генерируем профессию
        // создаем массив из всех профессий
        let professions = Object.values(JSON.parse(this.professionsJson).list); 
        // создаем массивы мужских и женских профессий
        let maleProfessions = professions.filter(item => item != 'Балерина' && item != 'Медсестра' && item != 'Актрисса');
        let femaleProfessions = professions.filter(item => item != 'Солдат' && item != 'Слесарь' && item != 'Шахтер');
        this.person.profession = '';
        if(this.person.gender == 'Мужчина'){
            this.person.profession = maleProfessions[this.randomIntNumber(-1, maleProfessions.length)];
        } else {
            this.person.profession = femaleProfessions[this.randomIntNumber(-1, femaleProfessions.length)];
        }

        return this.person;
    }
};
