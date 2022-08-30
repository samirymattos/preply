import { Caption } from './caption';

describe('<Caption />', () => {
  it('mount', () => {
    cy.mount(<Caption>Test</Caption>)
  })
})