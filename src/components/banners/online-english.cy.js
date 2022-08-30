import { OnlineEnglishBanner } from "./online-english";

describe('<OnlineEnglishBanner>', () => {
  beforeEach(() => {
    cy.viewport(1920, 615)
  })
  it('mounts', () => {
    cy.mount(<OnlineEnglishBanner />)
    cy.get('#online-english-banner').should('be.visible')
  })
})