import { LayoutProps } from "../Interfaces/ILayout";

interface Props {
  layout: LayoutProps;
}
const ModalSaveJson = ({ layout }: Props) => {
  return (
    <div
      className="modal fade"
      id="meuModal"
      tabIndex={-1}
      aria-labelledby="meuModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="meuModalLabel">
              Json Novo Pagina
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{JSON.stringify(layout)}</div>
        </div>
      </div>
    </div>
  );
};

export default ModalSaveJson;
