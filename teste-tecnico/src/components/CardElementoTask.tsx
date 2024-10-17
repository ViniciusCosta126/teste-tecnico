interface Props {
  task: string;
  time: number;
}

const CardElementoTask = ({ task, time }: Props) => {
  const converteData = (data: number) => {
    const date = new Date(data * 1000);
    const dia = String(date.getDate()).padStart(2, "0"); 
    const mes = String(date.getMonth() + 1).padStart(2, "0");
    const ano = String(date.getFullYear()).slice(-2);
    const formattedDate = `${dia}/${mes}/${ano}`;
    return formattedDate;
  };
  return (
    <li className="list-group-item">
      <div className="row g-0 align-items-center">
        <div className="col me-2">
          <h6 className="mb-0">
            <strong>{task}</strong>
          </h6>
          <span className="text-xs">{converteData(time)}</span>
        </div>
        <div className="col-auto">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="formCheck-1"
            />
            <label className="form-check-label" htmlFor="formCheck-1"></label>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardElementoTask;
