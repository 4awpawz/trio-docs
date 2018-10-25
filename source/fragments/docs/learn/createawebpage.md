<!--
title: Learn How To Create A Web Page
template: learnhowto.html
appendToTarget: true
activeHeaderItem: 2
callback: showCurrentPageInHeader.js
-->

# Create A Web Page

__Important__ Please review <a data-trio-link href="/docs/learn/howpagesarecomposed">How Pages Are Composed</a>, <a data-trio-link href="/docs/learn/frontmatter">Front Matter</a>, <a data-trio-link href="/docs/learn/metadata">Metadata</a> and <a href="/docs/learn/javascriptcallbacks">JavaScript Callbacks</a> before proceeding with this exercise.

## 1. Create A Page Template

In your project's source/templates folder, create a new file named default.html and copy and paste the following markup into it.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>title</title>
</head>

<body>
    <main>
        <section></section>
    </main>
</body>

</html>
```

### Pick A Tag As The Page Fragment Target

Lets use our page template's section tag to act as the target for our page fragment's content. Do so by adorning the section tag with the data-trio-fragment attribute as shown below.

```html
<section data-trio-fragment></section> <!-- target -->
```

## 2. Crete A Page Fragment

In your project's source/fragments folder, create a new file named index.md.

### Add Front Matter

Add the following front matter delimiters to the very top of the file.

```YAML
<!--
-->
```

### Add The "template" Property To The Front Matter

Trio must be told what page template is associated with this page fragment. Lets do that now by adding the "template" property to our page fragment's front matter and assigning it the name of our page template.

By the way, every page fragment must include the "template" property in its front matter.

```YAML
<!--
template: default.html
-->
```

### Add The "title" Property To The Front Matter

Trio must also be told what title to use when it creates the page. Lets do that now as well by adding the "title" property to our page fragment's front matter and assigning it "Hello World".

And like the "template" property, every page fragment must also include this property in its front matter.

```YAML
<!--
template: default.html
title: Hello World
-->
```

### Add The "appendToTarget" Property To The Front Matter

Now we will tell Trio how we want it to merge our page fragment's content into our page template's markup.

What we want is for Trio to append the content to the page template's main tag which we adorned with the data-trio-fragment attribute.

**Note: If we don't do this, Trio, by default, will replace the main tag with the page fragment's content.**

Lets do this by adding the "appendToTarget" property to the front matter with a boolean value of true.

```YAML
<!--
template: default.html
title: Hello World
appendToTarget: true
-->
```

### Add Content To The Markdown

A web page without any content is honestly quite boring. Lets fix that by having our web page render "Hello World" using an h1 header tag.

```markdown
<!--
template: default.html
title: Hello World
appendToTarget: true
-->

