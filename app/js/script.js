const containerRatings = document.querySelector('#ratings');
const containerTestimonials = document.querySelector('#testimonials');

const templateRating = document.querySelector('#template_rating');
const templateStar = document.querySelector('#template_star');
const templateTestimonial = document.querySelector('#template_testimonial');

const dataRatings = data.ratings;
const dataTestimonials = data.testimonials;

populateRatings();
populateTestimonials();

function populateRatings(){    
    for(let i=0; i<dataRatings.length;i++){
        let rating = templateRating.content.cloneNode(true);
        let starsContainer = rating.querySelector('.rating__stars');
        for(let j=0; j<dataRatings[i].noOfStar; j++){
            let star = templateStar.content.cloneNode(true);
            starsContainer.appendChild(star);
        }
        let by = rating.querySelector('.rating__text');
        by.textContent = 'Rated ' + dataRatings[i].noOfStar + ' Stars in '  + dataRatings[i].by;

        containerRatings.appendChild(rating);
    }
}

function populateTestimonials(){
    for(let i=0; i<dataTestimonials.length; i++){
        // console.log(dataTestimonials[i].img + ' ');
        let testimonial = templateTestimonial.content.cloneNode(true);
        testimonial.querySelector('.testimonial__header__pic').src = dataTestimonials[i].img;
        testimonial.querySelector('.testimonial__header__name').textContent = dataTestimonials[i].name;
        testimonial.querySelector('.testimonial__header__type').textContent = dataTestimonials[i].type;
        testimonial.querySelector('.testimonial__msg').textContent =  '" ' + dataTestimonials[i].msg + ' "';
        containerTestimonials.appendChild(testimonial);
    }
}

