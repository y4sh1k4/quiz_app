import React,{useState} from 'react'
import styles from './File.module.css'
export default function Quiz({id,question,options,correct,score,setScore,name}) {
//   const [score,setScore]=useState(0);
  const userOption=(e)=>{
    console.log(e);
    if(e.target.defaultValue==correct){
        setScore(score=>score+1)
    }
  }
  return (
    <div className={`${styles.flex} ${styles.start} ${styles.col} ${styles.ques}`}>
      <p>Q{id}. {question}?</p>
      {options.map(option=><div className={styles.option}><input key={id} type="radio" name={id} value={option} onChange={userOption}/> {option}</div>)}
    </div>
  )
}
