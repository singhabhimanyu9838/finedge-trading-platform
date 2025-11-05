import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders hero image", () => {
    render(<Hero />);
    
    //  Use getByAltText since there is only one image
    const heroImage = screen.getByAltText("Hero-img");

    //  Ensure the image is in the document
    expect(heroImage).toBeInTheDocument();

    // Check that the image has the correct src attribute
    expect(heroImage).toHaveAttribute("src", "media/images/homeHero.png");
  });

  test("renders hero image", () => {
    render(<Hero />);
    
    //  Use getByAltText since there is only one image
    const signupButton = screen.getByRole("button" , {name:/signUp Now/i});

    //  Ensure the image is in the document
    expect(signupButton).toBeInTheDocument();

    // Check that the image has the correct src attribute
    expect(signupButton).toHaveClass("btn-primary");
  });

});
