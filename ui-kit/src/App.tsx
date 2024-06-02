import Header from "./Header";
import Footer from "./Footer";
import Main from "./Page";

import { headerList } from "./Content"
import { footerInfo } from "./Content"
import { proposalList } from "./Content"

import "./css/App.css"

import Offers from "./Offers";
import OfferItem from "./OfferItem";
import InfoPopUp from "./InfoPopUp";


export default function App() {

  return (<>
    <div className="wrapper">
      <Header links={headerList}></Header>
      <Main >
        <Offers title="Пропозиції">
        
          <InfoPopUp ></InfoPopUp>
          {proposalList.proposalItem.map((item, index) => (

            <OfferItem key={index} offerItem={item}>

            </OfferItem>


          )
          )}



        </Offers>
      </Main>
      <Footer footerMedia={footerInfo.footerMedia} footerLogo={footerInfo.footerLogo} footerDate={footerInfo.footerDate}></Footer>
    </div>
  </>

  );


}


