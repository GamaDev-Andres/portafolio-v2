/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import NavBar from '../../components/NavBar'
import AppRouter from '../../routes/AppRouter'

describe('probando <NavBar/>', () => {
  test('debe montarse correctamente', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter>

        <NavBar />
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h1').text().trim()).toBe('GamaDev')
    expect(wrapper.find('ListOfLinks').exists()).toBe(true)
  })
  test('no debe de mostrarse en ruta "project"', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/project/BARBERAPP']}>
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider>
      </MemoryRouter>
    )
    expect(wrapper.find('NavBar').exists()).toBe(false)
  })
})
