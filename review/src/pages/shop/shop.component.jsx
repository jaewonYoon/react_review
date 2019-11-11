import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPage = () => (  
      <div className='shop-page'>
        {/* {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))} */}
        <CollectionsOverview />
      </div>
  );

export default ShopPage;
