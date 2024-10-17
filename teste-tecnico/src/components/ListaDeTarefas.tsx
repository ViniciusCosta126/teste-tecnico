import { isTaskItem } from "../helpers/defineType";
import { SubItems } from "../Interfaces/ILayout";
import CardElementoTask from "./CardElementoTask";

const ListaDeTarefas = ({ subItems }: { subItems: SubItems }) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4"></div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="text-primary fw-bold m-0">Lista de Tarefas</h6>
        </div>
        <ul className="list-group list-group-flush">
          {subItems?.items?.map((taskObj, index) => {
            return isTaskItem(taskObj) ? (
              <CardElementoTask
                id={taskObj.id}
                key={index}
                task={taskObj.task}
                time={taskObj.time}
              />
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListaDeTarefas;
