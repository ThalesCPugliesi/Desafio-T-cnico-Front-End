import type { User } from "../types/user";
import styles from "./usermodal.module.css"

interface UserModalProps {
    user: User; // Recebe um usuário do tipo User como prop.
    onClose: () => void; // Recebe uma função onClose para fechar o modal.
}

export const UserModal = ({ user, onClose}: UserModalProps) => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <button onClick={onClose} className={styles.closeButton}>x</button>
                <h2>Detalhes do Usuário</h2>
                <hr  />
                <p><strong>Nome Completo:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Telefone:</strong> {user.phone}</p>
                <p><strong>Empresa:</strong> {user.company.name}</p>
                <p><strong>Cidade:</strong> {user.address.city}</p>
            </div>
        </div>
    );
};


