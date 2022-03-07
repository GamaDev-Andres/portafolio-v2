/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import ResumenDescription from '../../../../components/home/sectionPresentation/ResumenDescription'

describe('probando <ResumeDescription/>', () => {
  const wrapper = Enzyme.mount(
    <ResumenDescription />
  )
  test('debe montarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('span').at(0).text().trim()).toBe('Hola soy')
  })
})
