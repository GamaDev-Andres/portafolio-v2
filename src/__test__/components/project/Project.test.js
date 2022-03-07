/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import AppRouter from '../../../routes/AppRouter'

describe('probando <Project/>', () => {
  test('debe montarse correctamente en ruta "project/BARBERAPP" ', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter initialEntries={['/project/BARBERAPP']}>
        <HelmetProvider>
          <AppRouter />
        </HelmetProvider>
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find('Project').exists()).toBe(true)
  })
})
