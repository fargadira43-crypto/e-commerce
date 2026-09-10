        (function(){
            var btn = document.getElementById('header_1788403465385_menu_btn');
            var menu = document.getElementById('header_1788403465385_menu');
            if (!btn || !menu) return;
            function closeMenu() {
                menu.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            }
            function toggleMenu(e) {
                e.stopPropagation();
                var isOpen = menu.classList.toggle('open');
                btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            }
            btn.addEventListener('click', toggleMenu);
            menu.querySelectorAll('a').forEach(function(a){
                a.addEventListener('click', function(e){
                    e.preventDefault();
                    closeMenu();
                    var targetId = a.getAttribute('data-scroll-target');
                    var targetEl = targetId ? document.getElementById(targetId) : null;
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
            document.addEventListener('click', function(e){
                if (!menu.contains(e.target) && e.target !== btn) closeMenu();
            });
            document.addEventListener('keydown', function(e){
                if (e.key === 'Escape') closeMenu();
            });
        })();
        (function(){
            var root = document.getElementById('store_1788403471088');
            if (!root) return;
            var search = root.querySelector('.store-search');
            var cards = root.querySelectorAll('.store-card');
            var modal = document.getElementById('store_1788403471088_modal');
            if (search) {
                search.addEventListener('input', function(){
                    var q = search.value.trim().toLowerCase();
                    cards.forEach(function(card){
                        var name = (card.getAttribute('data-name') || '').toLowerCase();
                        card.style.display = name.indexOf(q) !== -1 ? '' : 'none';
                    });
                });
            }
            cards.forEach(function(card){
                card.addEventListener('click', function(){
                    if (!modal) return;
                    modal.querySelector('.store-modal-img').src = card.getAttribute('data-img') || '';
                    modal.querySelector('.store-modal-title').textContent = card.getAttribute('data-name') || '';
                    modal.querySelector('.store-modal-price').textContent = card.getAttribute('data-price') || '';
                    modal.querySelector('.store-modal-desc').textContent = card.getAttribute('data-desc') || '';
                    var btn = modal.querySelector('.store-modal-btn');
                    btn.textContent = card.getAttribute('data-btntext') || 'Order Now';
                    btn.href = card.getAttribute('data-url') || '#';
                    modal.classList.add('open');
                });
            });
            if (modal) {
                modal.querySelector('.store-modal-close').addEventListener('click', function(){
                    modal.classList.remove('open');
                });
                modal.addEventListener('click', function(e){
                    if (e.target === modal) modal.classList.remove('open');
                });
            }
        })();
        (function(){
            var track = document.querySelector('#testimonials_1788403757811 .testimonials-track');
            var viewport = document.querySelector('#testimonials_1788403757811 .testimonials-viewport');
            if (!track || !viewport) return;
            var count = track.children.length;
            if (count <= 1) return;
            var index = 0;
            setInterval(function(){
                index = (index + 1) % count;
                track.style.transform = 'translateY(' + (-index * viewport.offsetHeight) + 'px)';
            }, 2000);
        })();
        (function(){
            var btn = document.getElementById('contact_1788403754731_btn');
            var input = document.getElementById('contact_1788403754731_email');
            if (!btn) return;
            btn.addEventListener('click', function(){
                var visitor = input ? input.value.trim() : '';
                var subject = encodeURIComponent('New message from your website');
                var body = encodeURIComponent('From: ' + (visitor || '(no email provided)') + '\n\n');
                window.location.href = 'mailto:you@example.com?subject=' + subject + '&body=' + body;
            });
        })();
