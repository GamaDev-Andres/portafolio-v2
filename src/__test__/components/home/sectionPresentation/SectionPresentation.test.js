/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import SectionPresentation from '../../../../components/home/sectionPresentation/SectionPresentation'
import AppRouter from '../../../../routes/AppRouter'

describe('probando <SectionPresentation/>', () => {
  const wrapper = Enzyme.mount(
    <SectionPresentation />
  )
  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('FigureFoto').length).toBe(1)
    expect(wrapper.find('ResumenDescription').exists()).toBe(true)
  })
  test('No debe montarse en ruta "project"', () => {
    const wrapper = Enzyme.mount(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/project/BARBERAPP']}>
          <AppRouter />
        </MemoryRouter>
      </HelmetProvider>
    )
    expect(wrapper.find('SectionPresentation').exists()).toBe(false)
  })
})
