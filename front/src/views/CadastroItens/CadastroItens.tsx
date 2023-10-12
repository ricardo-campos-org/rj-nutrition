import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/*
id auto_increment,
    name varchar(30) not null,
    energy_kcal int not null,
    protein int not null,
    lipid int not null,
    colesterol int not null,
    carbohydrate int not null,
    fibre int not null,
    calcium int not null,
    iron int not null,
    sodium int not null,
    source varchar(20) not null,
*/

const CadastroItens = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <>
      <h3>Cadastro de itens</h3>

      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="button-addon2" />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Pesquisar</button>
      </div>


      <ol className="list-group list-group-numbered">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Ovo</div>
            12g Carb., 16g Prot., 9g Lip.
          </div>
          <span className="badge bg-primary rounded-pill">146 kcal</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Arroz branco cozido</div>
            12g Carb., 16g Prot., 9g Lip.
          </div>
          <span className="badge bg-primary rounded-pill">96 kcal</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Feijão carioca cozido</div>
            12g Carb., 16g Prot., 9g Lip.
          </div>
          <span className="badge bg-primary rounded-pill">115 kcal</span>
        </li>
      </ol>

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </>
  )
};

export default CadastroItens;