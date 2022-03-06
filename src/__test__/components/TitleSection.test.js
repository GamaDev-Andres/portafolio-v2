/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import TitleSection from '../../components/TitleSection'

describe('probando <TitleSection/>', () => {
  test('debe montarse correctamente', () => {
    const texto = 'prueba'
    const wrapper = Enzyme.mount(
      <TitleSection textInSpan={texto}>
        Primer</TitleSection>)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('span').text().trim()).toBe(texto)
  })
})
