/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import Habilidad from '../../../../components/home/sectionHabilidades/Habilidad'

describe('probando <Habilidad/>', () => {
  const children = 'Desarrollo front-end'
  const wrapper = Enzyme.mount(
    <Habilidad porcentaje="w-[80%]">{children}</Habilidad>

  )
  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('span').at(0).text().trim()).toBe(children)
  })
})
