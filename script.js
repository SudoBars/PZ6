document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';
document.body.style.marginTop = '50px';

// Контейнер для квадратів
const container = document.createElement('div');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.gap = '20px';
container.style.margin = '20px 0';
document.body.appendChild(container);

// Створення зеленого квадрату
const greenBox = document.createElement('div');
greenBox.id = 'green-box';
greenBox.textContent = 'Зелений';
greenBox.style.width = '150px';
greenBox.style.height = '150px';
greenBox.style.backgroundColor = 'green';
greenBox.style.color = 'white';
greenBox.style.display = 'flex';
greenBox.style.alignItems = 'center';
greenBox.style.justifyContent = 'center';
greenBox.style.border = '2px solid black';
greenBox.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.2)';
container.appendChild(greenBox);

// Створення червоного квадрату
const redBox = document.createElement('div');
redBox.id = 'red-box';
redBox.textContent = 'Червоний';
redBox.style.width = '150px';
redBox.style.height = '150px';
redBox.style.backgroundColor = 'red';
redBox.style.color = 'white';
redBox.style.display = 'flex';
redBox.style.alignItems = 'center';
redBox.style.justifyContent = 'center';
redBox.style.border = '2px solid black';
redBox.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.2)';
container.appendChild(redBox);

// Кнопка
const startButton = document.createElement('button');
startButton.textContent = 'Старт';
startButton.style.padding = '10px 20px';
startButton.style.marginTop = '20px';
startButton.style.fontSize = '16px';
startButton.style.backgroundColor = '#d3d3d3';
startButton.style.border = '1px solid black';
startButton.style.cursor = 'pointer';
startButton.addEventListener('mouseover', () => startButton.style.backgroundColor = '#bbb');
startButton.addEventListener('mouseout', () => startButton.style.backgroundColor = '#d3d3d3');
document.body.appendChild(startButton);

// Логіка зміни кольорів через сервер
startButton.addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:3000/swap-colors', { method: 'GET' });
    const data = await response.json();

    // Оновлення кольорів квадратів
    greenBox.textContent = data.green.text;
    greenBox.style.backgroundColor = data.green.color;

    redBox.textContent = data.red.text;
    redBox.style.backgroundColor = data.red.color;
  } catch (error) {
    console.error('Помилка при зміні кольорів:', error);
  }
});
