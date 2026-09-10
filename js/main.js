let modoLoginActual = 'cliente';

// BASE DE DATOS CENTRALIZADA
const baseDatosTalleres = {
    'motojasvy': {
        id: 'motojasvy', nombre: 'Motojasvy', plan: 'elite', lat: '4.677010', lng: '-74.149393',
        tags: 'abierto motos mecanica repuestos aceite frenos llantas escaner baterias domingos festivos tarjetas espera wifi',
        img: 'img/motojasvy.jpeg', badge: '★ TOP #1 (ÉLITE)', badgeClass: 'badge-elite',
        estrellas: '⭐⭐⭐⭐⭐ <span style="color:#fff; font-size:16px;">(4.9)</span>', dir: '📍 Calle 17 #106-53, Fontibón', ws: '573108738051',
        puntaje: '4.9', totalResenas: 184, desc: 'Taller líder en Fontibón. Especialistas en motocicletas con mecánica general y repuestos originales Bajaj, Yamaha, Suzuki. Contamos con escáner.',
        horarios: { lv: '08:00 AM - 07:00 PM', s: '08:00 AM - 05:00 PM', d: '08:00 AM - 05:00 PM' },
        tagsArray: ['Mecánica General', 'Venta de Repuestos', 'Cambio de Aceite', 'Frenos y Suspensión', 'Llantas', 'Escáner', 'Baterías'],
        resenas: [
            { autor: 'Carlos Restrepo', inicial: 'C', color: '#e63946', fecha: 'hace 2 semanas', texto: 'Excelente servicio. Dieron con el problema eléctrico de inmediato.', estrellas: '⭐⭐⭐⭐⭐' },
            { autor: 'Andrés Felipe M.', inicial: 'A', color: '#4361ee', fecha: 'hace 1 mes', texto: 'El mejor lugar en Fontibón para repuestos.', estrellas: '⭐⭐⭐⭐' }
        ]
    },
    'motos-eduar': {
        id: 'motos-eduar', nombre: 'Motos Eduard La 17', plan: 'pro', lat: '4.675749', lng: '-74.148311',
        tags: 'abierto motos mecanica aceite frenos llantas domingos festivos tarjetas espera wifi',
        img: 'img/motos eduard.jpeg', badge: '★ DESTACADO (PRO)', badgeClass: 'badge-profesional',
        estrellas: '⭐⭐⭐⭐ <span style="color:#fff; font-size:16px;">(4.6)</span>', dir: '📍 Calle 17 #104b-25, Fontibón', ws: '573132490363',
        puntaje: '4.6', totalResenas: 95, desc: 'Mecánica y mantenimiento de motos multimarca. Servicio a domicilio y sincronización.',
        horarios: { lv: '08:00 AM - 08:00 PM', s: '08:00 AM - 08:00 PM', d: '11:30 AM - 05:00 PM' },
        tagsArray: ['Mecánica General', 'Cambio de Aceite', 'Frenos y Suspensión', 'Llantas'],
        resenas: [
            { autor: 'Santiago P.', inicial: 'S', color: '#ffb703', fecha: 'hace 1 semana', texto: 'Me salvaron un domingo. Rápido y domicilio económico.', estrellas: '⭐⭐⭐⭐⭐' }
        ]
    },
    'alta-gama': {
        id: 'alta-gama', nombre: 'Alta Gama Arteda', plan: 'pro', lat: '4.678395', lng: '-74.150302',
        tags: 'abierto livianos mecanica latoneria festivos tarjetas espera wifi',
        img: 'img/alta gama arteda.jpeg', badge: '★ DESTACADO (PRO)', badgeClass: 'badge-profesional',
        estrellas: '⭐⭐⭐⭐ <span style="color:#fff; font-size:16px;">(4.2)</span>', dir: '📍 Calle 17 #108-34, Fontibón', ws: '573108033336',
        puntaje: '4.2', totalResenas: 34, desc: 'Especialistas en vehículos livianos. Mecánica general, fibra de vidrio, latonería y pintura.',
        horarios: { lv: '08:00 AM - 06:00 PM', s: '08:00 AM - 04:00 PM', d: '08:00 AM - 02:00 PM' },
        tagsArray: ['Mecánica General', 'Latonería y Pintura'],
        resenas: [
            { autor: 'Miguel R.', inicial: 'M', color: '#e63946', fecha: 'hace 3 semanas', texto: 'Trabajo de pintura impecable, color exacto.', estrellas: '⭐⭐⭐⭐⭐' }
        ]
    },
    'caminic-motors': {
        id: 'caminic-motors', nombre: 'Caminic Motors', plan: 'gratis', lat: '4.675688', lng: '-74.148248',
        tags: 'abierto livianos pesados electricos mecanica latoneria electricidad aceite frenos escaner domingos festivos tarjetas',
        img: 'img/caminic motors.jpeg', badge: '', badgeClass: '',
        estrellas: '⭐⭐⭐ <span style="color:#fff; font-size:16px;">(3.8)</span>', dir: '📍 Calle 17 #104b-21, Fontibón', ws: '',
        puntaje: '3.8', totalResenas: 42, desc: 'Taller multimarca livianos, pesados. Especialistas en embragues e inyectores.',
        horarios: { lv: '08:00 AM - 06:00 PM', s: '08:00 AM - 06:00 PM', d: '08:00 AM - 06:00 PM' },
        tagsArray: ['Mecánica General', 'Latonería', 'Electricidad', 'Cambio de Aceite', 'Escáner'],
        resenas: [
            { autor: 'Hugo Suarez', inicial: 'H', color: '#4361ee', fecha: 'hace 1 mes', texto: 'Arreglan embragues rápido y con precios aceptables.', estrellas: '⭐⭐⭐⭐' }
        ]
    },
    'tecnimotos-paisa': {
        id: 'tecnimotos-paisa', nombre: 'Tecnimotos El Paisa', plan: 'gratis', lat: '4.675496', lng: '-74.148050',
        tags: 'abierto motos mecanica aceite frenos tarjetas',
        img: 'img/tecnimotos el paisa.jpeg', badge: '', badgeClass: '',
        estrellas: '⭐⭐⭐ <span style="color:#fff; font-size:16px;">(3.5)</span>', dir: '📍 Calle 17 #103b-31, Fontibón', ws: '',
        puntaje: '4.1', totalResenas: 19, desc: 'Servicio técnico de motos. Repsol, Yamaha, Kawasaki, Honda, Auteco.',
        horarios: { lv: '09:00 AM - 07:00 PM', s: '09:00 AM - 07:00 PM', d: '09:00 AM - 07:00 PM' },
        tagsArray: ['Mecánica General', 'Cambio de Aceite', 'Frenos y Suspensión'],
        resenas: [
            { autor: 'Sebastian Ortiz', inicial: 'S', color: '#28a745', fecha: 'hace 2 semanas', texto: 'El Paisa sabe lo que hace, entregó la moto súper rápido.', estrellas: '⭐⭐⭐⭐⭐' }
        ]
    }
};

