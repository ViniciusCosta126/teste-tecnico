import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { CorItem, Item, LayoutProps, TaskItem } from "../Interfaces/ILayout";

type ItemType = CorItem | TaskItem | Item;

interface LayoutContextProps {
  layout: LayoutProps | undefined;
  saveLayout: () => Promise<void>;
  updateItemById: (itemId: string, newItemData: Partial<ItemType>) => void;
}

const LayoutContext = createContext<LayoutContextProps | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: ReactNode }) => {
  const [layout, setLayout] = useState<LayoutProps>();

  useEffect(() => {
    fetchDados();
  }, []);

  const fetchDados = async () => {
    const storedLayout = localStorage.getItem("layoutData");
    const expirationTime = localStorage.getItem("layoutExpiration");

    if (storedLayout && expirationTime) {
      const currentTime = Date.now();
      if (currentTime < parseInt(expirationTime)) {
        setLayout(JSON.parse(storedLayout));
        return;
      }
    }

    try {
      const response = await fetch("http://localhost:8000/api/layout");
      const data = await response.json();
      setLayout(data.layout);
      localStorage.setItem("layoutData", JSON.stringify(data.layout));
      const oneHourInMillis = 60 * 60 * 1000;
      localStorage.setItem(
        "layoutExpiration",
        (Date.now() + oneHourInMillis).toString()
      );
    } catch (error) {
      console.error("Erro ao buscar o layout:", error);
    }
  };

  const saveLayout = async () => {
    if (!layout) return;

    try {
      const response = await fetch("http://localhost:8000/api/layout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          layout: JSON.stringify(layout),
        }),
      });

      const data = await response.json();
      localStorage.setItem("layoutData", JSON.stringify(layout));
      const oneHourInMillis = 60 * 60 * 1000;
      localStorage.setItem(
        "layoutExpiration",
        (Date.now() + oneHourInMillis).toString()
      );
    } catch (error) {
      console.error("Erro ao salvar o layout:", error);
    }
  };

  const updateItemById = (itemId: string, newItemData: Partial<ItemType>) => {
    if (!layout) return;

    const updatedContent = layout.layout.content.map((section) => {
      const updatedItems = section.items?.map((item) => {
        if (item.id === itemId) {
          return { ...item, ...newItemData };
        }
        return item;
      });

      const updatedSubItems = section.subItems?.map((subItem) => {
        const updatedTaskItems = subItem.items.map((subItem) => {
          if ("task" in subItem && subItem.id === itemId) {
            return { ...subItem, ...newItemData };
          }
          if ("cor" in subItem && subItem.id === itemId) {
            return { ...subItem, ...newItemData };
          }
          return subItem;
        });

        return {
          ...subItem,
          items: updatedTaskItems,
        };
      });

      return {
        ...section,
        items: updatedItems,
        subItems: updatedSubItems,
      };
    });

    setLayout({ layout: { ...layout.layout, content: updatedContent } });
  };

  return (
    <LayoutContext.Provider value={{ layout, saveLayout, updateItemById }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout deve ser usado dentro de um LayoutProvider");
  }
  return context;
};
