import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});
    
test("shows success message on submit with form details", async () => {
    //Arrange:render our app
    render(<CheckoutForm/>)
    //Act: Find our elements
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const LastNameInput = screen.getByLabelText(/Last Name/i);
    const addressInput = screen.getByLabelText(/Address/i);
    const cityInput = screen.getByLabelText(/City:/i);
    const stateInput = screen.getByLabelText(/State:/i);
    const zipInput = screen.getByLabelText(/Zip:/i);
    const button = screen.getByRole('button');

    userEvent.type(firstNameInput, 'Ulises')
    userEvent.type(LastNameInput, 'Gatica')
    userEvent.type(addressInput, '111south 222east')
    userEvent.type(cityInput, 'fake city')
    userEvent.type(stateInput, 'Cali')
    userEvent.type(zipInput, '88888')
    userEvent.click(button)

    const dataMessage = await screen.findByTestId('successMessage')
    const firstNameOutput = screen.getByText(/Ulises/)
    const lastNameOutput = screen.getByText(/Gatica/)
    const streetOutput = screen.getByText(/111south 222east/)
    const cityOutput = screen.getByText(/fake city/)
    const stateOutput = screen.getByText(/Cali/)
    const zipOutput = screen.getByText(/88888/)
    
     //Assert
     expect(dataMessage).toBeInTheDocument()
     expect(firstNameOutput).toBeInTheDocument(/Ulises/)
     expect(lastNameOutput).toBeInTheDocument(/Gatica/)
     expect(streetOutput).toBeInTheDocument(/111south 222east/)
     expect(cityOutput).toBeInTheDocument(/fake city/)
     expect(stateOutput).toBeInTheDocument(/Cali/)
     expect(zipOutput).toBeInTheDocument(/88888/)
    
});
