interface ProductProps {
    params: {
      data: string[]
    }
  }
  
  export default function Product({ params }: ProductProps) {
    const [productId, size, color] = params.data
  
    return (
      <div>
        <p>Produto: {productId}</p>
        <p>Tamanho: {size}</p>
        <p>Cor: {color}</p>
      </div>
    )
  }

  // exemplo: http://localhost:3000/Product/1/GG/Vermelho