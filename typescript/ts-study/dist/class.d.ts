declare class Cat {
    run(): void;
    private eat;
    protected sleep(): void;
}
declare class GRT extends Cat {
    init(): void;
}
declare const car: GRT;
