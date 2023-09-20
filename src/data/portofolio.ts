type PortofolioContainer = {
    slug: string;
    title: string;
    description: string;
};

const portofolioContainer: PortofolioContainer[] = [
    {
        slug: 'ctf-write-up',
        title: 'CTF Write Up',
        description: 'Dive into our comprehensive write-ups, documenting our journey and insights from various capture the flag competitions.',
    },
    {
        slug: 'daming-notebook',
        title: 'Daming Notebook',
        description: 'Delve into data stories. From insights to trends, explore the journey of data through our interactive notebooks.',
    },
    {
        slug: 'game-dev',
        title: 'Game Dev',
        description: 'Immerse yourself in captivating gaming experiences brought to life through our creative game development endeavors.',
    },
    {
        slug: 'hall-of-algorithm',
        title: 'Hall Of Algorithm',
        description: 'Discover elegant solutions that power modern tech. Uncover the magic of algorithms reshaping our digital world.',
    },
    {
        slug: 'mobile-dev',
        title: 'Mobile Dev',
        description: 'Crafting mobile experiences. We blend creativity and code to build seamless, pocket-sized solutions for today\'s challenges.',
    },
    {
        slug: 'uiux-design',
        title: 'UI/UX Design',
        description: 'Experience seamless user interfaces and intuitive user experiences that elevate digital interactions',
    },
    {
        slug: 'web-dev',
        title: 'Web Dev',
        description: 'Browse through our web development projects, where we craft stunning websites that make a lasting impression.',
    },
]

export default portofolioContainer;