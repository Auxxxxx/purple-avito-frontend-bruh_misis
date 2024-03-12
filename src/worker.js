self.addEventListener('message', e => {
    // Получаем данные о дереве из основного потока
    const treeData = e.data;

    // Обрабатываем данные, например, вызываем функцию для отрисовки узлов дерева
    const processedData = processData(treeData);

    // Отправляем обратно результаты в основной поток
    self.postMessage(processedData);

    console.log(e.data);
});

function processData(treeData) {
    // Здесь вы можете выполнить необходимую обработку данных
    // Например, вызов функции для отрисовки узлов дерева
    // И возврат обработанных данных
}
