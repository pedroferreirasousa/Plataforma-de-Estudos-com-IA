"use client";

import React from 'react';
import { UseQuizContext } from '@/contexts/QuizContext';
import useQuiz from '@/hooks/useQuiz';
import styles from './Quiz.module.scss';

const Quiz = () => {
  const {
    questions,
    currentQuestionIndex,
    selectedAnswer,
    score,
    quizStarted,
    quizFinished,
    error,
    helpMessage,
    startQuiz,
    selectAnswer,
    nextQuestion,
    restartQuiz,
  } = UseQuizContext();

  const { isFetchingQuestions, isAskingHelp, getHelp } = useQuiz();

  const currentQuestion = questions[currentQuestionIndex];

  console.log('Quiz Component: Quiz Started:', quizStarted);
  console.log('Quiz Component: Questions:', questions);
  console.log('Quiz Component: Current Question Index:', currentQuestionIndex);
  console.log('Quiz Component: Current Question:', currentQuestion);

  if (!quizStarted) {
    return (
      <div className={styles.container}>
        {!quizStarted && (
          <div className={styles.startcontainer}>
            <h2>Vamos fazer um Quiz?</h2>
            <span>selecione um tema antes de iniciar</span>
            <button onClick={startQuiz} className={styles.quizButton}>Iniciar Quiz</button>
            {error && <p className={styles.error}>{error}</p>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {quizFinished ? (
        <div className={styles.containerFinished}>
          <h2>Quiz Finalizado!</h2>
          <p>Sua pontuação: {score} de {questions.length}</p>
          <button onClick={restartQuiz} className={styles.quizButton}>Reiniciar Quiz</button> {/* Use the 'quizButton' style */}
        </div>
      ) : (
        <>
      {isFetchingQuestions && <p>Carregando perguntas...</p>}
      {!currentQuestion && quizStarted && !isFetchingQuestions && questions.length > 0 && <p>Nenhuma pergunta disponível no momento.</p>}
      {!currentQuestion && quizStarted && !isFetchingQuestions && questions.length === 0 && <p>Selecione um tema antes de iniciar o quizz</p>}
      {currentQuestion && (
        <div className={styles.containerQuestion}>
          <h2>Pergunta {currentQuestionIndex + 1}</h2>
          <p className={styles.pQuestion}>{currentQuestion.question}</p>
          <div className={styles.options}>
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                onClick={() => selectAnswer(option)}
                disabled={selectedAnswer !== null}
                className={selectedAnswer === option ? styles.selected : ''}
              >
                {option}
              </button>
            ))}
          </div>
          <div className={styles.containerButtons}>
          <button onClick={nextQuestion} disabled={selectedAnswer === null} className={styles.quizButton}>
            Próxima Pergunta
          </button>
          <button onClick={() => getHelp(currentQuestion)} disabled={isAskingHelp || helpMessage !== null} className={styles.helpButton}>
            {isAskingHelp ? 'Buscando Ajuda...' : helpMessage || '?'}
          </button>
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      )}
    </>
    )}
    </div>
  );
};

export default Quiz;