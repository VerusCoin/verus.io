const Exchange = ({ exchange }) => {
  const { image, title, trade, kyc, URI, URIText } = exchange;
  return (
    <div className="flex flex-col max-w-sm p-4 text-center justify-items-start">
      <img
        src={`/images/icons/exchange/${image}`}
        width="50%"
        className="self-center py-4"
        alt={`${image} Icon`}
      />

      <h3 className="m-0 font-normal md:text-2xl">{title}</h3>
      <p className="m-0 text-sm text-gray-600 ">{trade}</p>
      <p className="m-0 text-sm text-gray-600 ">{kyc}</p>
      <a
        href={URI}
        target="_blank"
        className="py-2 leading-relaxed underline cursor-pointer"
      >
        Go To {URIText}
      </a>
    </div>
  );
};

export default Exchange;
