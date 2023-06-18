export function Title(props) {
  return (
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      {props.children}
    </h1>
  )
}

export function Text(props) {
  return (
    <p className="mt-6 text-lg leading-8 text-gray-600">
      {props.children}
    </p>
  )
}