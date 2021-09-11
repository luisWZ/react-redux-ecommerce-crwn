import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const CollectionOverview = ({ collections }) => console.log(collections) || (
  <>
    {collections.map(({ id, ...props }) => (
      <CollectionPreview key={id} {...props} />
    ))}
  </>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);