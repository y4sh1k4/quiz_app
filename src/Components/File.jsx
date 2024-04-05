import React, { useState } from "react";
import styles from "./File.module.css";
import Quiz from "./Quiz";
export default function File() {
  const [score, setScore] = useState(0);
  const [displaySc, setDisplaySc] = useState(false);
  const [id,setId]=useState(0);
  const displayScore = () => {
    setDisplaySc(true);
  };
  const increaseId=()=>{
    if(id<=4){
      setId((id)=>id+1);
    }
    
  }
  const data = [
    {
      id: 1,
      question: "which of them is powerhouse of cell",
      option: ["mitochondria", "cellulose", "nucleus", "cell fluids"],
      "correct option": "mitochondria",
    },
    {
      id: 2,
      question: "which of them is pohouse of cell",
      option: ["mitochondria", "cellulose", "nucleus", "cell fluids"],
      "correct option": "mitochondria",
    },
    {
      id: 3,
      question: "which of them is prohouse of cell",
      option: ["mitochondria", "cellulose", "nucleus", "cell fluids"],
      "correct option": "mitochondria",
    },
    {
      id: 4,
      question: "which of them is powrrerhouse of cell",
      option: ["mitochondria", "cellulose", "nucleus", "cell fluids"],
      "correct option": "mitochondria",
    },
    {
      id: 5,
      question: "which of them is powerhouse of cewell",
      option: ["mitochondria", "cellulose", "nucleus", "cell fluids"],
      "correct option": "mitochondria",
    },
  ];
  return (
    <>{
        !displaySc ? 
      <div className={`${styles.container} ${styles.flex} ${styles.col}`}>
        <div  className={`${styles.flex} ${styles.col}`}>
          <h1>QuiZiA</h1>
          <div> 
          <Quiz
                id={data[id].id}
                question={data[id].question}
                options={data[id].option}
                correct={data[id]["correct option"]}
                score={score}
                setScore={setScore}

              ></Quiz>
          </div>
          {id<4?<button onClick={increaseId}>Next</button>:<button onClick={displayScore}>Submit</button>}
        </div>
      </div>:
      <div className={`${styles.flex} ${styles.col}`}>
        <img src="https://media2.giphy.com/media/uKi4DG2TPzGuN4Q7Xg/giphy.gif" height='100vw' />
        <p >Your Score is: {score}</p>
      </div>
        
    }
    </>
  );
}
