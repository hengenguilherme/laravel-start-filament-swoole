import AbstractGrid from "../../abstracts/AbstractGrid";

export default class List extends AbstractGrid{
    init(): void {
        console.log('grid.init')
    }

    loaded(): void {
        console.log('grid.loaded')
    }

}
