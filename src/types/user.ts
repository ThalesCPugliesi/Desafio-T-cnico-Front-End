export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string;
    company: {
        name: string;
    }
    address: {
        city: string;
    };
}