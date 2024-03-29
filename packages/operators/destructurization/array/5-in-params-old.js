/**
 *? Деструктуризация массива в параметрах функции. Без деструктуризации
 */

function describePoint(point) {
  const x = point[0];
  const y = point[1];
  const z = point[2] || 0;

  console.log(
    "С новым синтаксисом:\n",
    `Точка с координатами X: ${x}, Y: ${y}, Z: ${z}`
  );
}

describePoint([10, 20]); // Точка с координатами X: 10, Y: 20, Z: 0
describePoint([5, 12, 7]); // Точка с координатами X: 5, Y: 12, Z: 7