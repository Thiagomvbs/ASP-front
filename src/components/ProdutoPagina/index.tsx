import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import CardProduto from '../../components/CardProduto';
import { CarrinhoProvider } from '../../context/CarrinhoContext';

const ProdutoPagina = ({ pagina, busca }: { pagina: number; busca: string }) => {
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
    setSearchParams({ busca, pagina: pagina.toString() }, { replace: true });
  }, [pagina, busca, setSearchParams]);

  return (
    <div>
      <CardProduto pagina={pagina} busca={busca} />
    </div>  
  );
};

export default ProdutoPagina;
