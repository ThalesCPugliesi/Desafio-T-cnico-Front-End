import type { User } from "../types/user";
import styles from "./usercard.module.css"; // Conectando o CSS que estava sobrando

interface UserCardProps {
  user: User;
  onClick: () => void;
}

export const UserCard = ({ user, onClick }: UserCardProps) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{user.name}</h3>
      <p className={styles.email}>{user.email}</p>
      <button className={styles.button} onClick={onClick}>
        Ver detalhes
      </button>
    </div>
  );
};