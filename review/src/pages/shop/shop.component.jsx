import React from 'react';
import {Route} from 'react-router-dom'; 
import {connect} from 'react-redux'; 

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component'; 
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'; 
import {updateCollections} from '../../redux/shop/shop.actions';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview); 
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
  state = {
    loading: true
  }
  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    //whenever collectionRef is updated or when code runned first time, this collectionRef will send us 
    //the napshot representing the code of collections objects array, at the time when this code renders
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false}); 
 
    })
  }
  render(){
    const {match} = this.props;
    const {loading} = this.state;
    return (  


      <div className='shop-page'>
        <Route exact path={`${match.path}`}  render={(props) =><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>}
        />
      </div>
  
  )};
}


const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});
export default connect(null, mapDispatchToProps)(ShopPage);
