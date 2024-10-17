import { SubItems } from "../Interfaces/ILayout";
import CardColor from "./CardColor";
import { isCorItem } from "../helpers/defineType";

const GradeCores = ({ subItems }: { subItems: SubItems }) => {
  return (
    <div className="col">
      <div className="row">
        {subItems.items.map((corObj, index) => {
          if (isCorItem(corObj)) {
            return (
              <CardColor key={index} titulo={corObj.titulo} cor={corObj.cor} />
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default GradeCores;
