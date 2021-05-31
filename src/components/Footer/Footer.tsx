import { FunctionComponent } from 'react';
import './footer.css';
import { Link } from 'react-router-dom';


const Footer: FunctionComponent = () => {
  return (
<div className='footer-container'>
  <section className='social-media'>
    <div className='social-media-wrap'>
      <div className='footer-logo'>
        <Link to='/' className='social-logo'>
          Burbidge
        </Link>
      </div>
    </div>
  </section>
  </div>
  );
}

export default (Footer);
