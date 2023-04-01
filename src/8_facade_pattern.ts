/**
 Suppose you want to book a flight, a hotel, and a rental car for your vacation. You could go to each company's website individually and make separate bookings, but that could be time-consuming and confusing. Alternatively, you could use a travel agency that acts as a single point of contact, making all the necessary bookings for you. This travel agency acts as a facade, simplifying the booking process and hiding the complexity of dealing with multiple companies.

In this example, the travel agency represents the "Facade" interface, while the flight, hotel, and rental car companies represent the underlying subsystems. The facade simplifies the interactions between the client and the subsystems, providing a convenient interface for the client to work with.

Here's some TypeScript code that demonstrates how the Facade pattern can be used in this scenario:
 */

// Subsystem 1: Flight Booking
class FlightBooking {
  public bookFlight(): void {
    console.log("Booking a flight...");
  }
}

// Subsystem 2: Hotel Booking
class HotelBooking {
  public bookHotel(): void {
    console.log("Booking a hotel...");
  }
}

// Subsystem 3: Rental Car Booking
class RentalCarBooking {
  public bookRentalCar(): void {
    console.log("Booking a rental car...");
  }
}

// Facade
class TravelAgencyFacade {
  private flightBooking: FlightBooking;
  private hotelBooking: HotelBooking;
  private rentalCarBooking: RentalCarBooking;

  constructor() {
    this.flightBooking = new FlightBooking();
    this.hotelBooking = new HotelBooking();
    this.rentalCarBooking = new RentalCarBooking();
  }

  public bookVacation(): void {
    console.log("Booking a vacation...");
    this.flightBooking.bookFlight();
    this.hotelBooking.bookHotel();
    this.rentalCarBooking.bookRentalCar();
    console.log("Vacation booking complete.");
  }
}

// Client
class Client {
  public bookVacation(): void {
    const travelAgencyFacade = new TravelAgencyFacade();
    travelAgencyFacade.bookVacation();
  }
}

// Usage
const client2 = new Client();
client2.bookVacation();
