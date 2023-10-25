import {useState} from 'react';

function Faq(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className={open ? 'accordion-button' : 'accordion-button collapsed'}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
          onClick={(e) => setOpen(!open)}
        >
          <h4 className="mb-0">
            <strong>{props.title}</strong>
          </h4>
        </button>
      </h2>
      <div
        id="collapseOne"
        className={open ? 'accordion-collapse' : 'accordion-collapse collapse'}
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p className="mb-0">{props.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Faq;
