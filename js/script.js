const menuData = {
    'breakfast': [
        { id: 1, name: 'Бенедикт с лососем', desc: 'яйцо пашот, лосось, голландский соус', price: 590, weight: '210гр', img: 'media/Завтрак/бенедикт.png' },
        { id: 2, name: 'Овсяная каша', desc: 'с ягодами и медом', price: 350, weight: '250гр', img: 'media/Завтрак/овсянка.png' },
        { id: 3, name: 'Омлет с сыром и зеленью', desc: 'пышный омлет с пармезаном и свежей зеленью', price: 320, weight: '180гр', img: 'media/Завтрак/омлет.png' },
        { id: 4, name: 'Сырники', desc: 'со сметаной и вареньем', price: 380, weight: '200гр', img: 'media/Завтрак/сырник.png' }
    ],
    'lunch': [
        { id: 5, name: 'Бизнес-ланч', desc: 'суп дня, горячее, салат', price: 450, weight: '550гр', img: 'media/Обед/Ланч.jpg' },
        { id: 6, name: 'Борщ', desc: 'традиционный борщ с мясом, подается со сметаной и чесночной пампушкой', price: 380, weight: '380гр', img: 'media/Обед/борщ.png' },
        { id: 7, name: 'Гречка с гуляшом', desc: 'рассыпчатая гречка с говяжьим гуляшом в подливе', price: 360, weight: '350гр', img: 'media/Обед/гречкаГуляш.png' },
        { id: 8, name: 'Грибной суп', desc: 'нежный суп из лесных грибов со сливками и зеленью', price: 360, weight: '300гр', img: 'media/Обед/грибСуп.jpg' },
        { id: 9, name: 'Картошка по-деревенски', desc: 'запеченная с чесноком и розмарином картошка дольками', price: 250, weight: '200гр', img: 'media/Обед/картошка.png' },
        { id: 10, name: 'Паста Карбонара', desc: 'с беконом и пармезаном', price: 520, weight: '350гр', img: 'media/Обед/карбонара.png' },
        { id: 11, name: 'Солянка сборная мясная', desc: 'насыщенный суп с несколькими видами мяса, оливками и лимоном', price: 420, weight: '350гр', img: 'media/Обед/карбонара.png' }
    ],
    'salads': [
        { id: 12, name: 'С ростбифом', desc: 'сочный ростбиф, молодая картошка, листья салата', price: 750, weight: '250гр', img: 'media/Салаты/салатРостбиф.jpg' },
        { id: 13, name: 'С руколой и стейком', desc: 'ягоды, бальзамик, соленый сыр, стейк', price: 650, weight: '220гр', img: 'media/Салаты/салатРукола.jpg' },
        { id: 14, name: 'Зеленый эдамаме', desc: 'авокадо, бобы, брокколи, шпинат', price: 550, weight: '230гр', img: 'media/Салаты/салатЗеленый.jpg' },
        { id: 15, name: 'Греческий Modern', desc: 'оливки, фета, сладкий перец', price: 420, weight: '300гр', img: 'media/Салаты/салатГреческий.png' }
    ],
    'diet': [

        { id: 16, name: 'Индейка с гречкой', desc: 'филе индейки на пару с гречкой и легким овощным соусом', price: 520, weight: '300гр', img: 'media/Диетическое/индейкаГречка.jpg' },
        { id: 17, name: 'Киноа с овощами', desc: 'без масла, на пару', price: 480, weight: '280гр', img: 'media/Диетическое/киноа.jpg' },
        { id: 18, name: 'Куриное филе', desc: 'с брокколи на пару', price: 520, weight: '300гр', img: 'media/Диетическое/филе.jpg' },
        { id: 19, name: 'Овощная запеканка', desc: 'кабачки, баклажаны, томаты под сырной корочкой', price: 390, weight: '250гр', img: 'media/Диетическое/овощнаяЗапеканка.png' },
        { id: 20, name: 'Стейк из лосося', desc: 'филе лосося гриль с лимоном и травами', price: 690, weight: '200гр', img: 'media/Диетическое/рыба.jpg' }
    ],
    'drinks': [
        { id: 21, name: 'Авокадо-смузи', desc: 'с бананом и шпинатом', price: 380, weight: '350мл', img: 'media/Напитки/авокадоСмузи.jpg' },
        { id: 22, name: 'Зеленый чай с жасмином', desc: 'рассыпной китайский чай с жасмином', price: 180, weight: '300мл', img: 'media/Напитки/зеленыйЧай.png' },
        { id: 23, name: 'Какао с маршмеллоу', desc: 'горячий шоколадный напиток с молоком и зефиркам', price: 250, weight: '300мл', img: 'media/Напитки/какао.jpg' },
        { id: 24, name: 'Латте', desc: 'с овсяным молоком', price: 290, weight: '300мл', img: 'media/Напитки/латте.jpg' },
        { id: 25, name: 'Черный чай', desc: 'классический черный чай', price: 160, weight: '300мл', img: 'media/Напитки/черныйЧай.png' }
    ],
    'desserts': [
        { id: 26, name: 'Моти с матче', desc: 'японские рисовые лепешки с кремом из матчи и белым шоколадом', price: 320, weight: '120гр', img: 'media/Десерты/моти.jpg' },
        { id: 27, name: 'Тирамису', desc: 'классический', price: 450, weight: '140гр', img: 'media/Десерты/тирамису.png' },
        { id: 28, name: 'Чизкейк', desc: 'с маракуйей', price: 420, weight: '150гр', img: 'media/Десерты/чизкейк.png' },
        { id: 29, name: 'Яблочный штрудель', desc: 'онкое слоеное тесто с яблоками, корицей и ванильным соусом', price: 380, weight: '150гр', img: 'media/Десерты/штрудель.jpg' }
    ]
};

