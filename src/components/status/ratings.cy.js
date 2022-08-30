import { RatingsSpan } from './ratings';

describe('<RatingsSpan />', () => {
  beforeEach(() => {
    cy.viewport(50, 40)
  })
  it('mount', () => {
    cy.mount(<RatingsSpan>4.5</RatingsSpan>)
  })
})