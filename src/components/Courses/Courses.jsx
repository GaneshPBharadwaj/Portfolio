import React from 'react';
import styles from './Courses.module.css';
import courseData from '../data/Courses.json';

export const Courses = () => {

  const handleClick = (url) => {
    window.open(url, '_blank')
  };

  return (
    <section className={styles.container} id="courses">
        <h2 className={styles.title}>Courses and Certifications</h2>
        <br/>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
              {courseData.map((course, index)=>(
                <li className={styles.aboutItem} key={index}>
                  <div className={styles.aboutItemText} onClick={()=> handleClick(course.link)}>
                    <h3 className={styles.course}>{course.title}</h3>
                    <p className={styles.course}>{course.company},{course.timestamp}</p>
                  </div>
                </li>
              ))}
            </ul>
        </div>
        
    </section>
  )
};