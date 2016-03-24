package haus.matthewses.bookingCalendar.repositories;

import haus.matthewses.bookingCalendar.models.Day;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by melanie on 23/03/2016.
 */
public interface DayRepository extends  MongoRepository<Day, String> {
  java.util.List<Day> findByMonthAndYear(String month, int year);
}
