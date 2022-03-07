/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import SectionProjects from '../../../../components/home/sectionProjects/SectionProjects'
import AppRouter from '../../../../routes/AppRouter'

describe('probando <SectionProjects/>', () => {
  const wrapper = Enzyme.mount(
    <MemoryRouter>
      <SectionProjects />
    </MemoryRouter>
  )
  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('TitleSection').length).toBe(1)
    expect(wrapper.find('ListOfCardsProjects').exists()).toBe(true)
  })
  test('No debe montarse en ruta "project"', () => {
    const wrapper = Enzyme.mount(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/project/BARBERAPP']}>
          <AppRouter />
        </MemoryRouter>
      </HelmetProvider>
    )
    expect(wrapper.find('SectionProjects').exists()).toBe(false)
  })
})
