import { useState } from 'react';
import questions from './data/questions.json';
import Question from './components/Question';
import Result from './components/Result';
import StartScreen from './components/StartScreen';
import Footer from "./components/Footer";

export default function App() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userName, setUserName] = useState('');

  const handleStart = (name) => {
    setUserName(name);
    setStarted(true);
  };

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[step] = answerIndex;
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleRestart = () => {
    setStarted(false);
    setStep(0);
    setAnswers([]);
  };

  if (!started) {
    return <StartScreen onStart={handleStart} />;
  }

  if (step >= questions.length) {
    return <Result questions={questions} answers={answers} onRestart={handleRestart} userName={userName}/>;
  }

  return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <div style={{flex: 1}}>
      <h2 style={{ paddingLeft: 20 }}>{userName}</h2> {/* Виводимо ім'я користувача */}
      <Question
        data={questions[step]}
        onAnswer={handleAnswer}
        onBack={handleBack}
        step={step}
        total={questions.length}
        selectedAnswer={answers[step]}
      />
    </div>
        <Footer/>
      </div>
  );
}
