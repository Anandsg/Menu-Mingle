import { render, screen } from "@testing-library/react"
import Contact from "../../pages/Contact/Contact";
import "@testing-library/jest-dom";

it("should load contect us component", () => {
    render(<Contact />);

    // Querying
    const heading = screen.getByRole('heading');

    // Assertion
    expect(heading).toBeInTheDocument();
});

it("should load submit button on contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

it("should load input placeholder inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
});