import AbstractForm from "../../abstracts/AbstractForm";

export default class Create extends AbstractForm {
    init(): void {
        console.log('consolando init')
    }

    loaded(): void {
        console.log('consolando loaded')
    }

}
