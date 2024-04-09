export default abstract class AbstractGrid {
    protected constructor(protected readonly grid: HTMLDivElement) {}

    public abstract init(): void;

    public abstract loaded(): void;
}
