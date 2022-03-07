/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import TitleAndLinksProject from '../../../../components/home/sectionProjects/TitleAndLinksProject'
import { proyectos } from '../../../../helpers/data'

describe('probando <TitleAndLinksProject/>', () => {
  const proyecto = proyectos[0]
  const wrapper = Enzyme.mount(
    <TitleAndLinksProject project={proyecto} />
  )
  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('a').length).toBe(2)
  })
})
