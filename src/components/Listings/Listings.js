import React from 'react';
import PropTypes from 'prop-types';
import './Listings.scss';
import listingShape from '../../helpers/propz/listingShape';
import ListingItem from '../ListingItem/ListingItem';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingShape),
    deleteSingleListing: PropTypes.func,
    passListingToEdit: PropTypes.func,
  }

  render() {
    const { listings, deleteSingleListing, passListingToEdit } = this.props;
    const listingsItemsComponents = listings.map(listing => (
      <ListingItem
        key={listing.id}
        listing={listing}
        deleteSingleListing={deleteSingleListing}
        passListingToEdit={passListingToEdit}
      />
    ));
    return (
      <div className="listings col">
        <h2>Listings</h2>
        <ul>{listingsItemsComponents}</ul>
      </div>
    );
  }
}

export default Listings;
