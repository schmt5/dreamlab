export interface ICourse {
    id: string;
    name: string;
    description: string;
    pages: IPage[];
    students: any;
}

export interface IPage {
    id: string;
    name: string;
    position: number;
    blocks: any;
}


export const pages: IPage[] = [
    {
        id: '1',
        name: 'Page 1',
        position: 1,
        blocks: []
    },
    {
        id: '2',
        name: 'Page 2',
        position: 2,
        blocks: []
    },
    {
        id: '3',
        name: 'Page 3',
        position: 3,
        blocks: []
    },
];


