import { atom, selector } from "recoil";

export const divn = atom({
    key : 'divn',
    default : 10
});

export const divn2 = selector({
    key : 'divn2',
    get : ({get}) => {
        return get(divn) * 2 ;
    }
});

export const divn3 = selector ({
    key : 'divn3',
    get : ({get}) => {
        return get(divn) * 3 ;
    }
});

export const divn4 = selector ({
    key : 'divn4',
    get : ({get}) => {
        return get(divn) * 4 ;
    }
});