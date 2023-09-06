export default interface Communities {
    id: number;
    attributes: {
        name:  string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
        abbr: string,
        day: string,
        time: string,
        location: string,
        imageurl: string;
        logourl: string;
    };
}