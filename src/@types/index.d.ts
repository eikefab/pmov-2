export interface Service {
    id: number;
    title: string;
    description: string;
    costumer: string;
    state: "OPEN" | "CLOSED";
}