import html2pdf from 'html2pdf.js';
import { useRef } from 'react';
import Footer from "./Footer";

export default function Result({ questions, answers, onRestart, userName }) {
  const resultRef = useRef();

  const today = new Date().toLocaleDateString();

  // 🔸 Групування результатів
  const grouped = {};
  questions.forEach((q, i) => {
    const group = q.group || 'Без групи';
    const isCorrect = q.correct.includes(answers[i]);

    if (!grouped[group]) {
      grouped[group] = { total: 0, correct: 0 };
    }

    grouped[group].total += 1;
    if (isCorrect) grouped[group].correct += 1;
  });

  const correctCount = Object.values(grouped).reduce((sum, g) => sum + g.correct, 0);
  const totalQuestions = questions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  const handleDownloadPDF = () => {
    const element = resultRef.current;

    const opt = {
      margin: 0.5,
      filename: `Сертифікат_${userName}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <div style={{flex: 1, padding: 20, textAlign: "center"}}>
          {/* Сертифікат */}
          <div ref={resultRef} style={{
            fontFamily: 'Arial, sans-serif',
            border: '2px solid #2e2e2e',
            padding: 40,
            maxWidth: 600,
            margin: 'auto',
            backgroundColor: '#ffffff',
            position: 'relative',
            color: '#111'
          }}>
            {/* Логотип */}
            <img
                src="images/dpsu.jpg"
                alt="Логотип ДПСУ"
                style={{
                  width: 60,
                  position: 'absolute',
                  top: 20,
                  left: 20
                }}
            />

            <h1 style={{
              textAlign: 'center',
              fontSize: 28,
              marginTop: 0,
              marginBottom: 20,
              textTransform: 'uppercase',
              letterSpacing: 1
            }}>
              Сертифікат
            </h1>

            <p style={{textAlign: 'center', fontSize: 16, marginBottom: 10}}>
              Цей сертифікат підтверджує, що
            </p>

            <h2 style={{
              textAlign: 'center',
              fontSize: 22,
              margin: 10,
              textDecoration: 'underline'
            }}>
              {userName}
            </h2>

            <p style={{textAlign: 'center', fontSize: 16}}>
              успішно пройшов(ла) тестування з результатом:
            </p>

            <p style={{
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 10
            }}>
              {correctCount} з {totalQuestions} ({percentage}%)
            </p>

            {/* 🔸 Блок результатів по групах */}
            <div style={{marginTop: 30}}>
              <p style={{textAlign: 'center', fontWeight: 'bold', marginBottom: 10}}>Результати по темах:</p>
              <ul style={{listStyle: 'none', padding: 0, fontSize: 14}}>
                {Object.entries(grouped).map(([group, data]) => (
                    <li key={group} style={{marginBottom: 4}}>
                      <strong>{group}:</strong> {data.correct} / {data.total}
                    </li>
                ))}
              </ul>
            </div>

            <p style={{textAlign: 'center', marginTop: 30}}>
              Дата: {today}
            </p>

            {/* Підпис і печатка */}
            <div style={{
              marginTop: 50,
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 20px'
            }}>
              <div>____________________<br/>Підпис</div>
              <div>____________________<br/>Печатка / Посада</div>
            </div>
          </div>

          {/* Кнопки */}
          <button onClick={handleDownloadPDF} style={{
            marginTop: 20,
            padding: '10px 24px',
            backgroundColor: '#28a745',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}>
            🧾 Завантажити сертифікат (PDF)
          </button>

          <br/>

          <button onClick={onRestart} style={{
            marginTop: 20,
            padding: '10px 20px',
            backgroundColor: '#3399ff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            🔁 Пройти ще раз
          </button>
          </div>
          <Footer/>
        </div>
        );
        }
