export interface Item {
  id: string;
  title: string;
  value: number;
  classe: string;
}

export interface CorItem {
  id: string;
  titulo: string;
  cor: string;
}

export interface TaskItem {
  id: string;
  task: string;
  time: number;
}

export interface SubItems {
  titulo: string;
  items: (CorItem | TaskItem)[];
}

interface Content {
  id: string;
  titulo: string;
  items?: Item[];
  subItems?: SubItems[];
}

export interface Layout {
  content: Content[];
}

export interface LayoutProps {
  layout: Layout;
}
