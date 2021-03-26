import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { productsQuery } from './query';

export default compose( graphql(productsQuery));