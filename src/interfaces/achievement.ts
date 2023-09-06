export default interface Achievement {
    id: number;
    attributes: {
        competition: string;
        subcompetition: string;
        isTeam: string;
        name: string;
        award: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        date: string;
        imageurl: string;
    };
}