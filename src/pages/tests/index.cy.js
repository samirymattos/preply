import { HomePage } from '../home';

describe('<HomePage />', () => {
  beforeEach(() => {
    cy.viewport(1920, 1500)
  })
  it('mount', () => {
    cy.mount(<HomePage />)
  })
})