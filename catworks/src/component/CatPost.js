import React from 'react'
import './cardStyling.css'

// import '@splidejs/splide/dist/css/themes/splide-default.min.css';

// Icons
import { ReactComponent as Timer } from './icons/time.svg'
import { ReactComponent as Comment } from './icons/comment.svg'

// Images
import angrycat from './images/angrycat.jpg';
import intriguedCat from './images/intrigued_cat.jpg';
import scaredCat from './images/scared_cat.jpg';
import tinyCat from './images/tiny_cat.jpg';
import grumpyCat from './images/grumpy_cat.jpg';
import dubiousCat from './images/dubious_cat.jpg';


export default function CatPost() {


    const Card1 = {
        background: `linear-gradient(359deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)50%), url(${angrycat})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        gridArea: '1 / 1 / 3 / 2',
        
    }
    const Card2 = {
        background: `linear-gradient(359deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)50%), url(${intriguedCat})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        gridArea: '1 / 2 / 2 / 3',
    }
    const Card3 = {
        background: `linear-gradient(359deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)50%), url(${scaredCat})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        gridArea: '2 / 2 / 3 / 3',
    }



    const Card4 = {
        background: `linear-gradient(359deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)40%), url(${dubiousCat})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',

        gridArea: '4 / 1 / 6 / 2',
    }
    const Card5 = {
        background: `linear-gradient(359deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)50%), url(${grumpyCat})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        gridArea: '4 / 2 / 5 / 3',
    }
    const Card6 = {
        background: `linear-gradient(359deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)50%), url(${tinyCat})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        gridArea: '5 / 2 / 6 / 3',
    }

    return (
        
            
        <div className="grid-container maincard">
        
            <div className="card card_full" style={Card1}>
                <div className="card-body">
                    <p className="category">Cat news</p>
                    <h5 className="card-title">Why is cat perfect for you</h5>
                    <a href="#" className="btn btn-cond"><Timer />1 min</a><a href="#" className="btn btn-primary"><Comment />11</a>
                </div>
            </div>
            <div className="card card_moitie" style={Card2}>
                <div className="card-body">
                    <h5 className="card-title">16 hilarious Cat Stories That Prove Cats Are The Best</h5>
                </div>
            </div>
            <div className="card card_moitie" style={Card3}>
                <div className="card-body">
                    <h5 className="card-title">Funny photos of cats stuck into awkward spaces</h5>
                </div>
            </div>
           
            <div className="card card_full" style={Card4}>
                <div className="card-body">
                    <p className="category">Internet jokes</p>
                    <h5 className="card-title">Cats & the intermet</h5>
                    <a href="#" className="btn btn-cond"><Timer />5 min</a><a href="#" className="btn btn-primary"><Comment />22</a>
                </div>
            </div>
            <div className="card card_moitie" style={Card5}>
                <div className="card-body">
                    <h5 className="card-title">This grumpy cat may try to kill you</h5>
                </div>
            </div>
            <div className="card card_moitie" style={Card6}>
                <div className="card-body">
                    <h5 className="card-title">You'll never believe how this cat was adopted…</h5>
                </div>
            </div>
            
        </div>
        
        
    )
}
