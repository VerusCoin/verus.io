const Contributors = ({ person }) => {
  const { name, title, description } = person;
  return (
    <div className="flex flex-col max-w-sm p-4 text-center justify-items-start">
      <h3 className="m-0 font-normal md:text-2xl text-bluebutton">{name}</h3>
      <p className="mt-0 mb-6 text-sm text-gray-600 ">{title}</p>
      <p className="m-0 text-sm text-left text-gray-600 ">
        {description}
      </p>
    </div>
  );
};

export default Contributors;
