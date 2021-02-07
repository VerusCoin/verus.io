const Contributors = ({ person }) => {
  const { name, title, description } = person
  return (
    <div
      key={name}
      className="flex flex-col p-8 mt-4 text-center border border-solid rounded-lg justify-items-start"
    >
      <h3 className="font-normal  md:text-xl text-bluebutton-default">
        {name}
      </h3>
      <p className="mt-1 mb-6 text-sm text-gray-600 ">{title}</p>
      <p className="mt-4 text-sm leading-relaxed text-left text-gray-700">
        {description}
      </p>
    </div>
  )
}

export default Contributors
