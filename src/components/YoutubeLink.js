const YoutubeLink = ({ title, URI }) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${URI}`}
      target="_blank"
      className="flex items-center mt-8"
    >
      <img
        src="/images/icons/play-icon.svg"
        alt="Play Logo"
        className="w-8 mr-3"
      />
      <p className="text-lg text-black underline font-foot external">{title}</p>
    </a>
  )
}

export default YoutubeLink
