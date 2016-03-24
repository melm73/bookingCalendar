package haus.matthewses.bookingCalendar.models;

/**
 * Created by melanie on 21/03/2016.
 */
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.bson.types.ObjectId;

@Document
public class Guest {

  @Id
  public String id;

  public String name;
  public boolean owner;

  public Guest(String name, boolean owner) {
    this.id =  new ObjectId().toString();
    this.name = name;
    this.owner = owner;
  }
}
