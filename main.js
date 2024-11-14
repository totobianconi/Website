// scripts.js

// Sample album data
const albums = [
    {
      id: 1,
      title: 'Urban Vibes',
      band: 'Band A',
      year: 2001,
      genre: 'Hip Hop',
      price: 25.99,
      image: 'images/album1.jpg',
      description: 'An album that defines urban culture.'
    },
    // Add more album objects
  ];
  
  // Cart management
  let carrito = [];
  
  // Add album to cart
  function agregarCarrito(albumId) {
    const album = albums.find(a => a.id === albumId);
    if (album) {
        carrito.push(album);
        actualizarCarrito();
        // Optional: Add visual feedback
        alert('¡Album agregado al carrito!');
    }
  }
  
  // Remove album from cart
  function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
  }
  
  // Update cart display
  function actualizarCarrito() {
    const itemsCarrito = document.getElementById('itemsCarrito');
    const cartTotal = document.getElementById('cartTotal');
    itemsCarrito.innerHTML = '';
    let total = 0;
    
    carrito.forEach((item, indice) => {
        total += item.precio;
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `
            <span>${item.titulo} - $${item.precio.toFixed(2)}</span>
            <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${indice})">Remove</button>
        `;
        itemsCarrito.appendChild(listItem);
    });
    
    cartTotal.textContent = total.toFixed(2);
  }
  
  
  function mostrarAlbums() {
    const albumsGrid = document.getElementById('albumsGrid');
    albumsGrid.innerHTML = '';
    
    albums.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.className = 'col-md-4 mb-4';
        albumCard.innerHTML = `
            <div class="card h-100">
                <img src="${album.portada}" class="card-img-top" alt="${album.titulo}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${album.titulo}</h5>
                    <p class="card-text">${album.artista}</p>
                    <p class="card-text">${album.anio}</p>
                    <p class="card-text">$${album.precio.toFixed(2)}</p>
                    <button class="btn btn-primary mt-auto" onclick="agregarCarrito(${album.id})">Agregar al carrito</button>
                </div>
            </div>
        `;
        albumsGrid.appendChild(albumCard);
    });
  }
  
  
  window.onload = function() {
    mostrarAlbums();
    actualizarCarrito();
  };
  
