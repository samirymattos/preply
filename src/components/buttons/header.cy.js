import * as image from "../../assets";
import { HeaderButton } from "./header";

describe('<HeaderButton />', () => {
  it('mount', () => {
    cy.mount(<HeaderButton image={image.GlobeWhiteIcon}>English USD $</HeaderButton>)
  })
})