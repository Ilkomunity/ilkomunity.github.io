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
        description: string;
        benefits: object;
        contact_name: string;
        contact_number: string;
        documentationsurl: object;
        social_media: object;
    };
}