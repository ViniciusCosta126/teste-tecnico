import { CorItem, TaskItem } from "../Interfaces/ILayout";

const isTaskItem = (item: CorItem | TaskItem): item is TaskItem => {
  return (item as TaskItem).time !== undefined; // Verifica se é um TaskItem
};

const isCorItem = (item: CorItem | TaskItem): item is CorItem => {
  return (item as CorItem).cor !== undefined;
};

export { isTaskItem, isCorItem };
