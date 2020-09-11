import Menu from '../../components/Menu';
import { technologyLinks } from '../../constants/technology';
import FooterMenu from '../../components/FooterMenu';

const Verusid = () => {
  return (
    <>
      <div className="container grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-4">
        <div className="">
          <Menu pathList={technologyLinks} href="/technology" />
        </div>
        <div className="p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-4xl font-normal text-bluebutton">
            VerusID
          </h1>
          <p className="text-xl font-light leading-normal font-p">Content</p>
          <p className="text-xl font-light leading-normal font-p">Content</p>
          <h2 className="mt-16 text-2xl font-normal">H2</h2>
        </div>
      </div>
      <FooterMenu hrefLocation="/technology" pathList={technologyLinks} />
    </>
  );
};

export default Verusid;
