const Contributors = ({ person }) => {
  const { name, title, description } = person;
  return (
    <div className="mt-4 flex flex-col max-w-sm text-center justify-items-start p-8 border border-solid rounded-lg">
      <h3 className=" font-normal md:text-xl text-bluebutton">{name}</h3>
      <p className="mt-1 mb-6 text-sm text-gray-600 ">{title}</p>
      <p className="mt-4 text-sm text-left text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Contributors;
