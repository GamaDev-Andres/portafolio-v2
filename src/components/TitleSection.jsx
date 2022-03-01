/* eslint-disable multiline-ternary */
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const TitleSection = ({ textInSpan, unOrder = false, children }) => {
  return (
    <h2 className="my-4 uppercase font-bold text-3xl md:text-center">
      {unOrder ? (
        <>
          {children} <span className="text-blue-400">{textInSpan}</span>
        </>
      ) : (
        <>
          <span className="text-blue-400">{textInSpan}</span> {children}
        </>
      )}
    </h2>
  )
}

TitleSection.propTypes = {
  textInSpan: PropTypes.string.isRequired,
  unOrder: PropTypes.bool
}
export default TitleSection
