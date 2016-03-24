package haus.matthewses.bookingCalendar.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;

/**
 * Created by melanie on 23/03/2016.
 */
@Controller
public class PageController {
  @RequestMapping("/")
  public String index() {
    System.out.println("i am here");
    return "index.html";
  }
}

