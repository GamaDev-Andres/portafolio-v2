/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import SectionAboutMe from '../../../../components/home/sectionAboutMe/SectionAboutMe'
import AppRouter from '../../../../routes/AppRouter'

describe('probando <SectionAboutMe/>', () => {
  const wrapper = Enzyme.mount(
    <SectionAboutMe />
  )
  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('TitleSection').length).toBe(1)
    expect(wrapper.find('MiDescripcion').length).toBe(1)
  })
  test('No debe montarse en ruta "project"', () => {
    const wrapper = Enzyme.mount(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/project/BARBERAPP']}>
          <AppRouter />
        </MemoryRouter>
      </HelmetProvider>
    )
    expect(wrapper.find('SectionAboutMe').exists()).toBe(false)
  })
})
