import { DataBlog } from "../types/store";

export const isExpired = (dateChecking: Date | string): boolean => {
    const dateNow = new Date();
    const dateCheck = new Date(dateChecking);
    const dif:number = dateNow.getTime() - dateCheck.getTime()
    // Validar si la fecha convertida es válida
    
    if (isNaN(dateCheck.getTime())) {
        console.error(`Invalid date provided: ${dateChecking}`);
        return false; // O lanza un error si prefieres
    }

    return dif > 0 ;
};


export const toSlug = (text: string): string => {
    return text
        .toLowerCase()                      // Convierte a minúsculas
        .trim()                             // Elimina espacios en blanco al principio y al final
        .normalize('NFD')                   // Normaliza los caracteres Unicode (por ejemplo, acentos)
        .replace(/[\u0300-\u036f]/g, '')    // Elimina los acentos
        .replace(/[^a-z0-9\s-]/g, '')       // Elimina caracteres que no sean letras, números, espacios o guiones
        .replace(/\s+/g, '-')               // Reemplaza espacios por guiones
        .replace(/-+/g, '-');               // Reemplaza múltiples guiones por uno solo
}


export const keywords = (title:string) => {
    const keywords = title.toLowerCase().split(' ')
    const normalizeText = (text:string) => {
        return text
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Elimina acentos
    };
    const splitNumbers = (word:string) => word.match(/[a-z]+|\d+/gi);
    const processKeywords = (words:string[]) => words.flatMap((word:string) => splitNumbers(word))
    const allKeywords = [...keywords, ...processKeywords(normalizeText(title).split(' '))];

    return [...new Set(allKeywords)]
}

export const addKeywordsOnBlog = (blog: DataBlog) => {
    return {
        ...blog,
        keywords: keywords(blog.title),
    } 
}

