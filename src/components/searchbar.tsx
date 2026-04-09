interface SearchBarProps {
    onChange: (value: string) => void; // precisa de uma função que recebe uma string e retorna void, para lidar com a mudança no input.
}

export const SearchBar = ({ onChange }: SearchBarProps) => {
    return (
        <input 
            type = "text"
            placeholder="Filtrar por nome, email, telefone, empresa ou cidade"
            onChange={(e) => onChange(e.target.value)}
        />
    );
};