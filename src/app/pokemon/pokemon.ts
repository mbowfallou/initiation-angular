export class Pokemon {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;

    constructor(
        hp: number = 100,
        cp: number = 10,
        name: string = 'Entrer un nom...',
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
        types: Array<string> = ['Normal'],
        created: Date = new Date()
    ){
        this.name = name;
        this.cp = cp;
        this.hp = hp;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}