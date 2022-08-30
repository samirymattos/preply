import { Span } from '../span';

describe('<Span />', () => {
  it('mount', () => {
    cy.mount(<Span>Test</Span>)
  })
})