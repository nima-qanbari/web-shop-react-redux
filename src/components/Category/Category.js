import React from 'react'

//data
import { categories } from '../../data'

//styled-components
import styled from "styled-components"

//components
import CategoryItem from './CategoryItem'

const Div = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;

@media (max-width:500px) {
  padding: 20px;
    flex-direction: column;
    display: flex;
    width: 100%;
  }
`
const Category = () => {
  return (
    <Div>
        {categories.map(item => (
            <CategoryItem item={item} key={item.key} />
        ))}
    </Div>
  )
}

export default Category