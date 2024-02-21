import { lazy } from "react"
import "./home.scss";
import "../../styles/generic.scss";
import home_header_picture from "../../assets/home/home_header_picture.svg";
import block from "../../assets/home/block.svg";
import circleNode from "../../assets/home/circle_nodes.svg";
import keyHole from "../../assets/home/keyhole.svg";
import home_file_sharing from "../../assets/home/file_sharing.svg";
import collect_files from "../../assets/home/file_sharing.svg";
import t_collab from "../../assets/home/Group 232.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import hardDrive from "../../assets/home/hard-drive.svg";
import leaf from "../../assets/home/leaf.svg"
import doorOpen from "../../assets/home/door-open.svg";
import shieldCheck from "../../assets/home/shield-check .svg"
import code from "../../assets/home/code.svg";


const NavLink = lazy(() => import("../../components/NavLink/NavLink"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const TextHeader = lazy(() => import("../../components/headerText/TextHeader"));
const SmallCard = lazy(() => import("../../components/card/SmallCard"))



const Home = () => {
  return (
    <div>
        <NavLink />

        <header className="home_header">
          <h1 className="h1_header">File storage and sharing for remote teams that work together on <span className="purple_text">Web3</span></h1>
          <p>Deupload is a online file manager on decentralized cloud storage and IPFS that allows you storage, share, collect files privately and team collaboration without subscription. </p>
          <div className="btn_group">
            <button className="purple_btn">Get Started</button>
            <button className="transparent_btn">Pricing</button>
          </div>
        </header>

        <div className="home_header_picture">
          <img src={home_header_picture} alt="picture" />
        </div>

        <section className="home_lightening">

          <TextHeader 
            text="You can choose continue to use centralized cloud storage but we have some better reasons for you to start moving to decentralized storage because it is simply the future of the internet."
            header="Lightning fast. Better privacy. Fairer cost."
          />

            <div className="home_lightening_cards">

              <SmallCard
              backgroundColor="#651FFF"
              circleColor="#ECECFE"
              image={keyHole}
              header="Lightweight"
              headerColor="#ECECFE"
              text="Designed to be lightweight to help you enhance team collaboration by organizing and sharing files in your projects without stress."
              textColor="#fff"
              link="Products features"
              linkColor="#fff"
            />
              <SmallCard
              backgroundColor="#651FFF"
              circleColor="#ECECFE"
              image={circleNode}
              header="Decentralization"
              headerColor="#ECECFE"
              text="Store data securely on over 13k nodes worldwide instead of just a few vulnerable data centers with privacy and lightning speed by design."
              textColor="#fff"
              link="How it works"
              linkColor="#fff"
            />
              <SmallCard
              backgroundColor="#651FFF"
              circleColor="#ECECFE"
              image={block}
              header="No subscription"
              headerColor="#ECECFE"
              text="With Pay-as-you-go pricing, now you only pay for the resource you use without being charged a flat monthly fee even if you dont use it up."
              textColor="#fff"
              link="Metered billing"
              linkColor="#fff"
            />
            </div>

         </section>

         <h1 className="h1_header lightweight_header">Lightweight design, ready to use for <span className="purple_text">team productivity.</span></h1>

         <section className="lightweight_small_cards container flex gap-8 mx-auto  justify-center items-center">

          <div className="lightweight_small_cards_first flex flex-col justify-center items-center p-4">
            <h1>File Sharing</h1>
            <p>Securely share files within or outside your organization, and control access, track edits, and analyze the shared content stats.</p>
            <div>
              <img src={home_file_sharing} alt="file sharing" />
            </div>
          </div>

          <div className="lightweight_small_cards_second flex flex-col justify-center items-center p-4">
            <h1>Collect Files</h1>
            <p>You can collect and receive files in a secure environment, even if the other person does not have a Deupload account. </p>
            <div>
              <img src={collect_files} alt="collect files" />
            </div>
          </div>

         </section>

         <div className="t_collab card_helper">

          <div className="t_collab_text card_helper_text">
            <h1 className="card_helper_h1"><span className="purple_text">Team collaboration</span> in  one simple place with privacy come first.</h1>
            <p className="card_helper_p">Securely share and work together with Deupload’s simple file storage and sharing, easy user management, unlimited file size, password protected links and more.</p>
            <div className="btn_group t_collab_btn">
              <button className="purple_btn">Start now</button>
              <button className="transparent_btn">More features</button>
            </div>
          </div>

          <div className="t_collab_image">
            <img src={t_collab} alt="t_collab" />
          </div>
         </div>

         <section className="decentralized flex flex-row item-center justify-center gap-16 container mx-auto">

          <article className="decentralized_text flex flex-col gap-20">

            <div className="decentralized_text_top">
              <h1 className="h1_header">Decentralized storage built for <span className="purple_text">better privacy</span>.</h1>
              <p>Store data securely on over 13k nodes worldwide instead of just a few vulnerable data centers with privacy. Every file is encrypted, split into pieces, and stored on a global network of nodes, making data breaches and downtime a thing of the past.</p>
            </div>
            <div className="decentralized_text_down flex flex-row gap-8">
              <div className="decentralized_text_down_each">
                <div className="decentralized_text_down_each_image_first">
                  <img src={hardDrive} alt="stuff" />
                </div>
                <h3>Upgrade your storage.</h3>
                <p>Better security, performance and cost, Deupload is the better way to store data.</p>
                <p className="decentralized_text_down_each_p" style={{
                  color: "#00E5FF"
                }}>learn use cases <IoIosArrowRoundForward /></p>
              </div>
              <div className="decentralized_text_down_each">
                <div className="decentralized_text_down_each_image_second">
                  <img src={leaf} alt="stuff" />
                </div>
                <h3>Carbon neutral storage.</h3>
                <p>Utilizing existing unused storage capacity on recycled hardware around the world.</p>
                <p className="decentralized_text_down_each_p" style={{
                  color: "#34D399"
                }}>learn use cases <IoIosArrowRoundForward /></p>
              </div>
            </div>

          </article>

          <article className="decentralized_cards flex flex-col justify-center items-center gap-4">
            <div className="decentralized_cards_each">
              <div className="decentralized_cards_each_image">
                <img src={doorOpen} alt="stuff" />
              </div>
              <div>
                <h2>Private by design</h2>
                <p>We believe data privacy is a human right, which is why Deupload is built on a decentralized architecture that makes data breaches a thing of the past.</p>
              </div>
            </div>
            <div className="decentralized_cards_each">
            <div className="decentralized_cards_each_image">
              <img src={shieldCheck} alt="stuff" />
            </div>
              <div>
                <h2>Distributed network</h2>
                <p>An object is never in one place. Data is split into 80 pieces, and distributed to uncorrelated Nodes. When you call for the data, it is automatically reconstituted in an instant.</p>
              </div>
            </div>
            <div className="decentralized_cards_each">
            <div className="decentralized_cards_each_image">
              <img src={code} alt="stuff" />
            </div>
              <div>
                <h2>Worldwide availability</h2>
                <p>Data is stored on Nodes that are selected by reputation and local latency. The fastest Nodes from this set are chosen to store pieces, ensuring quick access to your data.</p>
              </div>
            </div>
          </article>

         </section>

        <Footer />
    </div>
  )
}

export default Home