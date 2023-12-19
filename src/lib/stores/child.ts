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
export interface IChild {
  id: number;
  class: Class;
}

export const useChildStore = defineStore("child", () => {
  const children = ref<IChild[]>([{ id: 1, class: Class.Nursery }]);

  const addNewChild = () => {
    children.value = [
      ...children.value,
      { id: children.value.length, class: Class.Nursery},
    ];
  };

  const reduceChild = () => {
    children.value = children.value.slice(0, children.value.length - 1);
  };


  return {children, addNewChild, reduceChild};

});
