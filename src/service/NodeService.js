export const NodeService = {
  
  async getTreeNodesData() {
      try {
          const response = await fetch('http://localhost/location/2'); // Замените на реальный URL вашего сервера
          if(!response.ok){
            throw new Error('Ошибка HTTP:' + response.status);
          }
          const data = await response.json();
          console.log(data)
          return data;
      } catch (error) {
          console.error('Error fetching tree nodes:', error);
          return [];
      }
  },
  // async getTreeNodesData(){
  // return [
  //   {
  //     "children": [
  //       {
  //         "key": "0-0",
  //         "label": "Адыгея",
  //         "data": "Адыгея",
  //         "children": [
  //           {
  //             "key": "0-0-0",
  //             "label": "Тахтамукай",
  //             "data": "Тахтамукай"
  //           },
  //           {
  //             "key": "0-0-1",
  //             "label": "Тлюстенхабль",
  //             "data": "Тлюстенхабль"
  //           },
  //           {
  //             "key": "0-0-2",
  //             "label": "Хакуринохабль",
  //             "data": "Хакуринохабль"
  //           },
  //           {
  //             "key": "0-0-3",
  //             "label": "Хатукай",
  //             "data": "Хатукай"
  //           },
  //           {
  //             "key": "0-0-4",
  //             "label": "Ходзь",
  //             "data": "Ходзь"
  //           }
  //         ]
  //       },
  //       {
  //         "key": "0-1",
  //         "label": "Алтайский край",
  //         "data": "Алтайский край",
  //         "children": [
  //           {
  //             "key": "0-1-0",
  //             "label": "Крутиха",
  //             "data": "Крутиха"
  //           },
  //           {
  //             "key": "0-1-1",
  //             "label": "Курья",
  //             "data": "Курья"
  //           },
  //           {
  //             "key": "0-1-2",
  //             "label": "Кытманово",
  //             "data": "Кытманово"
  //           },
  //           {
  //             "key": "0-1-3",
  //             "label": "Лебяжье",
  //             "data": "Лебяжье"
  //           },
  //           {
  //             "key": "0-1-4",
  //             "label": "Леньки",
  //             "data": "Леньки"
  //           }
  //         ]
  //         }
  //       ]
  //     }
  //   ]
  // }
};