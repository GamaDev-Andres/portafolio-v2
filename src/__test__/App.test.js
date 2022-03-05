/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('probando <App/>', () => {
  test('debe montarse correctamente', () => {
    const wrapper = Enzyme.mount(
      <MemoryRouter>
        <App />
      </MemoryRouter>)
    expect(wrapper).toMatchSnapshot()
  })
})
