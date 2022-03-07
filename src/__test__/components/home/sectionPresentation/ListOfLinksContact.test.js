/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import ListOfLinksContact from '../../../../components/home/sectionPresentation/ListOfLinksContact'

describe('probando <ListOfLinksContact/>', () => {
  const wrapper = Enzyme.mount(
    <ListOfLinksContact />
  )
  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('a').length).toBe(3)
  })
})
