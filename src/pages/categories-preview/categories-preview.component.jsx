import React, {Fragment} from 'react';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import {useSelector} from 'react-redux';
import {selectCategoriesMap} from '../../store/categories/category.selectior';

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment key={title}>
            <CategoryPreview
              title={title}
              products={categoriesMap[title]}
              key={title}
            />
          </Fragment>
        );
      })}
    </>
  );
}

export default CategoriesPreview;
