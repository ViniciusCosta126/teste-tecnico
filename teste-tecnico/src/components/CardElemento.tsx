import ModalElemento1 from "./ModalElemento1";

interface Props {
  titulo: string;
  valor: number;
  id: string;
  index: number;
  classe: string;
}

const CardElemento = ({ titulo, valor, id, index, classe }: Props) => {
  return (
    <>
      <div
        className="col-md-6 col-xl-3 mb-4"
        data-bs-toggle="modal"
        data-bs-target={`#modalElemento${id}`}
      >
        <div className="card shadow border-left-primary py-2">
          <div className="card-body">
            <div className="row g-0 align-items-center">
              <div className="col me-2">
                <div className="text-uppercase text-primary fw-bold text-xs mb-1">
                  <span>{titulo}</span>
                </div>
                <div className="text-dark fw-bold h5 mb-0">
                  <span>{valor}</span>
                </div>
              </div>
              <div className="col-auto">
                <i className={` fa-2x text-gray-300 ${classe}`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalElemento1 id={id} titulo={titulo} valor={valor} classe={classe} />
    </>
  );
};

export default CardElemento;
