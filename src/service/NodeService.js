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
        const response = await fetch('http://localhost/category/'); // Замените на реальный URL вашего сервера
        if(!response.ok){
          throw new Error('Ошибка HTTP:' + response.status);
        }
        console.log(response.data);
        const data = await response.data;
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
};