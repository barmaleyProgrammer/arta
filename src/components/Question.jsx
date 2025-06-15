export default function Question({ data, onAnswer, step, total, selectedAnswer }) {
  const LETTERS = ['А', 'Б', 'В', 'Г', 'Д'];
  // console.log(data);
  return (
    <div style={{ padding: 20 }}>
      {/* Назва групи */}
      {data.group && (
        <h3 style={{ marginBottom: 10, color: '#2c3e50' }}>
          {data.group}
        </h3>
      )}

      <h2>Питання {step + 1} з {total}</h2>
      <p>{data.question}</p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {data.options.map((option, index) => (
          <li key={index} style={{ marginBottom: 10 }}>
            <button
              onClick={() => onAnswer(index)}
              style={{
                padding: '10px 20px',
                backgroundColor: selectedAnswer === index ? '#cce5ff' : '#f0f0f0',
                border: selectedAnswer === index ? '2px solid #3399ff' : '1px solid #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left',
              }}
            >
              <strong>{LETTERS[index]}.</strong> {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
