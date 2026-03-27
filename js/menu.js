function updateActiveNav(sectionId) {
    document.querySelectorAll('.side-nav-modern .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`.side-nav-modern .nav-link[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        updateActiveNav(sectionId);
    }
    return false;
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.side-nav-modern .nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href) {
                const sectionId = href.substring(1);
                scrollToSection(sectionId);
            }
        });
    });

    window.addEventListener('scroll', function () {
        const sections = ['about', 'categories', 'calculator'];
        let closestSection = null;
        let minDistance = Infinity;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.bottom > 0 && rect.top < window.innerHeight) {
                    const distance = Math.abs(rect.top);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestSection = section;
                    }
                }
            }
        }

        if (closestSection) {
            updateActiveNav(closestSection);
        }
    });
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
});
