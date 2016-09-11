package haus.matthewses.bookingCalendar

import org.scalatra._
// JSON-related libraries
import org.json4s.{DefaultFormats, Formats}

// JSON handling support from Scalatra
import org.scalatra.json._

class MyScalatraServlet extends BookingcalendarStack with JacksonJsonSupport {


  // Sets up automatic case class to JSON output serialization, required by
  // the JValueResult trait.
  protected implicit val jsonFormats: Formats = DefaultFormats
//  protected implicit val jsonFormats: Formats = DefaultFormats.withBigDecimal

  // Before every action runs, set the content type to be in JSON format.
  before() {
    contentType = formats("json")
  }

  get("/"){
    FlowerData.all
  }

}


// A Flower object to use as a faked-out data model
case class Flower(slug: String, name: String)

object FlowerData {

  /**
    * Some fake flowers data so we can simulate retrievals.
    */
  var all = List(
    Flower("yellow-tulip", "Yellow Tulip"),
    Flower("red-rose", "Red Rose"),
    Flower("black-rose", "Black Rose"))
}