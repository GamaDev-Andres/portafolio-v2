/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import App from '../../App'
import Footer from '../../components/Footer'

describe('probando <Footer/>', () => {
  test('debe montarse correctamente', () => {
    const wrapper = Enzyme.mount(
      <Footer />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('footer').exists()).toBe(true)
    expect(wrapper.find('p').text().trim()).toBe('Hecho con 💙 por Andres Gama')
  })
  test('debe montarse en todas las rutas', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/', '/project/BARBERAPP']}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </MemoryRouter>)
    expect(wrapper.find('footer').exists()).toBe(true)
  })
})
