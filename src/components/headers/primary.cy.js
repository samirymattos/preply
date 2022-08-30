import { PrimaryHeader } from './primary';

describe('<PrimaryHeader />', () => {
  beforeEach(() => {
    cy.viewport(1920, 125)
  })
  it('mount', () => {
    cy.mount(<PrimaryHeader />)
  })
})