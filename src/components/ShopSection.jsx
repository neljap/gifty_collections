import React from 'react'
import { useGetAllProductsQuery } from '../features/productApi'

const ShopSection = () => {
    const {data: shopData, isLoading, isSuccess, isError, error} = useGetAllProductsQuery()

    let content;

    if(isLoading) content = <p>Loading...</p>
    if(isError) content = <p>An Error Occurred, {error}</p>
    if(isSuccess) content = shopData.map((shopItem) => (
        <article key={shopItem.id}>
            <h3>{shopItem.name}</h3>
        </article>
    ))
  return (
    <div>
        <h1>Shop</h1>
        {content}
    </div>
  )
}

export default ShopSection