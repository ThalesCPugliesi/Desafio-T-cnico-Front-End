export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;     // O phone vem como string da API.
    company: {
        name: string;
    }
    address: {
        city: string;
    };
}

// facilitando a importação do tipo User.