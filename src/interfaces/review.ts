export default interface Review {
    id: number;
    attributes: {
        name: string;
        occupation: string;
        review: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        imageurl: string;
    };
}