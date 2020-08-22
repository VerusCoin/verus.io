import ReactMarkdown from 'react-markdown';

const MarkdownModal = ({ modalTitle, modalBody, modalToggle, modalShow }) => {
  return (
    // <!--MarkdownModal-->
    <div
      className={
        'fixed top-0 left-0 z-30 p-10 flex items-center justify-center w-full h-full modal' +
        (modalShow ? '' : ' hidden')
      }
    >
      <div
        onClick={() => modalToggle(false)}
        className="absolute z-40 w-full h-full bg-gray-900 opacity-50 modal-overlay"
      ></div>

      <div className="z-50 w-10/12 h-full overflow-y-auto bg-white rounded shadow-lg modal-container">
        {/* <!-- Add margin if you want to see some of the overlay behind the modal--> */}
        <div className="px-6 py-4 text-left modal-content">
          {/* <!--Title--> */}
          <div className="flex items-center justify-between ">
            <p className="text-2xl font-bold">{modalTitle}</p>
            <div className="cursor-pointer">
              <svg
                className="text-black fill-current"
                onClick={() => modalToggle(false)}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
          </div>

          {/* <!--Body--> */}
          <div className="markdown">
            <ReactMarkdown source={modalBody} />
          </div>
          {/* <!--Footer--> */}
          <div className="flex justify-end pt-2 border-2 border-b-0 border-l-0 border-r-0 border-gray-400 border-solid">
            <button
              onClick={() => modalToggle(false)}
              className="p-3 px-4 text-white border-0 rounded-full cursor-pointer focus:outline-none bg-bluebutton hover:bg-bluebutton-hover"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarkdownModal;
