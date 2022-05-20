/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'
import SectionInProject from '../../../components/project/SectionInProject'
import { proyectos } from '../../../helpers/data'
import AppRouter from '../../../routes/AppRouter'

describe('probando <SectionProject/>', () => {
  const proyecto = proyectos.find(project => project.detalles).detalles[0]
  test('debe montarse correctamente ', () => {
    const wrapper = Enzyme.mount(
      <SectionInProject titulo={proyecto.titulo} arrImgs={proyecto.fotos} descripcion={proyecto.data} />
    )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h3').text().trim()).toBe(proyecto.titulo)
    expect(wrapper.find('p').text().trim()).toBe(proyecto.data)
  })
  test('no debe de mostrarse en la ruta "home"', () => {
    const wrapper = Enzyme.mount(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/']}>
          <AppRouter />
        </MemoryRouter>
      </HelmetProvider>
    )
    expect(wrapper.find('SectionProject').exists()).toBe(false)
  })
})
