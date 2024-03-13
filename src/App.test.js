import { render, screen } from "@testing-library/react";
import BookingPage from "./components/BookingPage/BookingPage";
import BookingForm from "./components/BookingForm/BookingForm";
import { BrowserRouter } from "react-router-dom";

let mockProps;

beforeEach(() => {
  // Define mock props before each test
  mockProps = {
    name: "John Doe",
    setName: jest.fn(),
    email: "john@example.com",
    setEmail: jest.fn(),
    phone: "1234567890",
    setPhone: jest.fn(),
    date: "2024-03-10",
    setDate: jest.fn(),
    time: "18:00",
    setTime: jest.fn(),
    numberOfGuests: "2",
    setNumberOfGuests: jest.fn(),
    occasion: "Anniversary",
    setOccasion: jest.fn(),
    availableTimes: jest.fn(),
    dispatch: jest.fn(),
    submitForm: jest.fn(),
  };
});

// Test for checking if BookingPage renders correctly
test("Renders the BookingPage heading", () => {
  render(
    <BrowserRouter>
      <BookingPage {...mockProps} />
    </BrowserRouter>
  );

  const headingElement = screen.getByText("Look Forward to Seeing You!");
  expect(headingElement).toBeInTheDocument();
});

// Test to check that initializeTimes returns the correct return value
describe("initializeTimes", () => {
  test("returns an object with an array of times in the correct format", () => {
    // mock FetchAPI output
    const mockFetchAPI = jest.fn(() => ["18:00", "18:30", "19:00"]);
    // Call the initializeTimes function
    const initializeTimes = { availableTimes: mockFetchAPI() };
    const result = initializeTimes;
    // Assert that the result is an object with the correct structure
    expect(result).toEqual(
      expect.objectContaining({
        availableTimes: expect.arrayContaining([
          expect.stringMatching(/^\d{2}:\d{2}$/), // Asserting the format HH:MM
        ]),
      })
    );
  });
});

describe("ReservationForm", () => {
  it("renders name input field with correct attributes", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <BookingForm {...mockProps} />
      </BrowserRouter>
    );
    const nameInput = getByLabelText("Name");
    expect(nameInput).toHaveAttribute("required");
    expect(nameInput).toHaveAttribute("type", "text");
    expect(nameInput).toHaveAttribute("id", "res-name");
    expect(nameInput).toHaveAttribute("name", "name");
    expect(nameInput).toHaveAttribute("placeholder", "Name");
  });

  it("renders email input field with correct attributes", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <BookingForm {...mockProps} />
      </BrowserRouter>
    );
    const emailInput = getByLabelText("Email");
    expect(emailInput).toHaveAttribute("required");
    expect(emailInput).toHaveAttribute("type", "email");
    expect(emailInput).toHaveAttribute("id", "res-email");
    expect(emailInput).toHaveAttribute("name", "email");
    expect(emailInput).toHaveAttribute("placeholder", "Email");
  });

  it("renders phone input field with correct attributes", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <BookingForm {...mockProps} />
      </BrowserRouter>
    );
    const phoneInput = getByLabelText("Phone");
    expect(phoneInput).toHaveAttribute("required");
    expect(phoneInput).toHaveAttribute("type", "number");
    expect(phoneInput).toHaveAttribute("id", "res-phone");
    expect(phoneInput).toHaveAttribute("name", "phone");
    expect(phoneInput).toHaveAttribute("placeholder", "Phone");
    expect(phoneInput).toHaveAttribute("pattern", "[0-9]{3}-[0-9]{3}-[0-9]{4}");
  });

  it("renders date input field with correct attributes", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <BookingForm {...mockProps} />
      </BrowserRouter>
    );
    const dateInput = getByLabelText("Date");
    expect(dateInput).toHaveAttribute("required");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "res-date");
    expect(dateInput).toHaveAttribute("name", "date");
    expect(dateInput).toHaveAttribute("placeholder", "Date");
  });
});

// Import isFormValid function from BookingForm
const { isFormValid } = require("./components/BookingForm/BookingForm");
// Check if function returns true if all form fields are filled
describe('isFormValid function', () => {
  it('returns true if all form fields are filled', () => {
    const validFormData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
      date: '2024-03-15',
      time: '12:00 PM',
      numberOfGuests: '4'
    };

    expect(isFormValid(validFormData)).toBe(true);
  });
  // Check if function returns false if a field is empty
  it('returns false if any form field is empty', () => {
    const invalidFormData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '', // Empty phone field
      date: '2024-03-15',
      time: '12:00 PM',
      numberOfGuests: '4'
    };

    expect(isFormValid(invalidFormData)).toBe(false);
  });

  it('returns false if any form field is empty', () => {
    const invalidFormData = {
      name: '', // Empty name field
      email: 'john@example.com',
      phone: '', // Empty phone field
      date: '2024-03-15',
      time: '12:00 PM',
      numberOfGuests: '4'
    };

    expect(isFormValid(invalidFormData)).toBe(false);
  });
});