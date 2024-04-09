import AbstractGrid from "../../abstracts/AbstractGrid";

export default class List extends AbstractGrid{
    init(): void {
        console.log('consolando grid.init')
    }

    loaded(): void {
        console.log('consolando grid.loaded')
    }

}
