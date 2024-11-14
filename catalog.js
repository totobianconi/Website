// Album data
const albums = [
    {
        id: 1,
        titulo: "Madvillainy",
        artista: "MF DOOM & Madlib",
        precio: 149.99,
        portada: "img/madvillainy.jpg.webp",
        anio: 2004,
        descripcion:  "Una colaboración revolucionaria entre MF DOOM y Madlib, considerada ampliamente como uno de los mejores álbumes de hip-hop jamás creados."
    }, 
    {
        id: 2,
        titulo: "Pray for Paris",
        artista: "Westside Gunn",
        precio: 89.99,
        portada: "img/pray-for-paris.jpg",
        anio: 2020,
        descripcion: "Una lujosa mezcla de rap callejero y arte elevado, con una producción estelar y el estilo único de Westside Gunn."
    },
    {
        id: 3,
        titulo: "To Pimp A Butterfly",
        artista: "Kendrick Lamar",
        precio: 129.99,
        portada: "img/tpab.jpg",
        anio: 2015,
        descripcion: "A masterpiece of modern hip-hop, blending jazz, funk, and soul with powerful social commentary."
    },
    {
        id: 4,
        titulo: "Illmatic",
        artista: "Nas",
        precio: 79.99,
        portada: "img/illmatic.jpg",
        anio: 1994,
        descripcion: "Debut album of Nas, considered one of the greatest hip-hop albums of all time."
    },
    {
        id: 5,
        titulo: "Alfredo",
        artista: "Freddie Gibbs",
        precio: 89.99,
        portada: "img/alfredo.jpg",
        anio: 2016,
        descripcion: "A bold and experimental hip-hop album that pushes genre boundaries with its unique production and Danny's distinctive style."
    },
    {
        id: 6,
        titulo: "Bandana",
        artista: "Freddie Gibbs & Madlib",
        precio: 99.99,
        portada: "img/bandana.jpg",
        anio: 2019,
        descripcion: "Una fusión perfecta entre la producción soulful de Madlib y el lirismo preciso de Freddie Gibbs."
    },
    {
        id: 7,
        titulo: "Hard To Earn",
        artista: "Gang Starr",
        precio: 119.99,
        portada: "img/hard-to-earn.jpg",
        anio: 1994,
        descripcion: "Un álbum clásico de hip-hop que mezcla jazz, funk y soul con el estilo característico de Gang Starr."
    },
    {
        id: 8,
        titulo: "Piñata",
        artista: "Freddie Gibbs & Madlib",
        precio: 99.99,
        portada: "img/pinata.jpg",
        anio: 2014,
        descripcion: "La primera colaboración entre Freddie Gibbs y Madlib, estableciendo un nuevo estándar para el hip-hop moderno."
    },
    {
        id: 9,
        titulo: "MM..FOOD",
        artista: "MF DOOM",
        precio: 139.99,
        portada: "img/mm-food.jpg",
        anio: 2004,
        descripcion: "Un álbum conceptual que muestra el juego de palabras y habilidades de producción de DOOM."
    },
    {
        id: 10,
        titulo: "Yessir Whatever",
        artista: "Quasimoto",
        precio: 109.99,
        portada: "img/yessir-whatever.jpg",
        anio: 2013,
        descripcion: "Quasimoto, el alter ego de Madlib, presenta un álbum que combina lo mejor de la música hip-hop con lo mejor de la música soul."
    },
    {
        id: 11,
        titulo: "4:44",
        artista: "JAY-Z",
        precio: 129.99,
        portada: "img/444.jpg",
        anio: 2017,
        descripcion: "Un álbum maduro e introspectivo de uno de los más grandes artistas del hip-hop."
    },
    {
        id: 12,
        titulo: "Daytona",
        artista: "Pusha T",
        precio: 89.99,
        portada: "img/daytona.jpg",
        anio: 2018,
        descripcion: "Un álbum conciso y poderoso producido por Kanye West, que muestra el agudo lirismo de Pusha T."
        
    },
    {
        id: 13,
        titulo: "Liquid Swords",
        artista: "GZA",
        precio: 99.99,
        portada: "img/liquid-swords.jpg",
        anio: 1995,
        descripcion: "Producido por RZA, el álbum es conocido por su producción de alta calidad y la habilidad de GZA para crear rimas complejas y memorables, incluyendo features de Raekwon y Ghostface Killah."
    },
    {
        id: 14,
        titulo: 'Jazzmatazz Volume 1',
        artista:'Guru',
        precio:199.99 ,
        portada: 'img/jazzmatazz.jpg',
        anio:1993,
        descripcion:'El álbum es conocido por su fusión de jazz, hip-hop y soul, y por las contribuciones de Guru y su compañero de producción Large Professor.'
    },
    {
        id: 15,
        titulo: 'The Low End Theory',
        artista:'A Tribe Called Quest',
        precio:129.99 ,
        portada: 'img/low-end-theory.jpg',
        anio:1993,
        descripcion:'El segundo álbum de A Tribe Called Quest, conocido por su fusión de jazz, soul y hip-hop, y por las contribuciones de Q-Tip, Phife Dawg y Ali Shaheed Muhammad.'
    }
];


