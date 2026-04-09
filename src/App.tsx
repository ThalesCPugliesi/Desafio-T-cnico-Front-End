import {use, useEffect, useState } from "react";
import type { User } from "./types/user";
import { SearchBar } from "./components/searchbar";
import { UserCard } from "./components/usercard";

function App() {
  const [users, setUsers] = useState<User[]>([]); // Guarda a lista de usuários. Começa vazia
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Guarda se houve um erro na busca dos usuários. Começa como false
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => { //Função assíncrona para buscar os usuários da API
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error();
        const data = await response.json();
        setUsers(data);
      } catch(err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter(u => u.name.toLowerCase().includes(search.toLowerCase())); // Filtra os usuários com base no nome, usando o valor do search. A busca é case-insensitive.

  // Retornos condicionais para lidar com os estados de loading e error.
  if (loading) return <h1>Carregando...</h1>;
  if (error) return <h1>Ops! Ocorreu um erro ao carregar os usuários.</h1>;


  //Ln 39 passa a função setSearch para o componente SearchBar, que é chamada toda vez que o usuário digita algo no input. O valor do input é passado para setSearch, atualizando o estado search e, consequentemente, filtrando a lista de usuários exibida.
  return (
    <div style={{ maxWidth: '800px', margin: "0 auto", padding: "20px"}}>
      <h1>Lista de Usuários</h1>
      <SearchBar onChange={setSearch} /> 


       <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "15px"}}>
        {filteredUsers.map(user => (
        <UserCard 
        key={user.id} 
        user={user} 
       onClick={() => setSelectedUser(user)} 
        />
        ))}
      </div>
    </div>
  )
  
}

export default App;
