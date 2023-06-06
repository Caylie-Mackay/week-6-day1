const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

let appendToMe = $('#appendHere');

storeItems.forEach(item => {
  let paragraph = $('<p>');
  if (item.inStock){

    let priceColumn = $('<div>').addClass('priceColumn');
    let priceSpan = $('<span>').addClass('price').text(`$${item.price}`);
    priceColumn.append(priceSpan);

    let nameColumn = $('<div>').addClass('nameColumn');
    let nameSpan = $('<span>').addClass('name').text(item.name);
    nameColumn.append(nameSpan);

    let detailsColumn = $('<div>').addClass('detailsColumn');
    let detailsSpan = $('<span>').addClass('details').text(item.details);
    detailsColumn.append(detailsSpan);

    paragraph.append(priceColumn, nameColumn, detailsColumn);

  paragraph.addClass(item.inStock ? 'inStock' : 'notInStock');
  
  appendToMe.append(paragraph);
  }
});

const button= document.getElementById('button');
button.addEventListener('click', function(){
  $('#pageContent').toggleClass('darkMode');
  $('.inStock').toggleClass('darkBox');
});