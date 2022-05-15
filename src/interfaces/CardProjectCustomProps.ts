export interface CardProjectCustomProps {
    links?: Array<LinkCus>,
    projectName?: string,
    projectDescription?: string,
    technologys?: Array<string>
}

export interface LinkCus {
    platform: string,
    link: string
}