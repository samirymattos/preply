import { H1 } from '../h1';

describe('<H1 />', () => {
  it('mount', () => {
    cy.mount(<H1>Test</H1>)
  })
})