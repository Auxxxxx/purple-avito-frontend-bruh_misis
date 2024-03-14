// import axios from "axios";
export const NodeService = {

    getTreeNodesDataLocation(){
      return [
        { 
          "key": 0,
          "label": "Все локации",
          "children": [
          {
            "key": 1,
            "label": "Адыгея",
            "children": [
              { "key": 2, "label": "Тахтамукай" },
              { "key": 3, "label": "Тлюстенхабль" },
              { "key": 4, "label": "Хакуринохабль" },
              { "key": 5, "label": "Хатукай" },
              { "key": 6, "label": "Ходзь" },
              { "key": 7, "label": "Энем" },
              { "key": 8, "label": "Яблоновский" },
              { "key": 9, "label": "Ханская" },
              { "key": 10, "label": "Тульский" },
              { "key": 11, "label": "Абадзехская" },
              { "key": 12, "label": "Адыгейск" },
              { "key": 13, "label": "Белое" },
              { "key": 14, "label": "Блечепсин" },
              { "key": 15, "label": "Вольное" },
              { "key": 16, "label": "Гиагинская" },
              { "key": 17, "label": "Дондуковская" },
              { "key": 18, "label": "Каменномостский" },
              { "key": 19, "label": "Кошехабль" },
              { "key": 20, "label": "Красногвардейское" },
              { "key": 21, "label": "Краснооктябрьский" },
              { "key": 22, "label": "Кужорская" },
              { "key": 23, "label": "Майкоп" },
              { "key": 24, "label": "Натырбово" },
              { "key": 25, "label": "Понежукай" },
              { "key": 26, "label": "Северо-Восточные Сады" }
            ]
          },
          {
            "key": 27,
            "label": "Алтайский край",
            "children": [
              { "key": 28, "label": "Крутиха" },
              { "key": 29, "label": "Курья" },
              { "key": 30, "label": "Кытманово" },
              { "key": 31, "label": "Лебяжье" },
              { "key": 32, "label": "Леньки" },
              { "key": 33, "label": "Малиновое Озеро" },
              { "key": 34, "label": "Мамонтово" },
              { "key": 35, "label": "при ст. Озерки" },
              { "key": 36, "label": "Троицкое" },
              { "key": 37, "label": "Затон" },
              { "key": 38, "label": "Нагорный" },
              { "key": 39, "label": "Новосиликатный" },
              { "key": 40, "label": "Сорокино" },
              { "key": 41, "label": "Калманка" },
              { "key": 42, "label": "Славгородское" },
              { "key": 43, "label": "Павловск" },
              { "key": 44, "label": "Озерки" },
              { "key": 45, "label": "Новые Зори" },
              { "key": 46, "label": "Баево" },
              { "key": 47, "label": "Веселоярск" },
              { "key": 48, "label": "Первомайское" },
              { "key": 49, "label": "Яровое" },
            ]
          },
        ]
        }
      ];
    },

    getTreeNodesDataCategory(){
      return [
          {
            "key": 1,
            "label": "Все категории",
            "children": [
              {
                "key": 2,
                "label": "Бытовая электроника",
                "children": [
                  { "key": 3, "label": "Товары для компьютера" },
                  { "key": 4, "label": "Фототехника" },
                  { "key": 5, "label": "Телефоны" },
                  { "key": 6, "label": "Планшеты и электронные книги" },
                  { "key": 7, "label": "Оргтехника и расходники" },
                  { "key": 8, "label": "Ноутбуки" },
                  { "key": 9, "label": "Настольные компьютеры" },
                  { "key": 10, "label": "Игры, приставки и программы" },
                  { "key": 11, "label": "Аудио и видео" }
                ]
              },
              {
                "key": 12,
                "label": "Готовый бизнес и оборудование",
                "children": [
                  { "key": 13, "label": "Готовый бизнес" },
                  { "key": 14, "label": "Оборудование для бизнеса" }
                ]
              },
              {
                "key": 15,
                "label": "Для дома и дачи",
                "children": [
                  { "key": 16, "label": "Мебель и интерьер" },
                  { "key": 17, "label": "Ремонт и строительство" },
                  { "key": 18, "label": "Продукты питания" },
                  { "key": 19, "label": "Растения" },
                  { "key": 20, "label": "Бытовая техника" },
                  { "key": 21, "label": "Посуда и товары для кухни" }
                ]
              },
              {
                "key": 22,
                "label": "Животные",
                "children": [
                  { "key": 23, "label": "Другие животные" },
                  { "key": 24, "label": "Товары для животных" },
                  { "key": 25, "label": "Птицы" },
                  { "key": 26, "label": "Аквариум" },
                  { "key": 27, "label": "Кошки" },
                  { "key": 28, "label": "Собаки" }
                ]
              },
              {
                "key": 29,
                "label": "Личные вещи",
                "children": [
                  { "key": 30, "label": "Детская одежда и обувь" },
                  { "key": 31, "label": "Одежда, обувь, аксессуары" },
                  { "key": 32, "label": "Товары для детей и игрушки" },
                  { "key": 33, "label": "Часы и украшения" },
                  { "key": 34, "label": "Красота и здоровье" }
                ]
              },
              {
                "key": 35,
                "label": "Недвижимость",
                "children": [
                  { "key": 36, "label": "Недвижимость за рубежом" },
                  { "key": 37, "label": "Квартиры" },
                  { "key": 38, "label": "Коммерческая недвижимость" },
                  { "key": 39, "label": "Гаражи и машиноместа" },
                  { "key": 40, "label": "Земельные участки" },
                  { "key": 41, "label": "Дома, дачи, коттеджи" },
                  { "key": 42, "label": "Комнаты" }
                ]
              },
              {
                "key": 43,
                "label": "Работа",
                "children": [
                  { "key": 44, "label": "Резюме" },
                  { "key": 45, "label": "Вакансии" }
                ]
              },
              {
                "key": 46,
                "label": "Транспорт",
                "children": [
                  { "key": 47, "label": "Автомобили" },
                  { "key": 48, "label": "Запчасти и аксессуары" },
                  { "key": 49, "label": "Грузовики и спецтехника" },
                  { "key": 50, "label": "Водный транспорт" },
                  { "key": 51, "label": "Мотоциклы и мототехника" }
                ]
              },
              {
                "key": 52,
                "label": "Услуги",
                "children": [
                  { "key": 53, "label": "Предложения услуг" }
                ]
              },
              {
                "key": 54,
                "label": "Хобби и отдых",
                "children": [
                  { "key": 55, "label": "Охота и рыбалка" },
                  { "key": 56, "label": "Спорт и отдых" },
                  { "key": 57, "label": "Коллекционирование" },
                  { "key": 58, "label": "Книги и журналы" },
                  { "key": 59, "label": "Велосипеды" },
                  { "key": 60, "label": "Музыкальные инструменты" },
                  { "key": 61, "label": "Билеты и путешествия" }
                ]
              }
            ]
          } 
      ];
    },


  // TODO: ДОЛЖНЫ БЫЛИ БРАТЬ ДАННЫЕ ИЗ СЕРВЕРА, НО ЧТО-ТО ПОШЛО НЕ ТАК... НЕ РУГАЙТЕСЬ СИЛЬНО, ПОЖАЛУЙСТА🥺
  // async getTreeNodesDataLocation() {
  //     try {
  //         const response = await fetch('http://localhost/location'); 
  //         if(!response.ok){
  //           throw new Error('Ошибка HTTP:' + response.status);
  //         }
  //         const data = await response.json();
  //         console.log(data)
  //         return [data];
  //     } catch (error) {
  //         console.error('Error fetching tree nodes:', error);
  //         return [];
  //     }
  // },

  // async getTreeNodesDataCategory() {
  //   try {
  //       const response = await axios.get('http://localhost/category/');
  //       if(!response.status){
  //         throw new Error('Ошибка HTTP:' + response.status);
  //       }
  //       const data = await response.data;
  //       const stringifiedData = data.prototype.map(obj => stringifyKeys(obj));
  //       console.log(stringifiedData);
  //       console.log(data);
  //       console.log(typeof data);
  //       return [data];
  //   } catch (error) {
  //       console.error('Error fetching tree nodes:', error);
  //       return [];
  //   }
  // },

  // async getNodeChildren(id) {
  //   try {
  //       const response = await fetch(`http://localhost/category/${id}`); 
  //       if(!response.ok){
  //         throw new Error('Ошибка HTTP:' + response.status);
  //       }
  //       const data = await response.data;
  //       console.log(data);
  //       return [data];
  //   } catch (error) {
  //       console.error('Error fetching tree nodes:', error);
  //       return [];
  //   }
  // },

  getTreeNodesCategory() {
    return Promise.resolve(this.getTreeNodesDataCategory());
  },

  getTreeNodesLocation() {
    return Promise.resolve(this.getTreeNodesDataLocation());
  },
};