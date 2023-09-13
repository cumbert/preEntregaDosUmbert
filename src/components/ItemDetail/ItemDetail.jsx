import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ id, titulo, imagen, precio, stock }) => {

    return (
        <article className="CardItem">
            <picture>
                <img src={imagen} alt={titulo} className='ItemImg' />
            </picture>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {titulo}
                </h2>
            </header>
            <section>
                <p className='Info'>
                    Precio:{precio}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
            </footer>


        </article>

    )
}

export default ItemDetail;