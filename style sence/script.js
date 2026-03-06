function generateOutfits() {
  const gender = document.getElementById('gender').value
  const budget = parseInt(document.getElementById('budget').value)

  let outfits = []

  if (gender === 'Male') {
    outfits = [
      {
        shirt: 'Grey Shirt',
        shirtImg: 'https://source.unsplash.com/120x150/?grey-shirt',
        shirtPrice: 699,

        pant: 'Black Pant',
        pantImg: 'https://source.unsplash.com/120x150/?black-pants',
        pantPrice: 899,

        shoe: 'White Sneakers',
        shoeImg: 'https://source.unsplash.com/120x150/?white-sneakers',
        shoePrice: 999,

        watch: 'Classic Watch',
        watchImg: 'https://source.unsplash.com/120x150/?watch',
        watchPrice: 799,
      },

      {
        shirt: 'White Shirt',
        shirtImg: 'https://source.unsplash.com/120x150/?white-shirt',
        shirtPrice: 799,

        pant: 'Blue Jeans',
        pantImg: 'https://source.unsplash.com/120x150/?jeans',
        pantPrice: 999,

        shoe: 'Black Sneakers',
        shoeImg: 'https://source.unsplash.com/120x150/?black-sneakers',
        shoePrice: 899,

        watch: 'Smart Watch',
        watchImg: 'https://source.unsplash.com/120x150/?smartwatch',
        watchPrice: 1299,
      },
    ]
  } else {
    outfits = [
      {
        shirt: 'White Top',
        shirtImg: 'https://source.unsplash.com/120x150/?women-top',
        shirtPrice: 599,

        pant: 'Olive Pant',
        pantImg: 'https://source.unsplash.com/120x150/?olive-pants',
        pantPrice: 799,

        shoe: 'Women Heels',
        shoeImg: 'https://source.unsplash.com/120x150/?heels',
        shoePrice: 999,

        watch: 'Fashion Watch',
        watchImg: 'https://source.unsplash.com/120x150/?watch',
        watchPrice: 899,
      },

      {
        shirt: 'Pink Top',
        shirtImg: 'https://source.unsplash.com/120x150/?pink-top',
        shirtPrice: 699,

        pant: 'Black Jeans',
        pantImg: 'https://source.unsplash.com/120x150/?black-jeans',
        pantPrice: 999,

        shoe: 'Casual Shoes',
        shoeImg: 'https://source.unsplash.com/120x150/?casual-shoes',
        shoePrice: 899,

        watch: 'Elegant Watch',
        watchImg: 'https://source.unsplash.com/120x150/?ladies-watch',
        watchPrice: 1099,
      },
    ]
  }

  const results = document.getElementById('results')
  results.innerHTML = ''

  outfits.forEach((o) => {
    let total = o.shirtPrice + o.pantPrice + o.shoePrice + o.watchPrice

    if (total <= budget) {
      results.innerHTML += `

<div class="outfit-row">

<div class="item">
<img src="${o.shirtImg}">
<p>${o.shirt}</p>
<p>₹${o.shirtPrice}</p>
<button class="buy-btn" onclick="window.open('https://www.amazon.in/s?k=${o.shirt}')">Buy</button>
</div>

<div class="item">
<img src="${o.pantImg}">
<p>${o.pant}</p>
<p>₹${o.pantPrice}</p>
<button class="buy-btn" onclick="window.open('https://www.amazon.in/s?k=${o.pant}')">Buy</button>
</div>

<div class="item">
<img src="${o.shoeImg}">
<p>${o.shoe}</p>
<p>₹${o.shoePrice}</p>
<button class="buy-btn" onclick="window.open('https://www.amazon.in/s?k=${o.shoe}')">Buy</button>
</div>

<div class="item">
<img src="${o.watchImg}">
<p>${o.watch}</p>
<p>₹${o.watchPrice}</p>
<button class="buy-btn" onclick="window.open('https://www.amazon.in/s?k=${o.watch}')">Buy</button>
</div>

</div>

`
    }
  })
}
