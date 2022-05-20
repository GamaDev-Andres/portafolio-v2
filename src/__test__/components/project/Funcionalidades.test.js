/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import Funcionalidades from '../../../components/project/Funcionalidades'
import { proyectos } from '../../../helpers/data'
import AppRouter from '../../../routes/AppRouter'
describe('probando <Funcionalidades/>', () => {
  const proyecto = proyectos.find(project => project.detalles)
  test('debe montarse correctamente', () => {
    const wrapper = Enzyme.mount(
      <Funcionalidades proyecto={proyecto} />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h2').text().trim()).toBe('Funcionalidades')
  })
  test('debe montarse correctamente en ruta "project" ', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/project/BARBERAPP']}>
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider>
      </MemoryRouter>
    )
    expect(wrapper.find('Funcionalidades').exists()).toBe(true)
  })
})
