/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import NavBarFooter from '../../components/NavBarFooter'
import AppRouter from '../../routes/AppRouter'

describe('probando <NavBarFooter/>', () => {
  test('debe montarse correctamente', () => {
    const wrapper = Enzyme.mount(
      <NavBarFooter />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('nav').find('ListOfLinks').length).toBe(1)
  })

  test('No debe de montarse', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/project/BARBERAPP']}>
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider >
      </MemoryRouter>
    )
    expect(wrapper.find('NavBarFooter').exists()).toBe(false)
  })
})
