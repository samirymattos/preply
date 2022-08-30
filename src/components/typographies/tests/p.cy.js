import { P } from '../p';

describe('<P />', () => {
  it('mount', () => {
    cy.mount(<P>Test</P>)
  })
})