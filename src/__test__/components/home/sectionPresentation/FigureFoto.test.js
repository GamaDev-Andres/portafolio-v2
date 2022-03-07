/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import FigureFoto from '../../../../components/home/sectionPresentation/FigureFoto'

describe('probando <FigureFoto/>', () => {
  const wrapper = Enzyme.mount(
    <FigureFoto />
  )
  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('figure').length).toBe(1)
  })
})
