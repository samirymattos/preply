import { LoginButton } from "./login";

describe('<LoginButton />', () => {
  it('mount', () => {
    cy.mount(<LoginButton/>)
  })
})