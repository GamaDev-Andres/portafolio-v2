/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import ListOfLinks from '../../components/ListOfLinks'
import AppRouter from '../../routes/AppRouter'

describe('probando <ListOfLinks/>', () => {
  test('debe montarse correctamente', () => {
    const wrapper = Enzyme.mount(
      <ListOfLinks />
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('debe montarse correctamente en telefono', () => {
    const wrapper = Enzyme.mount(
      <ListOfLinks ViewInPhone={true} />

    )

    const spans = wrapper.find('span')
    spans.forEach(span => {
      expect(span.hasClass('text-xs')).toBe(true)
    })
  })
  test('no debe de mostrarse en ruta "project"', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/project/BARBERAPP']}>
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider>
      </MemoryRouter>
    )
    expect(wrapper.find('ListOfLinks').exists()).toBe(false)
  })
})
