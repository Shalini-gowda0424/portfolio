export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    challenges: string;
    solutions: string;
    imageUrl: string;
}

export interface Tip {
    id: string;
    title: string;
    content: string;
    tags: string[];
}

export interface Suggestion {
    name: string;
    idea: string;
    email?: string;
}

export interface Photo {
    id: string;
    src: string;
    caption: string;
}