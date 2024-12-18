import ReactDOM from "react-dom/client";
import { Appointment } from "../src/Appointment";
import React from "react";
import { act } from "react";

describe("Appointment", () => {
  let container;

  const render = (component) =>
    act(() => ReactDOM.createRoot(container).render(component));

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  it("renders the customer first name", () => {
    const customer = { firstName: "Ashley" };
    // const component = <Appointment customer={customer} />;
    // const container = document.createElement("div");
    // document.body.replaceChildren(container);
    // act(() => ReactDOM.createRoot(container).render(component));
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain("Ashley");
  });

  it("renders another customer first name", () => {
    const customer = { firstName: "Jordan" };
    // const component = <Appointment customer={customer} />;
    // const container = document.createElement("div");
    // document.body.replaceChildren(container);
    // act(() => ReactDOM.createRoot(container).render(component));
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain("Jordan");
  });
});
