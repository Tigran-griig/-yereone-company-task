import { gql } from 'apollo-boost';

export const productsQuery = gql`
  query moviesQuery {
    products{
             id
            name
            price
            rate
            available
            newProduct
            bestSelling
            sale
    }
  }
`;