# Hello World
```

## 3. Build And Run The Project

Now lets build and run the website in the browser. Open your terminal and from your project's root folder run the following command.

```shell
trio b && trio s
```

Trio will inform you that it is building your project for development and then render your website's default page in the browser. You should see the following rendered in the browser. 

<img data-trio-link src="/media/hello-world-2.png">

## 4. Create An Include

In your project's source/includes folder, create a new file named countries.md.

### Add Content To The Include

Copy and paste the following unordered list of countries into source/includes/countries.md.

```markdown
* Afghanistan
* Albania
* Algeria
* Andorra
* Angola
* Antigua and Barbuda
* Argentina
* Armenia
* Australia
* Austria
* Azerbaijan
* Bahamas
* Bahrain
* Bangladesh
* Barbados
* Belarus
* Belgium
* Belize
* Benin
* Bhutan
* Bolivia
* Bosnia and Herzegovina
* Botswana
* Brazil
* Brunei Darussalam
* Bulgaria
* Burkina Faso
* Burundi
* Cambodia
* Cameroon
* Canada
* Cape Verde
* Central African Republic
* Chad
* Chile
* China
* Colombia
* Comoros
* Congo
* Congo (Democratic Republic of the)
* Costa Rica
* Côte d'Ivoire
* Croatia
* Cuba
* Cyprus
* Czech Republic
* Denmark
* Djibouti
* Dominica
* Dominican Republic
* Ecuador
* Egypt
* El Salvador
* Equatorial Guinea
* Eritrea
* Estonia
* Ethiopia
* Fiji
* Finland
* France
* Gabon
* Gambia
* Georgia
* Germany
* Ghana
* Greece
* Grenada
* Guatemala
* Guinea
* Guinea-Bissau
* Guyana
* Haiti
* Honduras
* Hungary
* Iceland
* India
* Indonesia
* Iran (Islamic Republic of)
* Iraq
* Ireland
* Israel
* Italy
* Jamaica
* Japan
* Jordan
* Kazakhstan
* Kenya
* Kiribati
* Korea (Democratic People's Republic of)
* Korea (Republic of)
* Kuwait
* Kyrgyzstan
* Lao People's Democratic Republic
* Latvia
* Lebanon
* Lesotho
* Liberia
* Libya
* Liechtenstein
* Lithuania
* Luxembourg
* Macedonia (The former Yugoslav Republic of)
* Madagascar
* Malawi
* Malaysia
* Maldives
* Mali
* Malta
* Marshall Islands
* Mauritania
* Mauritius
* Mexico
* Micronesia (Federated States of)
* Republic of Moldova
* Monaco
* Mongolia
* Montenegro
* Morocco
* Mozambique
* Myanmar
* Namibia
* Nauru
* Nepal
* Netherlands
* New Zealand
* Nicaragua
* Niger
* Nigeria
* Norway
* Oman
* Pakistan
* Palau
* Panama
* Papua New Guinea
* Paraguay
* Peru
* Philippines
* Poland
* Portugal
* Qatar
* Romania
* Russian Federation
* Rwanda
* Saint Kitts and Nevis
* Saint Lucia
* Saint Vincent and the Grenadines
* Samoa
* San Marino
* Sao Tome and Principe
* Saudi Arabia
* Senegal
* Serbia
* Seychelles
* Sierra Leone
* Singapore
* Slovakia
* Slovenia
* Solomon Islands
* Somalia
* South Africa
* South Sudan
* Spain
* Sri Lanka
* Sudan
* Suriname
* Swaziland
* Sweden
* Switzerland
* Syrian Arab Republic
* Tajikistan
* Tanzania (United Republic of)
* Thailand
* Timor-Leste
* Togo
* Tonga
* Trinidad and Tobago
* Tunisia
* Turkey
* Turkmenistan
* Tuvalu
* Uganda
* Ukraine
* United Arab Emirates
* United Kingdom of Great Britain and Northern Ireland
* United States of America
* Uruguay
* Uzbekistan
* Vanuatu
* Venezuela (Bolivarian Republic of)
* Viet Nam
* Yemen
* Zambia
* Zimbabwe
```

### Add The Include To Our Page Template

Now we have to add our new include file source/includes/countries.md to our page template source/templates/default.html. We do so by adding a new tag that is adorned with the attribute data-trio-include="countries.md". In this exercise we will use another section tag for this.

Using your code editor, open the page template source/templates/default.html and append the section tag displayed below 

```html
<section data-trio-include="countries.md"></section>
```

to our page template source/templates/default.html so that it now looks like the following.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>title</title>
</head>

<body>
    <main>
        <section data-trio-fragment></section>
        <section data-trio-include="countries.md"></section> <!-- our new include -->
    </main>
</body>

</html>
```

Because we are still serving our project the browser should now render our list of countries as shown below. If for some reason your browser isn't showing these changes, from your terminal please run `trio b && trio s` from your project's root folder.

<img data-trio-link src="/media/helloworldandlistofcountries.png">

## 5. Adding Content Dynamically Using JavaScript And Metadata

In step 4 above we created an include to add our list of countries to our page. While it is a perfectly acceptable to do it that way, the sad truth is that countries have to be added and removed from the list as the geopolitical nature of the world changes. A better approach would be to periodically get the list from some online database, maybe by creating an NPM task that queries the United Nations countries database, and save the results of the query as a JSON file. For this part of our exercise we are going to pretend that we did query a database and did get the results which we saved in the file source/data/countries.json.

### Create source/data/countries.json

We will mock the results of our imaginary query of an online countries database so create the file source/data/countries.json and copy and paste the JSON array of countries below to the file.

```json
["Afghanistan",
"Albania",
"Algeria",
"Andorra",
"Angola",
"Antigua and Barbuda",
"Argentina",
"Armenia",
"Australia",
"Austria",
"Azerbaijan",
"Bahamas",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Belize",
"Benin",
"Bhutan",
"Bolivia",
"Bosnia and Herzegovina",
"Botswana",
"Brazil",
"Brunei Darussalam",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cambodia",
"Cameroon",
"Canada",
"Cape Verde",
"Central African Republic",
"Chad",
"Chile",
"China",
"Colombia",
"Comoros",
"Congo",
"Congo (Democratic Republic of the)",
"Costa Rica",
"Côte d'Ivoire",
"Croatia",
"Cuba",
"Cyprus",
"Czech Republic",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Ethiopia",
"Fiji",
"Finland",
"France",
"Gabon",
"Gambia",
"Georgia",
"Germany",
"Ghana",
"Greece",
"Grenada",
"Guatemala",
"Guinea",
"Guinea-Bissau",
"Guyana",
"Haiti",
"Honduras",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran (Islamic Republic of)",
"Iraq",
"Ireland",
"Israel",
"Italy",
"Jamaica",
"Japan",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Korea (Democratic People's Republic of)",
"Korea (Republic of)",
"Kuwait",
"Kyrgyzstan",
"Lao People's Democratic Republic",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Macedonia (The former Yugoslav Republic of)",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands",
"Mauritania",
"Mauritius",
"Mexico",
"Micronesia (Federated States of)",
"Republic of Moldova",
"Monaco",
"Mongolia",
"Montenegro",
"Morocco",
"Mozambique",
"Myanmar",
"Namibia",
"Nauru",
"Nepal",
"Netherlands",
"New Zealand",
"Nicaragua",
"Niger",
"Nigeria",
"Norway",
"Oman",
"Pakistan",
"Palau",
"Panama",
"Papua New Guinea",
"Paraguay",
"Peru",
"Philippines",
"Poland",
"Portugal",
"Qatar",
"Romania",
"Russian Federation",
"Rwanda",
"Saint Kitts and Nevis",
"Saint Lucia",
"Saint Vincent and the Grenadines",
"Samoa",
"San Marino",
"Sao Tome and Principe",
"Saudi Arabia",
"Senegal",
"Serbia",
"Seychelles",
"Sierra Leone",
"Singapore",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"South Sudan",
"Spain",
"Sri Lanka",
"Sudan",
"Suriname",
"Swaziland",
"Sweden",
"Switzerland",
"Syrian Arab Republic",
"Tajikistan",
"Tanzania (United Republic of)",
"Thailand",
"Timor-Leste",
"Togo",
"Tonga",
"Trinidad and Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates",
"United Kingdom of Great Britain and Northern Ireland",
"United States of America",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Venezuela (Bolivarian Republic of)",
"Viet Nam",
"Yemen",
"Zambia",
"Zimbabwe"]
```

### Create The JavaScript Callback

Next we will create our JavaScript callback to dynamically add our JSON array of countries to our page.

Create the file source/callbacks/countries.js, open it in your editor and copy and paste the following JavaScript code
into the file.

```javascript
module.exports = ({ $, site }) => {
    const countries = site.dataCatalog.countries;
    let $target = $("#hello-world");

    $target.after("<ol class=\"country-list\"></ol>");
    $target = $("ol.country-list");

    countries.forEach(country => {
        $target.append(`
            <li><div class="country-list__item">${country}</div></li>
        `);
    });
};
```

Let's take a closer look at what our callback is doing.

1. It is  exporting a function.

1. The function parameters are destructured from the context argument that Trio passes to the callback.

    * `$` is the cheerio wrapper of our composite.

    * `site` contains all the metadata that Trio generated when it built our project from which we can reference our list of countries.

1. We assign a reference to the list of countries `site.dataCatalog.countries` to `const countries`.

2. We query the cheerio wrapper of our composite for the `h1` tag which has an ID of `hello-world` and assign the result to `$target`.

3. Using `$target`, we add an ordered list tag `<ol class="countries"></ol>` immediately after what $target points to, which is the h1 tag.

4. We query the cheerio wrapper of our composite again but this time for the ordered list tag we just added and assign the result to $target.

5. We then iterate over the countries list, appending each country to our ordered list.

Now that we have our callback coded we no longer need the include, we need to remove the `<section data-trio-include="countries.md"></section>` tag from the page template source/templates/default.html, which should then look like this:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>title</title>
</head>

<body>
    <main>
        <section data-trio-fragment></section>
    </main>
</body>

</html>
```

To wire up our callback we have to add it to our page fragment's front matter. Open source/fragments/index.md in your editor and copy and paste the following into the file's front matter

```YAML
callback: countries
```
so that the file now looks like this

```YAML
<!--
template: default.html
title: Hello World
appendToTarget: true
callback: countries
-->
```
```markdown
# Hello World
```

Now let's build and run our project again. From the root of the project, run the following command in the terminal

```shell
trio b && trio s
```

and once again you should see the page rendered but this time with an ordered list of countries.

### Summary

Being able to work our composites using just JavaScript and metadata is perhaps one of the best and most empowering features of Trio. The code responsible for dynamically working our composites are neatly encapsulated in their own JavaScript modules and our markup remains clean, uncluttered and free of template tags peppered throughout. This separation of concerns leads to a project that is easier to reason about and more maintainable.

We've only just scratched the surface with this exercise. There is no end to what you can achieve with Trio's approach to working composites using JavaScript and metadata. Thinking about creating a portfolio? Callbacks and JSON data catalogs will make it a snap. Thinking about creating a kick ass blog for yourself or your company, well Trio has you covered there as well as it has an extensive array of blog-specific metadata to help you build out your blog which we will explore next in detail in the [Building A Blog] exercise.
