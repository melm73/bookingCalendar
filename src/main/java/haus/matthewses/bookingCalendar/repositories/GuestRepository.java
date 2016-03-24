package haus.matthewses.bookingCalendar.repositories;

import haus.matthewses.bookingCalendar.models.Guest;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by melanie on 21/03/2016.
 */
public interface GuestRepository extends MongoRepository<Guest, String> {

}
