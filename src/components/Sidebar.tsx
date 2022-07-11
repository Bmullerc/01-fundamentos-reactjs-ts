import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1444212477490-ca407925329e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=528&q=50" alt="" />
      <div className={styles.profile}>
        <Avatar 
        src="https://github.com/bmullerc.png"
        alt="My ugly face plus a doggo"
        />
        <strong>Bernardo Müller</strong>
        <span>Front-end Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine 
          size={20}
          />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}