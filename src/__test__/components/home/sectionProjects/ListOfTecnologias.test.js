/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import ListOfTecnologias from '../../../../components/home/sectionProjects/ListOfTecnologias'

describe('probando <ListOfTecnologias/>', () => {
  const tecnologias = ['react', 'js', 'css', 'html']
  const wrapper = Enzyme.mount(
    <ListOfTecnologias tecnologias={tecnologias} />
  )
  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h3').text().trim()).toBe('Tecnologias implementadas')
    expect(wrapper.find('li').length).toBe(tecnologias.length)
  })
})
