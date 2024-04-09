import './bootstrap';
import AbstractForm from "./abstracts/AbstractForm";
import AbstractGrid from "./abstracts/AbstractGrid";
import * as pages from './pages'

let instance: AbstractForm | AbstractGrid | undefined;

function instanciateClassAndCall(location: {pathname: string}, method: 'init' | 'loaded') {
    const splitedPathName = location.pathname.split('/')
    const last = splitedPathName.pop();
    if (last !== 'create' && last !== 'edit') {
        if (pages[last] && pages[last]['List']) {
            instance = new pages[last]['List'](document.querySelector('.fi-page.fi-resource-list-records-page'));
            if (instance instanceof AbstractGrid) {
                instance[method]();
            }
            return;
        }
    }

    if (last === 'create') {
        const page = splitedPathName.pop();
        if (pages[page] && pages[page]['Create']) {
            instance = new pages[page]['Create'](document.querySelector('form[id="form"]'));
            if (instance instanceof AbstractForm) {
                instance[method]();
            }
            return;
        }
    }

    if (last === 'edit') {
        splitedPathName.pop();
        const page = splitedPathName.pop()
        if (pages[page] && pages[page]['Edit']) {
            instance = new pages[page]['Edit'](document.querySelector('form[id="form"]'));
            if (instance instanceof AbstractForm) {
                instance[method]();
            }
            return;
        }

    }
}
document.addEventListener('alpine:navigate', (event: CustomEvent) => {
    instanciateClassAndCall(event.detail.url,'init')
})

document.addEventListener('alpine:init', () => {
    instanciateClassAndCall(document.location, 'init')
})

document.addEventListener('alpine:navigated', () => {
    instanciateClassAndCall(document.location, 'loaded')
})