let cart = [];
let myModal;
function updateNavButtons() {
    const wrapper = document.getElementById('pagesWrapper');
    const navButtons = document.querySelector('.modal-nav-buttons');
    if (!wrapper || !navButtons) return;

    const prevBtn = navButtons.children[0];
    const nextBtn = navButtons.children[1];
    if (!prevBtn || !nextBtn) return;

    const totalPages = wrapper.children.length;
    if (totalPages === 0) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
    }
    const pageWidth = wrapper.offsetWidth;
    const currentIndex = Math.round(wrapper.scrollLeft / pageWidth);
    prevBtn.disabled = (currentIndex <= 0);
    nextBtn.disabled = (currentIndex >= totalPages - 1);
}

function updateActiveNav(sectionId) {
    document.querySelectorAll('.side-nav-modern .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`.side-nav-modern .nav-link[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    myModal = new bootstrap.Modal(document.getElementById('menuModal'));
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
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop;
                const offsetBottom = offsetTop + element.offsetHeight;

                if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                    updateActiveNav(section);
                    break;
                }
            }
        }
    });
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 100);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && myModal) {
            myModal.hide();
        }
    });
});

function openMenu(cat) {
    updateActiveNav('categories');
    const items = menuData[cat] || menuData['salads'];
    const wrapper = document.getElementById('pagesWrapper');
    const label = document.getElementById('modalCategoryName');
    const categoryNames = {
        'breakfast': 'ЗАВТРАКИ',
        'lunch': 'ОБЕДЫ',
        'salads': 'САЛАТЫ',
        'diet': 'ДИЕТИЧЕСКОЕ',
        'drinks': 'НАПИТКИ',
        'desserts': 'ДЕСЕРТЫ'
    };

    label.innerText = categoryNames[cat] || cat.toUpperCase();
    wrapper.innerHTML = '';
    wrapper.scrollLeft = 0;
    for (let i = 0; i < items.length; i += 3) {
        const chunk = items.slice(i, i + 3);
        const pageHtml = `
            <div class="menu-page">
                ${chunk.map(item => `
                    <div class="item-row">
                        <img src="${item.img}" class="item-img" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100x100?text=Фото'">
                        <div class="item-content">
                            <div class="item-header">
                                <span class="item-name">${item.name}</span>
                                <span class="item-weight">${item.weight}</span>
                            </div>
                            <div class="item-desc">${item.desc}</div>
                            <div class="item-footer">
                                <span class="item-price">${item.price} ₽</span>
                                <button class="btn-add" onclick="addToCart(${item.id}, '${item.name}', ${item.price})">
                                    <span class="btn-icon">+</span>
                                    <span class="btn-text">Добавить</span>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        wrapper.insertAdjacentHTML('beforeend', pageHtml);
    }

    updateNavButtons();
    if (myModal) {
        myModal.show();
    }
}

function nextPage() {
    const w = document.getElementById('pagesWrapper');
    if (!w) return;
    w.scrollBy({ left: w.offsetWidth, behavior: 'smooth' });
    setTimeout(updateNavButtons, 300);
}

function prevPage() {
    const w = document.getElementById('pagesWrapper');
    if (!w) return;
    w.scrollBy({ left: -w.offsetWidth, behavior: 'smooth' });
    setTimeout(updateNavButtons, 300);
}

function addToCart(id, name, price) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.count++;
    } else {
        cart.push({ id, name, price, count: 1 });
    }
    renderCart();
    const btn = event.target.closest('.btn-add');
    if (btn) {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
    }
}

function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.count += delta;
        if (item.count <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    renderCart();
}

function renderCart() {
    const root = document.getElementById('cart-root');
    const totalEl = document.getElementById('total-price');

    if (cart.length === 0) {
        root.innerHTML = '<p class="cart-empty">🛒 Корзина пуста</p>';
        totalEl.innerText = '0 ₽';
        return;
    }

    root.innerHTML = cart.map(item => `
        <div class="cart-row">
            <span class="cart-item-name">${item.name}</span>
            <div class="cart-controls">
                <button class="cart-btn" onclick="updateQty(${item.id}, -1)">−</button>
                <span class="cart-count">${item.count}</span>
                <button class="cart-btn" onclick="updateQty(${item.id}, 1)">+</button>
            </div>
            <span class="cart-price">${item.price * item.count} ₽</span>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.count), 0);
    totalEl.innerText = `${total} ₽`;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        updateActiveNav(sectionId);
    }
    return false;
}