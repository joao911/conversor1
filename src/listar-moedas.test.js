import React from 'react';
import ReactDom from 'react-dom';
import ListarMoedas from './listar-moedas';



    it('deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDom.render(<ListarMoedas />, div);
        ReactDom.unmountComponentAtNode(div);
    });

