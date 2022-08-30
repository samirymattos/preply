import { TeacherCard } from '../teacher';
import * as image from "../../assets";

describe('<TeacherCard />', () => {
  const teacher = {
    name: "Luca Giusepe",
    description: "Italian teacher",
    rating: "5,0",
    reviews: "6",
    price: "5,00",
    status: "Online",
    avatar: `${image.AvatarLuca}`,
    background_image: `${image.BackgroundLuca}`,
    has_verified: true
  }
  
  it('mount', () => {
    cy.mount(<TeacherCard teacher={teacher}/>)
  })
})