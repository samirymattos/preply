import { HeaderSearch } from '../header';

describe('<HeaderSearch />', () => {
  beforeEach(() => {
    cy.viewport(1920, 125)
  })
  it('mount', () => {
    cy.mount(<HeaderSearch />)
  })
})