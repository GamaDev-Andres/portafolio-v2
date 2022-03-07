/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import TitlePageProject from '../../../components/project/TitlePageProject'
import { proyectos } from '../../../helpers/data'

describe('probando <TitlePageProject/>', () => {
  const proyecto = proyectos[0]
  test('debe montarse correctamente', () => {
    const wrapper = Enzyme.mount(
      <TitlePageProject titulo={proyecto.titulo} codigo={proyecto.codigo} url={proyecto.url} />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h2').text().trim()).toBe(proyecto.titulo)
    expect(wrapper.find('small').find('a').length).toBe(2)
  })
})
