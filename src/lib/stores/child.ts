
import { defineStore } from "pinia";
import {ref} from "vue";

enum Class {
    Nursery,
    Primary1, 
    Primary2,
    Primary3,
    Primary4,
    Primary5,
    Primary6,
    Jss1,
    Jss2,
    Jss3,
    Sss1,
    Sss2,
    Sss3,
}


interface IChild {
    id: number;
    class: Class;
}


export const useChildStore = defineStore('child', () => {
    const children = ref<IChild[]>([
        {id: 1, class: Class.Nursery}
    ]);

    const addNewChild = (child: IChild) => {
       children.value = [...children.value, child]
    }


    const reduceChild = (child: IChild) => {
        let foundChild = children.value.find(child => child.id === child.class)
    }
})