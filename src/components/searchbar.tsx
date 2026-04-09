import styles from "./searchbar.module.css";

interface SearchBarProps {
    onChange: (value: string) => void; // precisa de uma função que recebe uma string e retorna void, para lidar com a mudança no input.
}

export const SearchBar = ({ onChange }: SearchBarProps) => {
    return (
        <div className={styles.searchWrapper}>
            <input 
             type = "text"
             className={styles.searchInput}
             placeholder="Filtrar por nome ou email..."
             onChange={(e) => onChange(e.target.value)}
             />
        </div>
    );
};