document.addEventListener('DOMContentLoaded', () => {
    const experience = [
        {
            title: 'Job Title One',
            company: 'Company One',
            description: 'Description of job one.',
            image: 'path/to/image1.jpg'
        },
        {
            title: 'Job Title Two',
            company: 'Company Two',
            description: 'Description of job two.',
            image: 'path/to/image2.jpg'
        },
        {
            title: 'Job Title Three',
            company: 'Company Three',
            description: 'Description of job three.',
            image: 'path/to/image3.jpg'
        }
    ];

    const experienceCards = document.getElementById('experience-cards');

    experience.forEach(job => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');

        card.innerHTML = `
            <div class="card h-100">
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
});
