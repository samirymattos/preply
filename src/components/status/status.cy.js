import { Status } from './status';

describe('<Status />', () => {
  beforeEach(() => {
    cy.viewport(70, 40)
  })
  it('mount', () => {
    cy.mount(<Status>Online</Status>)
  })
})