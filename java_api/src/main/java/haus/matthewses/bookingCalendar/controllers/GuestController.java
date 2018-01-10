package haus.matthewses.bookingCalendar.controllers;

/**
 * Created by melanie on 21/03/2016.
 */
import com.fasterxml.jackson.core.JsonProcessingException;
import haus.matthewses.bookingCalendar.models.Guest;
import haus.matthewses.bookingCalendar.repositories.GuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class GuestController {

  @Autowired
  private GuestRepository repository;

  @CrossOrigin(origins = "http://localhost:8090")
  @RequestMapping(value="/guests", method=RequestMethod.GET)
  public @ResponseBody String index() {
    try {
      return new ObjectMapper().writeValueAsString(repository.findAll());
    } catch (JsonProcessingException e) {
      return "JSON parse error";
    }
  }

  @RequestMapping(value="/guest", method=RequestMethod.GET)
  public @ResponseBody String get(@RequestParam(value="id") String id) {
    try {
      return new ObjectMapper().writeValueAsString(repository.findOne(id));
    } catch (JsonProcessingException e) {
      return "JSON parse error";
    }
  }

  @RequestMapping(value="/guest", method=RequestMethod.POST)
  public @ResponseBody
  Guest post(@RequestParam(value="name") String name, @RequestParam(value="owner") boolean owner) {
    return repository.save(new Guest(name, owner));
  }
}
