const Contributors = ({ person }) => {
  const { name, title, description } = person;
  return (
    <div className="mt-6 flex flex-col max-w-sm p-4 text-center justify-items-start">
      <h3 className="mt-2 font-normal md:text-xl text-bluebutton">{name}</h3>
      <p className="mt-1 mb-6 text-sm text-gray-600 ">{title}</p>
      <p className="m-0 text-sm text-left text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Contributors;
