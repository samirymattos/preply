import { LoadMoreButton } from "../load-more";

describe('<LoadMoreButton />', () => {
  it('checking click operation', () => {
    cy.mount(<LoadMoreButton onClick={console.log("click")}/>)
    cy.get('#load-more-button').click()
    cy.log('click')
  })
})