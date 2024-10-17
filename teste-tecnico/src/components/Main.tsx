import React from "react";
import CardElemento from "./CardElemento";
import CardElementoTask from "./CardElementoTask";
import CardColor from "./CardColor";

const Main = () => {
  const colors = [
    { titulo: "Primary", cor: "#4e73df" },
    { titulo: "Success", cor: "#1cc88a" },
    { titulo: "Info", cor: "#36b9cc" },
    { titulo: "Warning", cor: "#f6c23e" },
    { titulo: "Danger", cor: "#e74a3b" },
    { titulo: "Secondary", cor: "#858796" },
  ];
  const elemento1 = [
    {
      title: "elemento 1",
      value: 10000,
    },
    {
      title: "elemento 2",
      value: 23090,
    },
    {
      title: "elemento 3",
      value: 475,
    },
  ];
  const elemento2 = [
    {
      task: "tarefa 1",
      time: 1717276866,
    },
    {
      task: "tarefa 2",
      time: 1727276866,
    },
    {
      task: "tarefa 3",
      time: 1729276866,
    },
  ];

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
            <li className="nav-item">
              <div className="nav-item dropdown" style={{ padding: "15px" }}>
                <a
                  aria-expanded="true"
                  type="button"
                  data-bs-toggle="dropdown"
                  className="dropdown-toggle link-light"
                  href="#"
                >
                  <i className="fas fa-grip-horizontal icon-draggable"></i>
                  Elemento Ordenável 1
                </a>
                <div data-bs-popper="none" className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Elemento 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Elemento 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Elemento 3
                  </a>
                  <a className="dropdown-item" href="#">
                    Elemento 4
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown" style={{ padding: "15px" }}>
                <a
                  aria-expanded="true"
                  data-bs-toggle="dropdown"
                  className="dropdown-toggle link-light"
                  href="#"
                >
                  <i className="fas fa-grip-horizontal icon-draggable"></i>
                  Elemento Ordenável 2
                </a>
                <div data-bs-popper="none" className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Lista de Tarefas
                  </a>
                  <a className="dropdown-item" href="#">
                    Grade de Cores
                  </a>
                </div>
              </div>

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
                  type="button"
                  className="btn btn-dark col-12 text-light fw-bold"
                >
                  Salvar Layout
                </button>
              </div>
            </li>
            <li className="nav-item"></li>
          </ul>
          <div className="text-center d-none d-md-inline"></div>
        </div>
      </nav>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal de Configurações
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <small>
                Os campos devem ser referentes ao conteúdo dos Elementos
                editáveis do bloco escolhido.
              </small>
              <form className="mt-4">
                <div className="mb-3">
                  <label htmlFor="subtitulo" className="form-label">
                    Subtítulo
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subtitulo"
                    aria-describedby="subtituloHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="titulo" className="form-label">
                    Título
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="titulo"
                    aria-describedby="tituloHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="icone" className="form-label">
                    Classe do Ícone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="icone"
                    aria-describedby="iconeHelp"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                Salvar Alterações
              </button>
            </div>
          </div>
        </div>
      </div>
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

            {/* ELEMENTO ORDENÁVEL 1 */}
            <div className="row">
              <div className="col-xxl-12">
                <h1>Elemento Ordenável 1</h1>
              </div>
              {elemento1.map((element, index) => {
                return (
                  <CardElemento key={index} titulo={element.title} valor={element.value} />
                );
              })}

              {/* Bloco vazio */}
            </div>

            {/* ELEMENTO ORDENÁVEL 2 */}
            <div className="row">
              <div className="col-xxl-12">
                <h1>Elemento Ordenável 2</h1>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4"></div>
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="text-primary fw-bold m-0">
                      Lista de Tarefas
                    </h6>
                  </div>
                  <ul className="list-group list-group-flush">
                    {/* Bloco vazio */}
                    {elemento2.map((element,index)=>{
                      return <CardElementoTask key={index} task={element.task} time={element.time}/>
                    })}
                  </ul>
                </div>
              </div>

              <div className="col">
                <div className="row">
                  {colors.map((element, index) => {
                    return (
                      <CardColor
                        key={index}
                        titulo={element.titulo}
                        cor={element.cor}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
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
