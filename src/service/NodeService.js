import axios from "axios";
export const NodeService = {
  
  async getTreeNodesDataLocation() {
      try {
          const response = await fetch('http://localhost/location/2'); // Замените на реальный URL вашего сервера
          if(!response.ok){
            throw new Error('Ошибка HTTP:' + response.status);
          }
          const data = await response.json();
          console.log(data)
          return [data];
      } catch (error) {
          console.error('Error fetching tree nodes:', error);
          return [];
      }
  },

  async getTreeNodesDataCategory() {
    try {
        const response = await axios.get('http://localhost/category/'); // Замените на реальный URL вашего сервера
        if(!response.status){
          throw new Error('Ошибка HTTP:' + response.status);
        }
        const data = await response.data;
        const stringifiedData = data.prototype.map(obj => stringifyKeys(obj));
        console.log(stringifiedData);
        console.log(data);
        console.log(typeof data);
        return [data];
    } catch (error) {
        console.error('Error fetching tree nodes:', error);
        return [];
    }
  },

  // async getNodeChildren(id) {
  //   try {
  //       const response = await fetch(`http://localhost/category/${id}`); // Замените на реальный URL вашего сервера
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

  async getTreeNodesCategory() {
    return Promise.resolve(await this.getTreeNodesDataCategory());
  },

  getTreeNodesLocation() {
    return Promise.resolve(this.getTreeNodesDataLocation());
  },

  stringifyKeys(obj) {
    // Проверяем, является ли obj объектом
    if (typeof obj === 'object' && obj !== null) {
        // Обходим все ключи объекта
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // Преобразуем ключ в строку
                const stringKey = String(key);
                // Если значение по ключу также является объектом, рекурсивно преобразуем его ключи
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    obj[stringKey] = stringifyKeys(obj[key]);
                } else {
                    // Если значение не является объектом, оставляем его без изменений
                    obj[stringKey] = obj[key];
                }
                // Если ключ был преобразован, удаляем старый ключ
                if (key !== stringKey) {
                    delete obj[key];
                }
            }
        }
    }
    return obj;
  }
};