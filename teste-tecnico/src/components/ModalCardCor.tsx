import { useState } from "react";
import { useLayout } from "../providers/LayoutProvider";

interface ModalProps {
  id: string;
  titulo: string;
  cor: string;
}

const ModalCardCor = ({ id, titulo, cor }: ModalProps) => {
  const [novoTitulo, setNovoTitulo] = useState(titulo);
  const [novaCor, setNovaCor] = useState(cor);
  const { updateItemById } = useLayout();

  const handleSubmit = () => {
    updateItemById(id, { titulo: novoTitulo, cor: novaCor });
  };
  return (
    <div
      className="modal fade"
      id={`modalCor${id}`}
      tabIndex={-1}
      aria-labelledby={`modalCorLabel${id}`}
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`modalCorLabel${id}`}>
              Modal de Configurações - Card de cor
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
                  Titulo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="titulo"
                  aria-describedby="tituloHelp"
                  value={novoTitulo}
                  onChange={(e) => setNovoTitulo(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cor" className="form-label">
                  Cor
                </label>
                <input
                  type="color"
                  className="form-control form-control-color"
                  id="exampleColorInput"
                  value={novaCor}
                  onChange={(e) => setNovaCor(e.target.value)}
                  title="Choose your color"
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
            <button
              type="button"
              onClick={() => handleSubmit()}
              className="btn btn-primary"
            >
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCardCor;
