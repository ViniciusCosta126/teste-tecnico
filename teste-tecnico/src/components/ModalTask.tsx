interface ModalProps {
  id: string;
  titulo: string;
  timestamp: number;
}

const ModalTask = ({ id, titulo, timestamp }: ModalProps) => {
  const convertDate = (data: number) => {
    const date = new Date(data * 1000); // Use 'data' como argumento, não 'timestamp'
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`; // Retornar no formato YYYY-MM-DD
  };

  return (
    <div
      className="modal fade"
      id={`modalTask${id}`}
      tabIndex={-1}
      aria-labelledby={`modalTaskLabel${id}`}
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`modalTaskLabel${id}`}>
              Modal de Configurações - Task
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
              Os campos devem ser referentes ao conteúdo dos Elementos editáveis
              do bloco escolhido.
            </small>
            <form className="mt-4">
              <div className="mb-3">
                <label htmlFor="titulo" className="form-label">
                  Título
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  aria-describedby="tituloHelp"
                  value={titulo}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="data" className="form-label">
                  Data
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="data" // Alterar o id para algo mais apropriado
                  aria-describedby="dataHelp"
                  value={convertDate(timestamp)} // Valor agora no formato YYYY-MM-DD
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
  );
};

export default ModalTask;
