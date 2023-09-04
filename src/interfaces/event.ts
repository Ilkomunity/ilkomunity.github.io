export default interface Event {
    id: number;
    attributes: {
        name: string;
        description: string;
        date: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        isHighlighted: boolean;
        posterurl: string;
    };
}