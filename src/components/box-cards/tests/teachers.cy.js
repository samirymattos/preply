import { TeacherCardBox } from "../teachers";

describe('<TeacherCardBox />', () => {
  beforeEach(() => {
    cy.viewport(1920, 1000)
  })
  it('checking if clicking will show 6 more cards and disappear', () => {
    cy.mount(<TeacherCardBox />)
    cy.get('#card-box').find('.card').should('have.length', 6)
    cy.get('#load-more-button').should('be.visible').click()
    cy.get('#load-more-button').should('not.exist')
    cy.get('#card-box').find('.card').should('have.length', 12)
  })
})