import ModalCardCor from "./ModalCardCor";

interface Props {
  titulo: string;
  cor: string;
  id: string;
}

const CardColor = ({ titulo, cor, id }: Props) => {
  return (
    <>
      <ModalCardCor titulo={titulo} cor={cor} id={id} />
      <div
        className="col-lg-6 mb-4"
        data-bs-toggle="modal"
        data-bs-target={`#modalCor${id}`}
      >
        <div
          className="card text-white shadow"
          style={{ backgroundColor: cor }}
        >
          <div className="card-body">
            <p className="m-0">{titulo}</p>
            <p className="text-white-50 small m-0">{cor}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardColor;
