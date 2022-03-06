/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import ButtonModeDark from '../../components/ButtonModeDark'

describe('probando <ButtonModeDark/>', () => {
  let wrapper = Enzyme.mount(
    <ButtonModeDark />
  )
  beforeEach(() => {
    wrapper = Enzyme.mount(<ButtonModeDark />)
    localStorage.clear()
  })
  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('button').exists()).toBe(true)
  })
  test('debe montarse correctamente en modo dark y no dark', () => {
    localStorage.setItem('isDark', 'true')
    wrapper = Enzyme.mount(<ButtonModeDark />)

    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find('i').hasClass('text-letra-dark')).toBe(true)
  })
  test('debe de cambiar el localstorage y poner modo dark cuando hace click', () => {
    localStorage.setItem('isDark', 'true')
    wrapper = Enzyme.mount(<ButtonModeDark />)

    wrapper.find('button').at(0).simulate('click')
    expect(wrapper.find('i').hasClass('text-letra-dark')).toBe(false)
  })
})
