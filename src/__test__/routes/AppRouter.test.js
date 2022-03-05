/**
 * @jest-environment jsdom
 */
import { mount } from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../routes/AppRouter'

describe('probando <AppRouter/>', () => {
  test('debe montar AppROuter', () => {
    const wrapper = mount(
      <HelmetProvider>

        <MemoryRouter >
          <AppRouter />
        </MemoryRouter>
      </HelmetProvider>
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('debe montar Home', () => {
    const wrapper = mount(
      <HelmetProvider>

        <MemoryRouter initialEntries={['/']}>
          <AppRouter />
        </MemoryRouter>
      </HelmetProvider>)
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find('section#inicio'))
  })
  test('debe montar Proyecto BARBERAPP', () => {
    const wrapper = mount(
      <HelmetProvider>

        <MemoryRouter initialEntries={['/project/BARBERAPP']}>
          <AppRouter />
        </MemoryRouter>
      </HelmetProvider>)
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find('NavProject').length).toBe(1)
  })
  //
})
