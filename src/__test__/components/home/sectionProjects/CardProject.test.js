/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import CardProject from '../../../../components/home/sectionProjects/CardProject'
import { proyectos } from '../../../../helpers/data'

describe('probando <CardProject/>', () => {
  const proyectoSinDetails = proyectos.at(-1)
  const wrapper = Enzyme.mount(
    <MemoryRouter>
      <CardProject project={proyectoSinDetails} />
    </MemoryRouter>
  )
  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('TitleAndLinksProject').length).toBe(1)
    expect(wrapper.find('ListOfTecnologias').exists()).toBe(true)
  })
  test('No debe montarse "Link" cuando no hay details', () => {
    expect(wrapper.find('Link').exists()).toBe(false)
  })
  test(' debe montarse "Link" cuando si hay details', () => {
    const proyectoConDetails = proyectos[0]
    const wrapper = Enzyme.mount(
      <MemoryRouter>
        <CardProject project={proyectoConDetails} withDetails={true} />
      </MemoryRouter>
    )
    expect(wrapper.find('Link').exists()).toBe(true)
  })
})
