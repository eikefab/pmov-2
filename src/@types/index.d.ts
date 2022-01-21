export interface Service {
    id: number;
    title: string;
    description: string;
    customer: string;
    state: "OPEN" | "CLOSED";
}
