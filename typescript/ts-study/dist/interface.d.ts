declare const getUsername: (user: User) => void;
interface User {
    name: string;
    age?: number;
    readonly isMale: boolean;
    say: Say;
}
interface Say {
    (words: string): string;
}
interface Config {
    width?: number;
}
declare function CalculateAreas(config: Config): {
    area: number;
};
interface SupperUser {
    getGrade: () => void;
}
interface VIPUser extends User, SupperUser {
    broadcast: () => void;
}
