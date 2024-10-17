interface Props {
  titulo: string;
  cor: string;
}

const CardColor = ({ titulo, cor }: Props) => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card text-white shadow" style={{backgroundColor:cor}}>
        <div className="card-body">
          <p className="m-0">{titulo}</p>
          <p className="text-white-50 small m-0">{cor}</p>
        </div>
      </div>
    </div>
  );
};

export default CardColor;
