import React, { useState, ReactElement, useEffect } from 'react';
import ErrosPeriodo from '../../components/Dashboards/graficoLinha/ErrosPeriodo';
import ErroDias from '../../components/Dashboards/graficoLinha/ErroDias';
import ErroMes from '../../components/Dashboards/graficoErro/ErroMes';
import ErrosDia from '../../components/Dashboards/graficoErro/ErroDia';
import ErrosMes from '../../components/Dashboards/graficoLinha/ErrosMes';

import "../Texte/styletexte.css"
import LinhaExemplo from '../LinhaExemplo/LinhaExemplo';
import DonutMes from '../LinhaExemplo/DunutMes';
import DonutDia from '../LinhaExemplo/DonutDia';

const SeletorAlertas: React.FC = () => {
  const [componenteSelecionado, setComponenteSelecionado] = useState<ReactElement | null>(null);

  const handleSelecionarComponente = (componente: ReactElement) => {
    console.log(componente)
    setComponenteSelecionado(componente);
  };

  useEffect(() => {
    handleSelecionarComponente(<LinhaExemplo />)
  }, [])

  return (
    <section>
      <div className='posicionamento_btn'>
        <button className='btn_graf' onClick={() => handleSelecionarComponente(<LinhaExemplo />)}>
          Ano
        </button>
        <button className='btn_graf' onClick={() => handleSelecionarComponente(<DonutMes />)}>
          Mês
        </button>
        <button className='btn_graf' onClick={() => handleSelecionarComponente(<DonutDia />)}>
          Dia
        </button>
      </div>
      <div>
        {componenteSelecionado}
      </div>
    </section>
  );
};

export default SeletorAlertas;
