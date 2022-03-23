package com.Revature.ProjectTwo.Service;

import com.Revature.ProjectTwo.Entity.Listing;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ListingService {
    public List<Listing> getAllListings();
    public Listing getListingById(int id);
    public Listing addListing(Listing listing);
    public void updateListing(int id, Listing listing);
    public void deleteListing(int id);
}
