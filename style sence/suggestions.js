const brands = [
  'Chanel',
  'Louis Vuitton',
  'Hermès',
  'Dior',
  'Gucci',
  'Prada',
  'Saint Laurent',
  'Balenciaga',
]

const outfits = []
const genders = ['men', 'women', 'kids']
const bodyTypes = ['slim', 'average', 'heavy']
const occasions = ['casual', 'party', 'office']
const skintones = ['dark', 'medium', 'fair']

brands.forEach((brand) => {
  genders.forEach((gender) => {
    bodyTypes.forEach((body) => {
      occasions.forEach((occ) => {
        skintones.forEach((skin) => {
          outfits.push({
            name: `${brand} ${occ} outfit`,
            brand: brand,
            gender: gender,
            body: body,
            skintone: skin,
            occasion: occ,

            price: `₹${1000 + Math.floor(Math.random() * 3000)}`,

            image: `https://source.unsplash.com/300x300/?${gender},fashion`,

            link: `https://www.amazon.in/s?k=${brand}+${gender}+${occ}+outfit`,
          })
        })
      })
    })
  })
})

function loadProducts(list) {
  let container = document.getElementById('products')
  container.innerHTML = ''

  list.slice(0, 12).forEach((product) => {
    container.innerHTML += `

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>${product.brand}</p>

<p class="price">${product.price}</p>

<button onclick="buyNow('${product.link}')">Buy</button>

</div>

`
  })
}

loadProducts(outfits)

function suggestOutfit() {
  let gender = document.getElementById('gender').value
  let skintone = document.getElementById('skintone').value
  let body = document.getElementById('body').value
  let occasion = document.getElementById('occasion').value
  let brand = document.getElementById('brand').value

  let result = outfits.filter(
    (o) =>
      o.gender === gender &&
      o.body === body &&
      o.skintone === skintone &&
      o.occasion === occasion &&
      (brand === '' || o.brand === brand),
  )

  if (result.length === 0) {
    result = outfits.filter((o) => o.gender === gender)
  }

  loadProducts(result)
}

const comboColors = [
  { top: 'white', bottom: 'royal blue', tone: ['dark'] },
  { top: 'mustard yellow', bottom: 'black', tone: ['dark'] },
  { top: 'emerald green', bottom: 'gold', tone: ['dark'] },
  { top: 'maroon', bottom: 'cream', tone: ['dark'] },

  { top: 'navy blue', bottom: 'white', tone: ['medium'] },
  { top: 'olive green', bottom: 'beige', tone: ['medium'] },
  { top: 'rust orange', bottom: 'black', tone: ['medium'] },
  { top: 'teal', bottom: 'grey', tone: ['medium'] },

  { top: 'black', bottom: 'red', tone: ['fair'] },
  { top: 'navy blue', bottom: 'white', tone: ['fair'] },
  { top: 'dark green', bottom: 'beige', tone: ['fair'] },
  { top: 'purple', bottom: 'grey', tone: ['fair'] },

  { top: 'blue', bottom: 'white', tone: ['medium', 'fair'] },
  { top: 'pink', bottom: 'white', tone: ['medium', 'fair'] },
  { top: 'orange', bottom: 'black', tone: ['dark', 'medium'] },
]

function showCombos() {
  let gender = document.getElementById('gender').value
  let tone = document.getElementById('skintone').value

  let container = document.getElementById('products')
  container.innerHTML = ''

  let filtered = comboColors.filter((c) => c.tone.includes(tone))

  filtered.forEach((c) => {
    container.innerHTML += `

<div class="card">

<h3>${c.top} + ${c.bottom}</h3>

<img class="combo-img" src="https://source.unsplash.com/200x200/?${gender},${c.top},shirt">
<img class="combo-img" src="https://source.unsplash.com/200x200/?${gender},${c.bottom},pants">
<img class="combo-img" src="https://source.unsplash.com/200x200/?watch">
<img class="combo-img" src="https://source.unsplash.com/200x200/?hat">

<p>Shirt + Pant + Watch + Hat Combo</p>

</div>

`
  })
}

function skinToneColors() {
  let tone = document.getElementById('skintone').value
  let container = document.getElementById('products')

  container.innerHTML = ''

  let suggestions = []

  if (tone === 'dark') {
    suggestions = [
      'White',
      'Mustard Yellow',
      'Royal Blue',
      'Emerald Green',
      'Burgundy / Maroon',
    ]
  } else if (tone === 'medium') {
    suggestions = [
      'Navy Blue',
      'Olive Green',
      'Rust Orange',
      'Teal',
      'Charcoal Grey',
    ]
  } else {
    suggestions = ['Black', 'Deep Red', 'Dark Green', 'Navy Blue', 'Purple']
  }

  suggestions.forEach((color) => {
    container.innerHTML += `

<div class="card">

<h3>${color}</h3>

<p>Recommended Color</p>

</div>

`
  })
}

function buyNow(link) {
  window.open(link, '_blank')
}