function crearTarjetaAlbum(album) {
    return `
        <div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="album-card">
                <img src="${album.portada}" 
                    class="card-img-top" 
                    alt="${album.titulo}"
                    onerror="this.src='https://picsum.photos/500/500?random=${album.id}'">
                <div class="card-body p-3">
                    <h5 class="card-title text-white">${album.titulo}</h5>
                    <h6 class="card-subtitle mb-2 text-white-50">${album.artista} (${album.anio})</h6>
                    <p class="card-text text-white-50 small">${album.descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="text-white fs-5">$${album.precio}</span>
                        <button class="btn btn-primary" onclick="agregarCarrito(${album.id})">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}


let carrito = [];

function agregarCarrito(albumId) {
    const album = albums.find(a => a.id === albumId);
    if (album) {
        const existingItem = carrito.find(item => item.id === albumId);
        if (existingItem) {
            existingItem.cantidad = (existingItem.cantidad || 1) + 1;
        } else {
            carrito.push({
                ...album,
                cantidad: 1
            });
        }
        actualizarDisplayCarrito();
        guardarCarrito();
    }
}

function actualizarCantidad(indice, cambio) {
    const item = carrito[indice];
    const nuevaCantidad = (item.cantidad || 1) + cambio;
    
    if (nuevaCantidad > 0) {
        item.cantidad = nuevaCantidad;
    } else {
        carrito.splice(indice, 1);
    }
    
    actualizarDisplayCarrito();
    guardarCarrito();
}

function actualizarDisplayCarrito() {
    const itemsCarrito = document.querySelector('#itemsCarrito');
    
    itemsCarrito.innerHTML = carrito.map((item, indice) => `
        <div class="cart-item">
            <img src="${item.portada || `https://picsum.photos/500/500?random=${item.id}`}" 
                alt="${item.titulo}"
                onerror="this.src='https://picsum.photos/500/500?random=${item.id}'">
            <div class="cart-item-details">
                <h6>${item.titulo}</h6>
                <p class="price">$${(item.precio * (item.cantidad || 1)).toFixed(2)}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="actualizarCantidad(${indice}, -1)">-</button>
                    <span class="quantity">${item.cantidad || 1}</span>
                    <button class="quantity-btn" onclick="actualizarCantidad(${indice}, 1)">+</button>
                    <button class="remove-btn ms-3" onclick="eliminarDelCarrito(${indice})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    const total = carrito.reduce((sum, item) => sum + (item.precio * (item.cantidad || 1)), 0);
    document.getElementById('cartTotal').textContent = total.toFixed(2);
}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarDisplayCarrito();
    guardarCarrito();
}


function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarrito() {
    const savedCarrito = localStorage.getItem('carrito');
    if (savedCarrito) {
        carrito = JSON.parse(savedCarrito);
        actualizarDisplayCarrito();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const albumsGrid = document.getElementById('albumsGrid');
    if (albumsGrid) {
        albumsGrid.innerHTML = albums.map(album => crearTarjetaAlbum(album)).join('');
    } else {
        console.error('Element albumsGrid not found');
    }
    cargarCarrito();
});


document.addEventListener('DOMContentLoaded', () => {
    const cartToggle = document.getElementById('cartToggle');
    const closeCart = document.getElementById('closeCart');
    const shoppingCart = document.getElementById('cartSidebar');

    if (cartToggle) {
        cartToggle.addEventListener('click', () => {
            shoppingCart.classList.add('active');
        });
    }

    if (closeCart) {
        closeCart.addEventListener('click', () => {
            shoppingCart.classList.remove('active');
        });
    }
});

function filtrarAlbums(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    return albums.filter(album => 
        album.titulo.toLowerCase().includes(searchTerm) ||
        album.artista.toLowerCase().includes(searchTerm) ||
        album.anio.toString().includes(searchTerm)
    );
}


document.addEventListener('DOMContentLoaded', () => {
    const albumsGrid = document.getElementById('albumsGrid');
    const searchBox = document.getElementById('searchBox');
    const searchButton = document.getElementById('searchButton');

    
    if (albumsGrid) {
        albumsGrid.innerHTML = albums.map(album => crearTarjetaAlbum(album)).join('');
    }


    if (searchBox && searchButton) {
        const performSearch = () => {
            const searchTerm = searchBox.value;
            const filteredAlbums = filtrarAlbums(searchTerm);
            albumsGrid.innerHTML = filteredAlbums.map(album => crearTarjetaAlbum(album)).join('');
        };

        
        searchButton.addEventListener('click', performSearch);

        
        searchBox.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        
        searchBox.addEventListener('input', performSearch);
    }

    cargarCarrito();
});
