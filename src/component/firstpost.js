import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import ButterflyCat from './images/butterfly_cat.png';
import '../App.css';
// const image = { uri: "./images/butterfly_cat.png" };
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons';


export default class Firstpost extends Component {
 
    render() {

        // console.log(ButterflyCat);

        var sectionStyle = {
            // width: "100%",
            height: "550px",
            borderRadius: "25px",
            backgroundImage: "url(" + ButterflyCat + ")",
            backgroundPosition: 'top-center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            boxShadow: '0px 0px 13px 0px rgba(0,0,0,0.46)',
            paddingLeft: '25px',
            paddingRight: '25px',
            margin:'0px'

          };
          
        return (
            <div >
                <Card className="card_full" style={ sectionStyle } >
                    {/* <img src={ButterflyCat} alt="Logo"  width="100" height="50"/><Card.Title>Card Title</Card.Title> */}
                    {/* <Card.Img variant="top" src={ButterflyCat} alt="Logo"  width="100" height="50" /> */}
                    <Card.Body >
                    <Card.Text className="post_categories">Tops</Card.Text>
                        <Card.Title className="post_title">10 Reasons why cats are superior to dogs in every was possible.</Card.Title>
                        <Card.Text  className="post_body">
                        The detae of "cats vs. Dogs" is an arguments as old as time. Rarely will you find someone who like both equally. Dog people are very passionate about their pups and cat people are very passionate about their felines…

                        </Card.Text>
                        <div variant="primary" className="post_btn">Read More! <FontAwesomeIcon icon={faPaw} /></div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
