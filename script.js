document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    const experience = [
        {
            title: 'Software Engineer',
            company: 'Tech Solutions',
            description: 'Developed web applications and improved user interfaces.',
            image: 'https://source.unsplash.com/1600x900/?tech'
        },
        {
            title: 'Senior Developer',
            company: 'Innovative Startups',
            description: 'Led a team of developers and worked on cutting-edge technologies.',
            image: 'https://source.unsplash.com/1600x900/?coding'
        },
        {
            title: 'Freelancer',
            company: 'Self-Employed',
            description: 'Provided freelance services to various clients worldwide.',
            image: 'https://source.unsplash.com/1600x900/?freelance'
        }
    ];

    const experienceCards = document.getElementById('experience-cards');

    experience.forEach(job => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');

        card.innerHTML = `
            <div class="card h-100" data-aos="flip-left">
                <img src="${job.image}" class="card-img-top" alt="${job.title}">
                <div class="card-body">
                    <h5 class="card-title">${job.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${job.company}</h6>
                    <p class="card-text">${job.description}</p>
                </div>
            </div>
        `;

        experienceCards.appendChild(card);
    });

    const portfolio = [
        {
            title: 'E-commerce Platform',
            description: 'Developed a full-stack e-commerce platform.',
            image: 'https://source.unsplash.com/1600x900/?ecommerce'
        },
        {
            title: 'Personal Blog',
            description: 'Created a responsive personal blog with CMS integration.',
            image: 'https://source.unsplash.com/1600x900/?blog'
        },
        {
            title: 'Portfolio Website',
            description: 'Designed and developed a dynamic portfolio website.',
            image: 'https://source.unsplash.com/1600x900/?portfolio'
        }
    ];

    const portfolioGallery = document.getElementById('portfolio-gallery');

    portfolio.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');

        card.innerHTML = `
            <div class="card h-100" data-aos="zoom-in">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        `;

        portfolioGallery.appendChild(card);
    });

    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // For demonstration purposes, log the form data to console
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

        // You can add further logic here, like sending the form data to a server
        // using fetch or XMLHttpRequest.
    });
});
        // Ensure all navbar items are visible when collapsed
        document.addEventListener('DOMContentLoaded', function() {
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarNav = document.querySelector('#navbarNav');
            
            navbarToggler.addEventListener('click', function() {
                if (navbarNav.classList.contains('show')) {
                    navbarNav.classList.remove('show');
                } else {
                    navbarNav.classList.add('show');
                }
            });
        });