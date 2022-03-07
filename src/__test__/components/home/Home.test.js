/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import Home from '../../../components/home/Home'
import AppRouter from '../../../routes/AppRouter'
describe('probando <Home/>', () => {
  test('debe montarse correctamente', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter>
        <HelmetProvider>
          <Home />
        </HelmetProvider>
      </MemoryRouter>)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('SectionProjects').exists()).toBe(true)
  })
  test('No debe mostrarse en ruta " project "', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/project/BARBERAPP']}>
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider>
      </MemoryRouter>)
    expect(wrapper.find('Home').exists()).toBe(false)
  })
})