function reproducirSonidoUI() {
    try {
        let ctx = new (window.AudioContext || window.webkitAudioContext)();
        let osc = ctx.createOscillator(); let gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'sine'; osc.frequency.setValueAtTime(600, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start(); osc.stop(ctx.currentTime + 0.1);
    } catch(e) {}
}
function reproducirSonidoExito() {
    try {
        let ctx = new (window.AudioContext || window.webkitAudioContext)();
        let osc = ctx.createOscillator(); let gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.type = 'triangle'; osc.frequency.setValueAtTime(800, ctx.currentTime); osc.frequency.setValueAtTime(1200, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.1, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.start(); osc.stop(ctx.currentTime + 0.3);
    } catch(e) {}
}

if ('serviceWorker' in navigator) { window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js'); }); }

document.addEventListener('DOMContentLoaded', () => {
    actualizarCabecera(); cargarTemaFondo(); renderizarTarjetas();
    if (sessionStorage.getItem('splashVisto') === 'true') {
        let splash = document.getElementById('splash-screen'); if(splash) splash.style.display = 'none';
    } else {
        setTimeout(() => {
            let loader = document.getElementById('lottie-loader'); let acciones = document.getElementById('splash-eleccion');
            if(loader) loader.style.display = 'none'; if(acciones) acciones.style.display = 'block';
        }, 2000);
    }
    let buscador = document.getElementById('buscador'); if (buscador) buscador.addEventListener('keyup', aplicarFiltros);
});

function renderizarTarjetas() {
    let contenedor = document.getElementById('contenedor-talleres'); if (!contenedor) return;
    let soloDestacados = window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/');
    let talleresArray = Object.values(baseDatosTalleres);

    if (sessionStorage.getItem('rolUsuario') === 'taller') {
        let miPlan = sessionStorage.getItem('miTallerPlan'); let miNombre = localStorage.getItem('miTallerNombre');
        let tallerEncontrado = talleresArray.find(t => t.nombre.toLowerCase().includes(miNombre.toLowerCase().split(' ')[0]));
        if (tallerEncontrado) {
            tallerEncontrado.plan = miPlan; tallerEncontrado.nombre = miNombre;
            if (miPlan === 'elite') { tallerEncontrado.badge = '★ TOP #1 (ÉLITE)'; tallerEncontrado.badgeClass = 'badge-elite'; } 
            else if (miPlan === 'pro') { tallerEncontrado.badge = '★ DESTACADO (PRO)'; tallerEncontrado.badgeClass = 'badge-profesional'; } 
            else { tallerEncontrado.badge = ''; tallerEncontrado.badgeClass = ''; }
        }
    }

    let htmlTarjetas = `<div id="mensaje-sin-resultados" style="display: none; text-align: center; padding: 50px 20px; background: var(--bg-card); border-radius: 12px; border: 1px dashed var(--border-color); margin-bottom: 20px;"><span style="font-size: 40px;" aria-hidden="true">🔍</span><h3 style="color: var(--text-main); margin-top: 15px;">No encontramos talleres</h3><button class="btn-outline" style="margin-top: 15px;" onclick="mostrarTodos()">Limpiar Búsqueda</button></div>`;

    talleresArray.sort((a, b) => { const v = { 'elite': 1, 'pro': 2, 'gratis': 3 }; return v[a.plan] - v[b.plan]; });

    talleresArray.forEach(t => {
        if (soloDestacados && t.plan === 'gratis') return;
        let esPremium = (t.plan === 'elite' || t.plan === 'pro');
        let cardClass = esPremium ? (t.plan === 'elite' ? 'card premium-elite' : 'card premium-profesional') : 'card';
        let badgeHTML = t.badge ? `<div class="${t.badgeClass}">${t.badge}</div>` : '';
        let actionsHTML = t.plan === 'gratis' 
            ? `<a href="perfil.html?id=${t.id}" class="btn-primary" style="background:#666;" aria-label="Ver info básica de ${t.nombre}">Info Básica</a><span style="font-size: 11px; color: #d9534f; background: #fdf7f7; padding: 5px; border-radius: 6px; border: 1px solid #ebccd1;">🔒 WhatsApp</span>`
            : `<a href="perfil.html?id=${t.id}" class="btn-primary" aria-label="Ver perfil completo de ${t.nombre}">${t.plan === 'elite' ? '⭐ Perfil Completo' : '🖼️ Ver Perfil'}</a><button class="btn-whatsapp" onclick="contactarWhatsApp('${t.ws}', '${t.nombre}', event)" aria-label="Contactar por WhatsApp">📱 WhatsApp</button>`;

        htmlTarjetas += `
            <article class="${cardClass}" data-tags="${t.tags}" onclick="seleccionarTaller('${t.lat}', '${t.lng}', ${esPremium}, this)" tabindex="0" role="button">
                <div class="card-img" style="height: 160px; background-image: url('${t.img}'); background-size: cover; background-position: center; color: transparent;" aria-hidden="true">${t.nombre}</div>
                <div class="card-body">
                    <div style="display: flex; justify-content: space-between; width: 100%;">
                        ${badgeHTML || `<h2 class="card-title">${t.nombre}</h2>`}
                        <button class="btn-guardar" data-id="${t.id}" onclick="guardarTaller(this, event)" aria-label="Guardar en favoritos" style="background:none; border:none; cursor:pointer;">🤍</button>
                    </div>
                    ${t.badge ? `<h2 class="card-title">${t.nombre}</h2>` : ''}
                    <div class="stars">${t.estrellas}</div>
                    <div class="status-container"><span class="status-dot"></span> Abierto ahora</div>
                    <div class="card-location">${t.dir}</div>
                    <div class="actions">${actionsHTML}</div>
                </div>
            </article>`;
    });
    contenedor.innerHTML = htmlTarjetas; cargarFavoritos();
}

function toggleDarkMode() { reproducirSonidoUI(); const isDark = document.body.getAttribute('data-theme') === 'dark'; if (isDark) { document.body.removeAttribute('data-theme'); localStorage.setItem('tema', 'claro'); } else { document.body.setAttribute('data-theme', 'dark'); localStorage.setItem('tema', 'oscuro'); } }
function cargarTemaFondo() { if (localStorage.getItem('tema') === 'oscuro') document.body.setAttribute('data-theme', 'dark'); }

function aplicarFiltros() {
    let buscador = document.getElementById('buscador'); let textoBusqueda = buscador ? buscador.value.toLowerCase() : '';
    let checkboxesMarcados = document.querySelectorAll('.sidebar input[type="checkbox"]:checked');
    let filtrosActivos = Array.from(checkboxesMarcados).map(cb => cb.value.toLowerCase());
    let tarjetas = document.querySelectorAll('#contenedor-talleres .card');
    let tarjetasVisibles = 0; 
    tarjetas.forEach(tarjeta => {
        if (tarjeta.classList.contains('card-favorito')) return; 
        let titulo = tarjeta.querySelector('.card-title').innerText.toLowerCase();
        let tagsTarjeta = tarjeta.getAttribute('data-tags') ? tarjeta.getAttribute('data-tags').toLowerCase() : '';
        let coincideTexto = titulo.includes(textoBusqueda); let coincideFiltros = filtrosActivos.every(filtro => tagsTarjeta.includes(filtro));
        if (coincideTexto && coincideFiltros) { tarjeta.style.display = 'block'; tarjetasVisibles++; } else { tarjeta.style.display = 'none'; }
    });
    let msjVacio = document.getElementById('mensaje-sin-resultados'); if (msjVacio) msjVacio.style.display = (tarjetasVisibles === 0) ? 'block' : 'none';
}
function mostrarTodos() { reproducirSonidoUI(); let buscador = document.getElementById('buscador'); if (buscador) buscador.value = ''; document.querySelectorAll('.sidebar input[type="checkbox"]').forEach(cb => cb.checked = false); aplicarFiltros(); }
function toggleFiltrosMovil() { reproducirSonidoUI(); const sidebar = document.querySelector('.sidebar'); if(sidebar) sidebar.classList.toggle('activa'); }

function contactarWhatsApp(telefono, tallerNombre, event) {
    if(event) { event.stopPropagation(); } reproducirSonidoUI();
    let vehiculo = localStorage.getItem('miVehiculo') || 'vehículo'; let placa = localStorage.getItem('miPlaca') || '';
    let mensaje = `Hola ${tallerNombre}, vengo de la plataforma AutoConecta. Me gustaría agendar una cita para mi ${vehiculo} (Placa: ${placa}).`;
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
}

function guardarTaller(btn, event) {
    if(event) event.stopPropagation(); reproducirSonidoUI();
    let tallerId = btn.getAttribute('data-id'); let favoritos = JSON.parse(localStorage.getItem('misFavoritos')) || [];
    if (favoritos.includes(tallerId)) { favoritos = favoritos.filter(id => id !== tallerId); btn.innerText = '🤍'; } 
    else { favoritos.push(tallerId); btn.innerText = '❤️'; reproducirSonidoExito(); }
    localStorage.setItem('misFavoritos', JSON.stringify(favoritos));
    btn.style.transform = 'scale(1.3)'; setTimeout(() => { btn.style.transform = 'scale(1)'; }, 150);
}
function cargarFavoritos() {
    let favoritos = JSON.parse(localStorage.getItem('misFavoritos')) || [];
    document.querySelectorAll('.btn-guardar').forEach(btn => { let id = btn.getAttribute('data-id'); if(favoritos.includes(id)) btn.innerText = '❤️'; });
}

// RESTAURADA: Abre la ruta en una nueva pestaña (Google Maps 100% nativo)
function seleccionarTaller(lat, lng, esPremium, elementoTarjeta) {
    reproducirSonidoUI();
    let tarjetas = document.querySelectorAll('.card'); tarjetas.forEach(t => t.classList.remove('active'));
    if (elementoTarjeta) elementoTarjeta.classList.add('active');
    
    let mapaIframe = document.getElementById('mapa-google'); 
    let btnComoLlegar = document.getElementById('btn-como-llegar'); 
    let aviso = document.getElementById('aviso-mapa-restringido');
    
    if (esPremium && lat && lng) { 
        if (mapaIframe) mapaIframe.src = `https://maps.google.com/maps?q=${lat},${lng}&hl=es&z=17&output=embed`; 
        if (btnComoLlegar) { 
            btnComoLlegar.style.display = 'flex'; 
            // Reasignamos el enlace directo a Google Maps
            btnComoLlegar.href = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        }
        if (aviso) aviso.style.display = 'none'; 
    } else {
        if (btnComoLlegar) btnComoLlegar.style.display = 'none'; 
        if (aviso) aviso.style.display = 'flex';
    }
}

function continuarComoInvitado() { reproducirSonidoUI(); sessionStorage.setItem('splashVisto', 'true'); sessionStorage.removeItem('rolUsuario'); cerrarSplashVisible(); actualizarCabecera(); }
function abrirLoginEnSplash(tipo) { reproducirSonidoUI(); document.getElementById('splash-eleccion').style.display = 'none'; document.getElementById('splash-login-panel').style.display = 'block'; setModoLoginSplash(tipo); }
function volverAEleccionSplash() { reproducirSonidoUI(); document.getElementById('splash-login-panel').style.display = 'none'; document.getElementById('splash-eleccion').style.display = 'block'; }
function mostrarRegistroSplash() { reproducirSonidoUI(); document.getElementById('splash-login-panel').style.display = 'none'; if (modoLoginActual === 'cliente') { document.getElementById('splash-registro-cliente').style.display = 'block'; } else { document.getElementById('splash-registro-taller').style.display = 'block'; } }
function volverLoginSplash() { reproducirSonidoUI(); document.getElementById('splash-registro-cliente').style.display = 'none'; document.getElementById('splash-registro-taller').style.display = 'none'; document.getElementById('splash-login-panel').style.display = 'block'; }
function setModoLoginSplash(tipo) {
    modoLoginActual = tipo; let btnCliente = document.getElementById('btn-splash-cliente'); let btnTaller = document.getElementById('btn-splash-taller');
    if (tipo === 'cliente') {
        if(btnCliente) { btnCliente.style.background = '#e63946'; btnCliente.style.color = '#fff'; }
        if(btnTaller) { btnTaller.style.background = 'transparent'; btnTaller.style.color = 'var(--text-main)'; }
        document.getElementById('caja-demo-cliente').style.display = 'block'; document.getElementById('caja-demo-taller').style.display = 'none';
    } else {
        if(btnTaller) { btnTaller.style.background = '#e63946'; btnTaller.style.color = '#fff'; }
        if(btnCliente) { btnCliente.style.background = 'transparent'; btnCliente.style.color = 'var(--text-main)'; }
        document.getElementById('caja-demo-cliente').style.display = 'none'; document.getElementById('caja-demo-taller').style.display = 'block';
    }
}
function procesarLogin() {
    reproducirSonidoExito(); let email = document.getElementById('splash-email').value.toLowerCase();
    let plan = 'elite'; let nombre = 'Motojasvy';
    if (email.includes('autopunto') || email.includes('eduar')) { plan = 'pro'; nombre = 'Motos Eduard La 17'; } 
    else if (email.includes('rodamientos') || email.includes('caminic')) { plan = 'gratis'; nombre = 'Caminic Motors'; }
    sessionStorage.setItem('splashVisto', 'true'); sessionStorage.setItem('rolUsuario', modoLoginActual); 
    if (modoLoginActual === 'taller') { sessionStorage.setItem('miTallerPlan', plan); localStorage.setItem('miTallerNombre', nombre); }
    cerrarSplashVisible(); actualizarCabecera(); renderizarTarjetas();
}
function procesarRegistro(tipo) {
    reproducirSonidoExito(); sessionStorage.setItem('splashVisto', 'true'); sessionStorage.setItem('rolUsuario', tipo); 
    if (tipo === 'cliente') { localStorage.setItem('miVehiculo', document.getElementById('reg-marca').value); localStorage.setItem('miPlaca', document.getElementById('reg-placa').value); } 
    else {
        let opciones = document.getElementsByName('plan'); let planElegido = 'gratis';
        if(opciones[1].checked) planElegido = 'pro'; if(opciones[2].checked) planElegido = 'elite';
        sessionStorage.setItem('miTallerPlan', planElegido);
    }
    cerrarSplashVisible(); actualizarCabecera(); renderizarTarjetas();
}
function cerrarSplashVisible() { const splash = document.getElementById('splash-screen'); if (splash) { splash.style.opacity = '0'; setTimeout(() => { splash.style.display = 'none'; }, 600); } }
function actualizarCabecera() {
    let contenedorBotones = document.getElementById('user-actions-container'); if(!contenedorBotones) return;
    let rolLogueado = sessionStorage.getItem('rolUsuario'); let btnDark = `<button class="btn-darkmode" onclick="toggleDarkMode()" aria-label="Cambiar modo oscuro">🌓</button>`;
    if (rolLogueado === 'taller') { contenedorBotones.innerHTML = btnDark + `<a href="panel-taller.html" class="btn-outline" style="border-color: #ffb703; color: #b78200; margin-right: 15px;">⚙️ Mi Panel</a><a href="#" class="btn-login" style="background: #dc3545;" onclick="cerrarSesion()">Salir</a>`; } 
    else if (rolLogueado === 'cliente') { contenedorBotones.innerHTML = btnDark + `<a href="panel-usuario.html" class="btn-outline" style="border-color: #e63946; color: #e63946; margin-right: 15px;">👤 Mi Perfil</a><a href="#" class="btn-login" style="background: #dc3545;" onclick="cerrarSesion()">Salir</a>`; } 
    else { contenedorBotones.innerHTML = btnDark + `<a href="#" class="btn-login" onclick="cerrarSesion()">Ingresar / Registro</a>`; }
}
function cerrarSesion() { reproducirSonidoUI(); sessionStorage.removeItem('splashVisto'); sessionStorage.removeItem('rolUsuario'); sessionStorage.removeItem('miTallerPlan'); window.location.href = 'index.html'; }