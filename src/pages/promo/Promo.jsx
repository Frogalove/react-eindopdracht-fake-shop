
import './Promo.css'
import promoImg from'/src/assets/img/header-img.jpg';
const Promo = () => {
 return (<section className='promo'>
      <div className='container'>
        <div className='promo_content'>
          <div className='promo_text>'>

            <div className='promo_title'>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              LET'S EXPLORE UNIQUE CLOTHES.
            </div>

            <div className='promo_desc'>
              Live for influential and Innovative fashion!
            </div>

            <div className='promo_btn-wrapper'>
              <a href="#!" className='promo_btn'> Shop Now
              </a>

            </div>


          </div>
          <div className='promo_img'>
            <img src={promoImg} alt="Promo"/>;
          </div>

        </div>
      </div>

        </section>);

}

export default Promo;