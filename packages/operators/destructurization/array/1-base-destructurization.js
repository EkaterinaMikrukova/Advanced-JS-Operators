/**
 *? Деструктуризация массива
 */
const arr = [0.1, 0.3, 0.5];

const [x, y, z] = arr;

console.log("Деструктуризация массива", x, y, z); // 0.1 0.3 0.5

// Определение массива координат треугольника
const triangleCoordinates = [
  [0.0, 1.0], // Вершина вверху
  [-1.0, -1.0], // Левая нижняя вершина
  [1.0, -1.0], // Правая нижняя вершина
];

// Итерация по массиву координат и вывод в консоль
triangleCoordinates.forEach(([x, y]) => {
  console.log(`Координаты вершины: X=${x}, Y=${y}`);
});