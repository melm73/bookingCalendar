package haus.matthewses.bookingCalendar.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.bson.types.ObjectId;
import javax.validation.constraints.NotNull;

/**
 * Created by melanie on 23/03/2016.
 */
@Document
public class Day {

  @Id
  private String id;

  @NotNull
  private int day;
  private int month;
  private int year;

  private boolean publicHoliday;
  private boolean schoolHoliday;
  private String description;
  private Guest[] bookings;

  public Day(int day, int month, int year, boolean publicHoliday, boolean schoolHoliday, String description) {
    this.id =  new ObjectId().toString();
    this.day = day;
    this.month = month;
    this.year = year;
    this.publicHoliday = publicHoliday;
    this.schoolHoliday = schoolHoliday;
    this.description = description;
    this.bookings = new Guest[0];
  }

  public String getId() {
    return this.id;
  }

  public int getDay() {
    return this.day;
  }

  public int getMonth() {
    return this.month;
  }

  public int getYear() {
    return this.year;
  }

  public boolean getPublicHoliday() {
    return this.publicHoliday;
  }

  public void setPublicHoliday(boolean publicHoliday) {
    this.publicHoliday = publicHoliday;
  }

  public boolean getSchoolHoliday() {
    return this.schoolHoliday;
  }

  public void setSchoolHoliday(boolean schoolHoliday) {
    this.schoolHoliday = schoolHoliday;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Guest[] getBookings() {
    return this.bookings;
  }
}
