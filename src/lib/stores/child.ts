import { defineStore } from "pinia";
import { ref } from "vue";

export enum Class {
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

export const level = [
  "Nursery",
  "Primary",
  "Jss1",
  "Jss2",
  "Jss3",
  "Sss1",
  "Sss2",
  "Sss3",
];
export interface IChild {
  id: number;
  class: string;
}

export const useChildStore = defineStore("child", () => {
  const children = ref<IChild[]>([{ id: 1, class: level[0] }]);
  
  const addNewChild = () => {
    children.value = [
      ...children.value,
      { id: children.value.length + 1, class: level[0] },
    ];
  };

  const reduceChild = () => {
    children.value = children.value.slice(0, children.value.length - 1);
  };

  const modifyChildLevel = (id: number, newLevel: string) => {
     
    const childToModify = children.value.find(child => child.id === id);
    if(childToModify){
       childToModify.class = newLevel;
    }

  
  }

  const resetChildren = () => {
    children.value = [{ id: 1, class: level[0] }]
  }

  return { children, addNewChild, reduceChild, modifyChildLevel, resetChildren };
});
