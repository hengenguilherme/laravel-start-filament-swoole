export default abstract class AbstractForm {
    protected constructor(protected readonly form: HTMLFormElement) {}

    public abstract init(): void;

    public abstract loaded(): void;
}
