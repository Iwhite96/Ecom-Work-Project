import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Highlight from './ui/Higlight.jsx'


const Highlights = () => {
  return (
<section id="highlights">
    <div className="container">
        <div className="row">
            <h2 className="section__title">
                Why Choose <span className="purple">
                    Library
                </span>
            </h2>
            <div className="highlight__wrapper">
                <Highlight
                icon={<FontAwesomeIcon icon="bolt"/>}
                title="Easy and Quick"
                para=" Get Acces to the book you purchase online INSTANTLY"/>
            
                <Highlight 
                icon={<FontAwesomeIcon icon="book-open"/>}
                title="Affordable"
                para=" Get your hands on bestsellers for as little as $10"/>
            
                <Highlight 
                icon={<FontAwesomeIcon icon="tags"/>}
                title="10,000+ Books"
                para=" Library has all of your favorite catagories"/>
            
            </div>
        </div>
    </div>
</section>
  )
}

export default Highlights
