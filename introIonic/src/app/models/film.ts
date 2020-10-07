export class Film {
    public Title:string;
    public Year:number;
    public Poster:string;

    public constructor(Title:string, Year:number, Poster:string) {
        this.Title = Title;
        this.Year = Year;
        this.Poster = Poster;
    }
}