/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import NavProject from '../../../components/project/NavProject'
import AppRouter from '../../../routes/AppRouter'

describe('probando <NavProject/>', () => {
  test('debe montarse correctamente', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter>
        <NavProject />
      </MemoryRouter>)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h1').text().trim()).toBe('GamaDev')
  })
  test('debe montarse correctamente en ruta "project" ', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/project/BARBERAPP']}>
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider>
      </MemoryRouter>
    )
    expect(wrapper.find('NavProject').exists()).toBe(true)
  })
})
