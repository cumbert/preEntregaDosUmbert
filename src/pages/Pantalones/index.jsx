import { useState, useEffect } from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { getProductsByCategory } from "../../asyncMock";

const Pantalones = () => {
  
    const [products, setProducts] = useState([]);

    useEffect(() => {
       /*  setLoading(true) */
        getProductsByCategory()
            .then((products) => setProducts(products))
            .catch(err => console.log({ err }))
           /*  .finally(() => loading(false))
 */
    }, [])

   /*  if (loading) return <p>Cargando...</p> */

    return (
        <div>
            <h1>
                Pantalones
            </h1>
            <ItemListContainer/>
        </div>




    )



};

export default Pantalones;

