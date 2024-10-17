interface Props{
    titulo:string;
    valor:number
}

const CardElemento = ({titulo,valor}:Props) => {
  return (
    <div className="col-md-6 col-xl-3 mb-4">
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
              <i className="fas fa-calendar fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardElemento;
