/*
Отримання та відображення завдання з API:
Редагувати App компонент, 
який виконує запит до API https://jsonplaceholder.typicode.com/todos/1
і відображає дані завдання.

Вимоги:
- Використати useEffect для виконання запиту при першому рендері компонента.
- Створити три стани за допомогою useState:
    - task — для збереження отриманого завдання;
    - error — для обробки помилок при запиті;
    - loading — для індикації завантаження даних.
- Відобразити:
    - повідомлення про завантаження, коли loading === true;
    - повідомлення про помилку, якщо error не порожній;
    - інформацію про завдання, коли task успішно отриманий.
- Використати fetch для запиту до API.
*/

import React from 'react'
import './App.css'

function App() {

  const [task, setTask] = React.useState(null);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Не вдалося отримати дані з сервера');
        }
        return response.json();
      })
      .then(data => {
        setTask(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || 'Сталася помилка при завантаженні');
        setLoading(false);
      });

  }, []);
  
  return (<div className='container'>
   <div className="card">
        <h1>React Homework</h1>

        {loading && <p>Завантаження завдання...</p>}

        {error && <p className="error">Помилка: {error}</p>}

        {task && !loading && !error && (
          <div className="task">
            <h2>Завдання #{task.id}</h2>
            <h3>{task.title}</h3>
            <p>
              <strong>Статус:</strong>{' '}
              {task.completed ? (
                <span style={{ color: 'green' }}>Виконано</span>
              ) : (
                <span style={{ color: 'orange' }}>Не виконано</span>
              )}
            </p>
            <p><strong>Користувач ID:</strong> {task.userId}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

