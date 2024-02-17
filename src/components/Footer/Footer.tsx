import "./footer.scss";
import footerOne from "../../assets/footer_1.png"
import footerTwo from "../../assets/footer_2.png"
import footerThree from "../../assets/footer_3.png"
import footerFour from "../../assets/footer_4.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"
import medium from "../../assets/medium.png"

const Footer = () => {
  return (
    <div className="footer mt-20">

      <div className="footer_container flex flex-col gap-16 container mx-auto p-10 flex-wrap">
        <div className="footer_top flex flex-row">

          <div className="footer_what_is flex flex-col gap-8">
            <h4 className="font-bold text-md">What is Deuplpoad</h4>

            <p className="font-light text-sm w-70">
              Deupload is a cloud storage services based on Blockchain and Web3
              technology, designed to help teams collaborate and file sharing in a
              completely private like never before.
            </p>

            <div className="what_is_images flex flex-wrap gap-4 justify-start">
              <img src={footerOne} alt="footer_image" className="bock" />
              <img src={footerTwo} alt="footer_image" className="bock" />
              <img src={footerThree} alt="footer_image" className="bock" />
              <img src={footerFour} alt="footer_image" className="bock" />
            </div>

          </div>

          <div className="footer_details flex flex-wrap justify-evenly">
            <div className="footer_details_each">
              <h3>Products</h3>
              <ul>
                <li>Features</li>
                <li>Solutions</li>
                <li>Pricing</li>
                <li>Token</li>
                <li>Security</li>
                <li>Comparison</li>
              </ul>
            </div>

              <div className="footer_details_each">
                <h3>Resource</h3>
                <ul>
                  <li>Whitepaper</li>
                  <li>Developer</li>
                  <li>Brand kits</li>
                  <li>Compliance</li>
                  <li>Privacy Policy</li>
                  <li>Terms of service</li>
                </ul>
              </div>

              <div className="footer_details_each">
                <h3>Community</h3>
                <ul>
                  <li>Guide</li>
                  <li>Blog</li>
                  <li>FAQs</li>
                  <li>Forum</li>
                  <li>Help center</li>
                  <li>Support desk</li>
                </ul>
              </div>
          </div>

        </div>

        <div className="footer_down flex flex-wrap justify-between">

          <div className="text-sm font-light">© 2022 Deupload. Powered by Conikal LLC</div>
          <div className="footer_social flex gap-2">
            <img src={facebook} alt="socials" />
            <img src={twitter} alt="socials" />
            <img src={youtube} alt="socials" />
            <img src={medium} alt="socials" />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Footer;
