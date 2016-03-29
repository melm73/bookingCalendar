package haus.matthewses.bookingCalendar.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.bson.types.ObjectId;
import javax.validation.constraints.NotNull;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
/**
 * Created by melanie on 23/03/2016.
 */
@Document
public class Day {
  @JsonIgnoreProperties(ignoreUnknown=true)

  @Id
  private String id;

  @NotNull
  private int day;
  private int month;
  private int year;

  private String publicHoliday;
  private boolean schoolHoliday;
  private String notes;
  private String[] bookings;

  @JsonCreator
  public Day(
      @JsonProperty("day") int day,
      @JsonProperty("month") int month,
      @JsonProperty("year") int year,
      @JsonProperty("publicHoliday") String publicHoliday,
      @JsonProperty("schoolHoliday") boolean schoolHoliday,
      @JsonProperty("notes") String notes,
      @JsonProperty("bookings") String[] bookings) {
    this.id =  new ObjectId().toString();
    this.day = day;
    this.month = month;
    this.year = year;
    this.publicHoliday = publicHoliday;
    this.schoolHoliday = schoolHoliday;
    this.notes = notes;
    this.bookings = bookings;
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

  public String getPublicHoliday() {
    return this.publicHoliday;
  }

  public void setPublicHoliday(String publicHoliday) {
    this.publicHoliday = publicHoliday;
  }

  public boolean getSchoolHoliday() {
    return this.schoolHoliday;
  }

  public void setSchoolHoliday(boolean schoolHoliday) {
    this.schoolHoliday = schoolHoliday;
  }

  public String getNotes() {
    return this.notes;
  }

  public void setNotes(String notes) {
    this.notes = notes;
  }

  public String[] getBookings() {
    return this.bookings;
  }

  public void setBookings(String[] bookings) {
    this.bookings = bookings;
  }
}
