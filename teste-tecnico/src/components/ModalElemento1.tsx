import { useState } from "react";
import { useLayout } from "../providers/LayoutProvider";

interface ModalProps {
  id: string;
  titulo: string;
  valor: number;
  classe: string;
}

const ModalElemento1 = ({ id, titulo, valor, classe }: ModalProps) => {
  const [novoTitulo, setNovotitulo] = useState(titulo);
  const [novoValor, setNovoValor] = useState(valor);
  const [novaClasse, setNovaClasse] = useState(classe);
  const { updateItemById } = useLayout();
  const handleSubmit = () => {
    updateItemById(id, {
      title: novoTitulo,
      value: novoValor,
      classe: novaClasse,
    });
  };
  return (
    <div
      className="modal fade"
      id={`modalElemento${id}`}
      tabIndex={-1}
      aria-labelledby={`modalElementoLabel${id}`}
      aria-hidden="true"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`modalElementoLabel${id}`}>
              Modal de Configurações - Elemento Ordenavel 1
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
                <label htmlFor="subtitulo" className="form-label">
                  Subtítulo
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subtitulo"
                  aria-describedby="subtituloHelp"
                  value={novoTitulo}
                  onChange={(e) => setNovotitulo(e.target.value)}
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
                  value={novoValor}
                  onChange={(e) => setNovoValor(parseFloat(e.target.value))}
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
                  value={novaClasse}
                  onChange={(e) => setNovaClasse(e.target.value)}
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
              onClick={() => handleSubmit()}
              type="button"
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

export default ModalElemento1;
