export function TextContainer(props) {
  const {
    alignment // center, left, right
  } = props

  return (
    <div className={`text-${alignment}`}>
      {props.children}
    </div>
  )
}

export function FlexContainer(props) {
  const {
    marginTop, // int (units)
    horizontalAlignment, // i.e center, end, start
    verticalAlignment, // i.e center, end, start
    horizontalItemSpacing, // int (units)
  } = props

  return (
    <div className={`mt-${marginTop} flex items-${verticalAlignment} justify-${horizontalAlignment} gap-x-${horizontalItemSpacing}`}>
      {props.children}
    </div>
  )
}

export function MainContentContainer(props) {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      {props.children}
    </div>
  )
}