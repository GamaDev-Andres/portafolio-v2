/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import ListOfCardsProjects from '../../../../components/home/sectionProjects/ListOfCardsProjects'
import { proyectos } from '../../../../helpers/data'

describe('probando <ListOfCardsProjects/>', () => {
  const wrapper = Enzyme.mount(
    <MemoryRouter>
      <ListOfCardsProjects />
    </MemoryRouter>
  )

  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('CardProject').length).toBe(proyectos.length)
  })
})
