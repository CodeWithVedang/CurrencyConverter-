const apiKey = 'c9f23f8aa13549ab842b309d';
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  
  const currencyFullNames = { "INR":"Indian Rupee", "USD":"United States Dollar", "EUR":"Euro",
    "JPY": "Japanese Yen", "KES": "Kenyan Shilling", "KGS": "Kyrgyzstani Som", "KHR": "Cambodian Riel", "KID": "Kiribati Dollar", "KMF": "Comorian Franc", "KRW": "South Korean Won", "KWD": "Kuwaiti Dinar", "KYD": "Cayman Islands Dollar", "KZT": "Kazakhstani Tenge", "LAK": "Laotian Kip", "LBP": "Lebanese Pound", "LKR": "Sri Lankan Rupee", "LRD": "Liberian Dollar", "LSL": "Lesotho Loti", "LYD": "Libyan Dinar", "MAD": "Moroccan Dirham", "MDL": "Moldovan Leu", "MGA": "Malagasy Ariary", "MKD": "Macedonian Denar", "MMK": "Burmese Kyat", "MNT": "Mongolian Tugrik", "MOP": "Macanese Pataca", "MRU": "Mauritanian Ouguiya", "MUR": "Mauritian Rupee", "MVR": "Maldivian Rufiyaa", "MWK": "Malawian Kwacha", "MXN": "Mexican Peso", "MYR": "Malaysian Ringgit", "MZN": "Mozambican Metical", "NAD": "Namibian Dollar", "NGN": "Nigerian Naira", "NIO": "Nicaraguan Córdoba", "NOK": "Norwegian Krone", "NPR": "Nepalese Rupee", "NZD": "New Zealand Dollar", "OMR": "Omani Rial", "PAB": "Panamanian Balboa", "PEN": "Peruvian Nuevo Sol", "PGK": "Papua New Guinean Kina", "PHP": "Philippine Peso", "PKR": "Pakistani Rupee", "PLN": "Polish Zloty", "PYG": "Paraguayan Guarani", "QAR": "Qatari Rial", "RON": "Romanian Leu", "RSD": "Serbian Dinar", "RUB": "Russian Ruble", "RWF": "Rwandan Franc", "SAR": "Saudi Riyal", "SBD": "Solomon Islands Dollar", "SCR": "Seychellois Rupee", "SDG": "Sudanese Pound", "SEK": "Swedish Krona", "SGD": "Singapore Dollar", "SHP": "Saint Helena Pound", "SLE": "Sierra Leonean Leone", "SLL": "Sierra Leonean Leone", "SOS": "Somali Shilling", "SRD": "Surinamese Dollar", "SSP": "South Sudanese Pound", "STN": "São Tomé and Príncipe Dobra", "SYP": "Syrian Pound", "SZL": "Swazi Lilangeni", "THB": "Thai Baht", "TJS": "Tajikistani Somoni", "TMT": "Turkmenistan Manat", "TND": "Tunisian Dinar", "TOP": "Tongan Pa'anga", "TRY": "Turkish Lira", "TTD": "Trinidad and Tobago Dollar", "TVD": "Tuvaluan Dollar", "TWD": "New Taiwan Dollar", "TZS": "Tanzanian Shilling", "UAH": "Ukrainian Hryvnia", "UGX": "Ugandan Shilling", "UYU": "Uruguayan Peso", "UZS": "Uzbekistan Som", "VES": "Venezuelan Bolívar", "VND": "Vietnamese Dong", "VUV": "Vanuatu Vatu", "WST": "Samoan Tala", "XAF": "CFA Franc BEAC", "XCD": "East Caribbean Dollar", "XDR": "Special Drawing Rights", "XOF": "CFA Franc BCEAO", "XPF": "CFP Franc", "YER": "Yemeni Rial", "ZAR": "South African Rand", "ZMW": "Zambian Kwacha", "ZWL": "Zimbabwean Dollar" };
  // Add all your currency codes and names here

function populateCurrencySelects() {
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');

  for (const [shortName, fullName] of Object.entries(currencyFullNames)) {
    const option = document.createElement('option');
    option.value = shortName;
    option.textContent = fullName;
    fromCurrencySelect.appendChild(option.cloneNode(true));
    toCurrencySelect.appendChild(option);
  }
}

window.onload = populateCurrencySelects;

function convertCurrency() {
  const fromCurrencyShort = document.getElementById('fromCurrency').value;
  const toCurrencyShort = document.getElementById('toCurrency').value;
  const amount = document.getElementById('amount').value;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const rate = data.conversion_rates[toCurrencyShort];
      const convertedAmount = amount * rate;
      const fromCurrencyFullName = currencyFullNames[fromCurrencyShort];
      const toCurrencyFullName = currencyFullNames[toCurrencyShort];
      document.getElementById('result').innerText = `${amount} ${fromCurrencyFullName} = ${convertedAmount.toFixed(2)} ${toCurrencyFullName}`;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('result').innerText = 'An error occurred while fetching data.';
    });
}


function populateCurrencySelects() {
  const fromCurrencySelect = document.getElementById('fromCurrency');
  const toCurrencySelect = document.getElementById('toCurrency');

  for (const [shortName, fullName] of Object.entries(currencyFullNames)) {
    const option = document.createElement('option');
    option.value = shortName;
    option.textContent = fullName;
    fromCurrencySelect.appendChild(option.cloneNode(true));
    toCurrencySelect.appendChild(option);
  }
}

window.onload = populateCurrencySelects;

function convertCurrency() {
  const fromCurrencyShort = document.getElementById('fromCurrency').value;
  const toCurrencyShort = document.getElementById('toCurrency').value;
  const amount = document.getElementById('amount').value;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const rate = data.conversion_rates[toCurrencyShort];
      const convertedAmount = amount * rate;
      const fromCurrencyFullName = currencyFullNames[fromCurrencyShort];
      const toCurrencyFullName = currencyFullNames[toCurrencyShort];
      document.getElementById('result').innerText = `${amount} ${fromCurrencyFullName} = ${convertedAmount.toFixed(2)} ${toCurrencyFullName}`;
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById('result').innerText = 'An error occurred while fetching data.';
    });
}
