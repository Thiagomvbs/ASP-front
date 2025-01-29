// useProdutos.ts
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IPaginacao } from '../interfaces/IPaginacao';
import { IProduto } from '../interfaces/IProdutos';

const useProdutos = (pagina: number, busca: string) => {
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  
  useEffect(() => {
    let url = 'http://127.0.0.1:8000/produtos/?';

    if(busca){
      url+= `search=${busca}`;
    }else{
      url += (busca ? '&' : '' + `page=${pagina}`);
    }

    
    axios.get<IPaginacao<IProduto>>(url)
      .then(response => {
        setProdutos(response.data.results)
        setTotalCount(response.data.count)
      })
      .catch(erro => {
        console.log(erro)
      });
    }, [pagina, busca]);
 

  return { produtos, totalCount };
}

export default useProdutos;
