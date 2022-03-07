/**
 * @jest-environment jsdom
 */
import Enzyme from 'enzyme'
import { ModalPortal } from '../../../components/modal/Modal'

describe('probando <ModalPortal/>', () => {
  const modalRoot = global.document.createElement('div')
  modalRoot.setAttribute('id', 'root-modal')
  const body = global.document.querySelector('body')
  body.appendChild(modalRoot)
  const jestFn = jest.fn()
  const wrapper = Enzyme.mount(
    <ModalPortal closeModal={jestFn} >
      <div id="hijo">soy un hijo</div>
    </ModalPortal>
  )

  const rootModal = document.querySelector('#root-modal')
  test('debe montarse correctamente en "#root-modal"', () => {
    expect(wrapper).toMatchSnapshot()
    expect(rootModal.hasChildNodes()).toBe(true)
  })
  test('debe mostrar el hijo enviado correctamente en "#root-modal"', () => {
    expect(wrapper.find('div#hijo').text().trim()).toBe('soy un hijo')
  })
  test('debe llamar a la funcion "close" correctamente al dark click en el wrapper', () => {
    wrapper.find('div').at(0).simulate('click')
    expect(jestFn).toHaveBeenCalled()
  })
  test('debe llamar a la funcion "close" correctamente al dark click en el span', () => {
    wrapper.find('span').at(0).simulate('click')
    expect(jestFn).toHaveBeenCalled()
  })
})
