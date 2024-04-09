import AbstractForm from "../../abstracts/AbstractForm";

export default class Edit extends AbstractForm {
    init(): void {
        console.log('consolando edit.init')
    }

    loaded(): void {
        console.log('consolando edit.loaded')
    }
}
