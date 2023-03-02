import {useParams} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import {CategoryContainer, Title} from './category.style';
import {useSelector} from 'react-redux';
import {selectCategoriesMap} from '../../store/categories/category.selectior';

function Category() {
  const {category} = useParams(); // sprawdza co mamy napisane po /shop/coś sprawdza nam to coś
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    console.log('effect fired calling setProduts');
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <Title>{category.toLocaleUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
}

export default Category;
