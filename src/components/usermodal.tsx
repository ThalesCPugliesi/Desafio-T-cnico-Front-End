// src/components/usermodal.tsx
import { createPortal } from "react-dom"; // Esse é o cara que faz o teletransporte
import styles from "./usermodal.module.css";
import type { User } from "../types/user"; 
import { X } from 'lucide-react';

interface UserModalProps {
  user: User;
  onClose: () => void;
}

export const UserModal = ({ user, onClose }: UserModalProps) => {
  // 1. Criamos o conteúdo do modal em uma variável
  const modalContent = (
    <div className={styles.overlay} onClick={onClose}>
      {/* O stopPropagation impede que o modal feche ao clicar dentro da caixa branca */}
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        
        <h2>Detalhes do Usuário</h2>
        
        <div className={styles.info}>
          <p><strong>Nome Completo:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Telefone:</strong> {user.phone}</p>
          <p><strong>Empresa:</strong> {user.company.name}</p>
          <p><strong>Cidade:</strong> {user.address.city}</p>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};