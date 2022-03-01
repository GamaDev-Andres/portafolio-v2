/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import App from '../App'

describe('probando <App/>', () => {
  test('debe montarse correctamente', () => {
    const wrapper = Enzyme.mount(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
