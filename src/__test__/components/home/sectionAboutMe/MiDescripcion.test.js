/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import MiDescripcion from '../../../../components/home/sectionAboutMe/MiDescripcion'

describe('probando <MiDescripcion/>', () => {
  const wrapper = Enzyme.mount(
    <MiDescripcion />
  )
  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('ArticleDescription').length).toBe(1)
    expect(wrapper.find('button').exists()).toBe(true)
  })
  test('debe montar otro articulo cuando haga click', () => {
    wrapper.find('button').at(0).simulate('click')
    expect(wrapper.find('ArticleDescription').length).toBe(2)
  })
})
