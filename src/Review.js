import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


function Review() {

    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index]

    const prevPerson = () => {
        setIndex(index=>{
            let newIndex = index===0?index:index-1;
            return newIndex
        })
    }
    const nextPerson = () => {
        setIndex(index=>{
            let newIndex = index===people.length-1?index:index+1;
            return newIndex
        })
    }
    const random = () => {
        setIndex(index=>{
            let newIndex = Math.floor(Math.random()*people.length)
            return newIndex
        })
    }

    return (
        <article className="review">
             <div className="review__image-box">
                 <img src={image} alt={name} className="review__image" />
                 <span className="review__quote-icon">
                     <FaQuoteRight />
                 </span>
             </div>
             <h4 className="review__author">{name}</h4>
             <p className="review__job">{job}</p>
             <p className="review__info">{text}</p>
             <div className="review__btns">
                 <button className="review__prev-btn" onClick={prevPerson}>
                    <FaChevronLeft />
                 </button>
                 <button className="review__next-btn" onClick={nextPerson}>
                    <FaChevronRight />
                 </button>
                 <button className="review__random-btn" onClick={random}>
                    Surprise Me
                 </button>
             </div>
        </article>
    )
}

export default Review
