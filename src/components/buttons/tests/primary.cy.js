import { PrimaryButton } from "../primary";

describe('<PrimaryButton />', () => {
  it('mount', () => {
    cy.mount(<PrimaryButton>Button</PrimaryButton>)
  })
})