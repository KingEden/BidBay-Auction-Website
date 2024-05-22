import React, { useState } from 'react';

function AuctionListing() {
    const [listings, setListings] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const images = formData.getAll('images');
        const startingBid = formData.get('starting-bid');
        const duration = formData.get('duration');

        const newListing = {
            title: title,
            description: description,
            images: images,
            startingBid: startingBid,
            currentBid: startingBid,
            duration: duration
        };

        setListings([...listings, newListing]);
        event.target.reset();
    };

    const handleBidPlace = (bidAmount, index) => {
        // Ensure bid amount is not smaller than starting bid or current bid
        const currentListing = listings[index];
        if (bidAmount < currentListing.startingBid || bidAmount < currentListing.currentBid) {
            console.log("Bid amount must be greater than or equal to the starting bid or current bid.");
            return; 
            // Don't proceed with the bid
        }

        // Update current bid for the listing at the specified index
        const updatedListings = [...listings];
        updatedListings[index].currentBid = bidAmount;
        setListings(updatedListings);

        // Send bid amount to server or perform other actions
        console.log('Bid placed:', bidAmount);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredListings = listings.filter(listing =>
        listing.title.toLowerCase().includes(searchTerm)
    );

    return (
        <div>
            <div className="auction-listing">
                <h1 style={{ color: 'white' }}>Create Auction Listing</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="title" style={{ color: 'white' }}>Title:</label>
                    <input type="text" id="title" name="title" required /><br />
                    <label htmlFor="description" style={{ color: 'white' }}>Description:</label>
                    <textarea id="description" name="description" required /><br />
                    <label htmlFor="images" style={{ color: 'white' }}>Images:</label>
                    <input type="file" id="images" name="images" multiple accept="image/*" required /><br />
                    <label htmlFor="starting-bid" style={{ color: 'white' }}>Starting Bid Price:</label>
                    <input type="number" id="starting-bid" name="starting-bid" min="0" required /><br />
                    <label htmlFor="duration" style={{ color: 'white' }}>Auction Duration (hours):</label>
                    <input type="number" id="duration" name="duration" min="1" required /><br />
                    <button type="submit">Create Listing</button>
                </form>
            </div>



            <div className="search-and-filter">
                <h2 style={{ color: 'white' }}>Search</h2>
                <input type="text" id="search" placeholder="Search by title" onChange={handleSearchChange} />
                <button id="apply-filter" style={{ color: 'white' }}>Apply Filter</button>
            </div>

            <div className="listings" style={{ borderLeft: '3px solid white', paddingLeft: '10px' }}>
                <h2 style={{ color: 'white' }}>Listings</h2>
                <div id="listing-container">
                    {/* Render filtered listings */}
                    {filteredListings.map((listing, index) => (
                        <div key={index} className="listing-item" style={{ borderBottom: '1px solid white', marginBottom: '10px', paddingBottom: '10px' }}>
                            <h3 style={{ color: 'white' }}>{listing.title}</h3>
                            <p style={{ color: 'white' }}>{listing.description}</p>
                            <p style={{ color: 'white' }}>Starting Bid: ${listing.startingBid}</p>
                            <p style={{ color: 'white' }}>Current Bid: $<span className="current-bid" style={{ color: 'white' }}>{listing.currentBid}</span></p>
                            <div className="bid-section">
                                <input type="number" className="bid-input" placeholder="Enter Bid Amount" min={listing.currentBid} required />
                                <button className="bid-button" onClick={() => handleBidPlace(parseFloat(document.querySelector('.bid-input').value), index)}>Place Bid</button>
                            </div>
                            <p style={{ color: 'white' }}>Auction Duration: {listing.duration} hours</p>
                            {/* Render images */}
                            <div className="image-container" style={{ display: 'flex', justifyContent: 'center' }}>
                                {listing.images.length > 0 && (
                                    listing.images.map((image, imgIndex) => (
                                        <img key={imgIndex} src={URL.createObjectURL(image)} alt="Listing Image" style={{ width: '200px', height: '200px', objectFit: 'cover', marginRight: '10px' }} />
                                    ))
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AuctionListing;
