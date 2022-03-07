/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import ArticleDescription from '../../../../components/home/sectionAboutMe/ArticleDescription'
import { miDescripcion } from '../../../../helpers/data'

describe('probando <ArticleDescription/>', () => {
  test('debe montarse correctamente', () => {
    const article = miDescripcion.quienSoy
    const wrapper = Enzyme.mount(
      <ArticleDescription obj={article} title="Quien soy" />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('article').exists()).toBe(true)
    expect(wrapper.find('span').text().trim()).toBe('Quien soy')
  })
})
