import CardElemento from "./CardElemento";
import ListaDeTarefas from "./ListaDeTarefas";
import { isTaskItem } from "../helpers/defineType";
import GradeCores from "./GradeCores";
import { useLayout } from "../providers/LayoutProvider";
import { useEffect } from "react";
const Main = () => {
  const { layout, saveLayout } = useLayout();

  const handleSave = () => {
    saveLayout();
  };
  useEffect(() => {}, [layout]);

  if (!layout?.layout.content) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <nav
        className="navbar align-items-start sidebar sidebar-dark accordion bg-gradient-primary navbar-dark"
        style={{ width: "300px !important" }}
      >
        <div className="container-fluid d-flex flex-column p-0">
          <a
            className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
            href="#"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-layer-group"></i>
            </div>
            <div className="sidebar-brand-text mx-3">
              <span>CAMADAS</span>
            </div>
          </a>
          <hr className="sidebar-divider my-0" />
          <ul className="navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item" id="lista">
              {layout?.layout.content.map((element) => {
                return (
                  <div
                    className="nav-item dropdown"
                    style={{ padding: "15px" }}
                    key={element.id}
                  >
                    <a
                      aria-expanded="true"
                      type="button"
                      data-bs-toggle="dropdown"
                      className="dropdown-toggle link-light"
                      href="#"
                      key={element.id}
                    >
                      <i className="fas fa-grip-horizontal icon-draggable"></i>
                      {element.titulo}
                    </a>
                    <div data-bs-popper="none" className="dropdown-menu">
                      {element.items &&
                        element.items.length > 0 &&
                        element.items.map((item) => {
                          return (
                            <a key={item.id} className="dropdown-item" href="#">
                              {item.title}
                            </a>
                          );
                        })}

                      {element.subItems &&
                        element.subItems.length > 0 &&
                        element.subItems.map((item, index) => {
                          return (
                            <a key={index} className="dropdown-item" href="#">
                              {item.titulo}
                            </a>
                          );
                        })}
                    </div>
                  </div>
                );
              })}

              <div className="nav-item" style={{ padding: "15px" }}>
                <button
                  type="button"
                  className="btn btn-success text-light fw-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Modelo de Modal de Componente
                </button>
              </div>
              <div className="nav-item" style={{ padding: "15px" }}>
                <button
                  onClick={() => handleSave()}
                  type="button"
                  className="btn btn-dark col-12 text-light fw-bold"
                >
                  Salvar Layout
                </button>
              </div>
            </li>
          </ul>
          <div className="text-center d-none d-md-inline"></div>
        </div>
      </nav>

      <div className="d-flex flex-column" id="content-wrapper">
        <div id="content">
          <nav className="navbar navbar-expand bg-white text-center shadow justify-content-center mb-4 topbar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xxl-12">
                  <form
                    className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search"
                    style={{
                      marginRight: "0px",
                      marginBottom: "0px",
                      textAlign: "center",
                      marginLeft: "37px",
                    }}
                  >
                    <div className="input-group">
                      <input
                        type="text"
                        className="bg-light form-control border-0 small"
                        placeholder="Buscar Componente"
                      />
                      <button className="btn btn-primary py-0" type="button">
                        <i className="fas fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </nav>

          <div className="container-fluid">
            <div className="text-start d-sm-flex justify-content-between align-items-center mb-4">
              <h3 className="text-dark mb-0">Elementos</h3>
            </div>
            {layout?.layout.content.map((item) => {
              return (
                <div className="row" key={item.id}>
                  {" "}
                  <div className="col-xxl-12">
                    <h1>{item.titulo}</h1>
                  </div>
                  {item.items &&
                    item.items.length > 0 &&
                    item.items.map((itemObj, index) => {
                      return (
                        <CardElemento
                          key={itemObj.id}
                          titulo={itemObj.title}
                          id={itemObj.id}
                          index={index}
                          valor={itemObj.value}
                          classe={itemObj.classe}
                        />
                      );
                    })}
                  {item.subItems &&
                    item.subItems.length > 0 &&
                    item.subItems.map((itemObj, index) => {
                      if (isTaskItem(itemObj.items[0])) {
                        return (
                          <ListaDeTarefas key={index} subItems={itemObj} />
                        );
                      } else {
                        return <GradeCores key={index} subItems={itemObj} />;
                      }
                    })}
                </div>
              );
            })}
          </div>
        </div>

        <footer className="bg-white sticky-footer">
          <div className="container my-auto">
            <div className="text-center my-auto copyright">
              <span>Copyright © Meu editor</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Main;
