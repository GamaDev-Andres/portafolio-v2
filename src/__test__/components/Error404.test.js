/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import Error404 from '../../components/Error404'
import AppRouter from '../../routes/AppRouter'

describe('probando <Error404/>', () => {
  test('debe montarse correctamente', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter>
        <Error404 />
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h2').text().trim()).toBe('¡Error 404!')
  })
  test('debe montarse en un ruta no existente', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/edeefeefefef']}>
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider>
      </MemoryRouter>
    )
    expect(wrapper.find('Error404').exists()).toBe(true)
  })
})
