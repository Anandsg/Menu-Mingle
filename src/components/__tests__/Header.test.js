import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header/Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("should render header with login button", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();

})

it("should render header with cart items 0", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - 0")
    expect(cartItems).toBeInTheDocument();

})

it("should change logout button to login on click", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const logoutButton = screen.getByRole("button", { name: "Logout" });
    fireEvent.click(logoutButton);
    expect(logoutButton).toBeInTheDocument();

})