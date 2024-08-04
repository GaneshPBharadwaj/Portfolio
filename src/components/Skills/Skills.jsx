import React from 'react'
import styles from './Skills.module.css';
import { getImageUrl } from '../../utils';
import skills from "../data/skills.json";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
        <h2 className={styles.title}>Skills</h2>
        <br/><br/>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill, id) => {
                    return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{skill.title}</p>
                    </div>
                    );
                })}
            </div>
      </div>
    </section>
  )
};

