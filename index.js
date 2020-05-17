#!/usr/bin/env node

const countryList = require('country-list');
const axios = require('axios').default;

let args = process.argv.slice(2);
let countryCode = countryList.getCode(args[0]);

if (!countryCode) {
      console.log(error('votre nom de pays doit être en anglais '));
      process.exit(1);
}

let year = args[1] || new Date().getFullYear();

axios.get(`https://date.nager.at/api/v2/publicholidays/${year}/${countryCode}`)
      .then((response) => {

            console.log(response.data, ['date', 'name']);
      })
      .catch((error) => {

            console.log(error);
      });