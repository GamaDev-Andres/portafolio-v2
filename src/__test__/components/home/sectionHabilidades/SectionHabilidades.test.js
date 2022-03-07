/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import SectionHabilidades from '../../../../components/home/sectionHabilidades/SectionHabilidades'
import AppRouter from '../../../../routes/AppRouter'

describe('probando <SectionHabilidades/>', () => {
  const wrapper = Enzyme.mount(
    <SectionHabilidades />
  )
  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('TitleSection').length).toBe(1)
    expect(wrapper.find('Habilidad').exists()).toBe(true)
  })
  test('No debe montarse en ruta "project"', () => {
    const wrapper = Enzyme.mount(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/project/BARBERAPP']}>
          <AppRouter />
        </MemoryRouter>
      </HelmetProvider>
    )
    expect(wrapper.find('SectionHabilidades').exists()).toBe(false)
  })
})
