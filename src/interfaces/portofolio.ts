export default interface Portofolio {
    id: number;
    attributes: {
        title: string,
        category: string,
        date: string,
        link: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        imageurl: string
    };
}