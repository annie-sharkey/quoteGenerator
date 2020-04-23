import React, { Component } from "react";
import "./Quote.css";
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import Typing from 'react-typing-animation';

const quotes = [
    {
        quote: "All your life you wait, and then it finally comes, and are you ready?",
        author: "Anthony Doerr"
    },
    {
        quote: "But soft! What light through yonder window breaks? It is the east, and Juliet is the sun.",
        author: "William Shakespeare"
    },
    {
        quote: "Whenever you feel like criticizing anyone … just remember that all the people in this world haven’t had the advantages that you’ve had.",
        author: "F. Scott Fitzgerald"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author: "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author: "Oprah Winfrey"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead"
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        quote: "Whoever is happy will make others happy too.",
        author: "Anne Frank"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    }
];

const Fade = styled.div`animation: 3s ${keyframes`${fadeIn}`} infinite`;

class Quote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            fade: false
        }
    }

    render() {
        return (
            <div class="page">

                <div class="title" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <Typing>Random Quote Generator</Typing>
                </div>

                <div class="randQuoteBox">
                    <div class="randQuote">
                        <Fade>"{quotes[this.props.number].quote}"</Fade>
                    </div>
                    <div class="randAuthor">
                        <Fade>- {quotes[this.props.number].author}</Fade>
                    </div>
                    <br></br>
                </div>



                <br></br>

                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <button
                        onClick={() => this.props.handleGenerate()}
                        className="quoteButton">Generate Quote</button>

                </div>

                <br></br>

                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

            </div>
        );
    }
}

export default Quote
