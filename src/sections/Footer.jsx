import Collapse from '../components/Collapse';

import logoFooter from '../img/logo-footer.png';
import twitter from '../img/twitter.png';
import youtube from '../img/youtube.png';
import linked from '../img/linked.png';

import { listFooterItem } from '../data/footer';

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-inner'>
        <div className='footer-content'>
            <div className='footer-content-collapse-list'>
                {listFooterItem.map((footerItem,index) => 
                    <Collapse key={index} data={footerItem}/>
                )}
            </div>
            <div className='footer-content-left'>
            <img src={logoFooter} className='footer-content-logo' alt="logo"/>
            <p className='footer-content-address p2'>Valletta Buildings, South Street, Valletta - VLT 1103 Malta</p>
            <p className='footer-content-copyright p3'>COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</p>
            <div className='footer-content-social'>
                <img src={twitter} alt="icon"/>
                <img src={youtube} alt="icon"/>
                <img src={linked} alt="icon"/>
            </div>
            </div>
            <div className='footer-content-right'>
            {listFooterItem.map((footerItem) => 
                <div key={footerItem.value} className='footer-content-item '>
                  <p className='footer-content-item-title p4'>{footerItem.label}</p>
                  <div className='footer-content-item-list'>
                      {footerItem.items.map((item,index) => <p className='p2' key={index}>{item}</p>)}
                  </div>
                </div>
            )}
            </div>
        </div>
        <p className='footer-copyright p3'>COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</p>
        </div>
    </footer>
  );
}

export default Footer;
