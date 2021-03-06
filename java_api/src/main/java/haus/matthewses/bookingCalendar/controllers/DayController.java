package haus.matthewses.bookingCalendar.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import haus.matthewses.bookingCalendar.models.Day;
import haus.matthewses.bookingCalendar.repositories.DayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Created by melanie on 23/03/2016.
 */
@RestController
public class DayController {

  @Autowired
  private DayRepository repository;

  @CrossOrigin(origins = "http://localhost:8090")
  @RequestMapping(value="/days", method=RequestMethod.GET)
  public @ResponseBody String index(@RequestParam(value="month") int month, @RequestParam(value="year") int year) {
    try {
      return new ObjectMapper().writeValueAsString(repository.findByMonthAndYear(month, year));
    } catch (JsonProcessingException e) {
      return "JSON parse error";
    }
  }

  @CrossOrigin(origins = "http://localhost:8090")
  @RequestMapping(value="/day", method=RequestMethod.POST)
  public @ResponseBody Day post(@RequestBody Day day) {
    return repository.save(day);
  }

  @CrossOrigin(origins = "http://localhost:8090")
  @RequestMapping(value="/day/{id}", method=RequestMethod.PUT)
  public @ResponseBody
  Day put(@PathVariable(value="id") String id, @RequestBody Day updatedDay)
   {
    Day day = repository.findOne(id);
    repository.delete(day);
    return repository.save(updatedDay);
  }
}
