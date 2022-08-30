import React from "react";
import { SelectHeaderButton } from "./select-header";

describe('<SelectHeaderButton />', () => {
  it('mount and select options', () => {
    cy.mount(
      <SelectHeaderButton>
        <option value="" disabled>Price per hour</option>
        <option value="price1">Price 1</option>
        <option value="price2">Price 2</option>
        <option value="price3">Price 3</option>
      </SelectHeaderButton>
    )
    cy.get('.select-header').select("price1")
    cy.get('.select-header').select("price2")
    cy.get('.select-header').select("price3")
  })
})