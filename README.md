## Pomorie-info **React** version

---

> This is the first React project code that I am sharing on my GitHub. This repo is called v2 because there was some major updates made on the site structure.
> .jpg pictures are NOT uploaded to GitHub, so if you want to download and start the project it would not work. Please check it here 👉 https://pomorie-info.com

<ul>
  <li>❓ What was used to create this project?</li>
  <li>❗ Styling:  CSS, module.css, JSS (js in css to apply styles on some MUI components), sx prop for MUI inline styling</li>
  <li>❗ Custom card elements ({children}), props, useState, useEffect, contextAPI, React Router </li>
  <li>❗ Third-party libraries like: Moment, Fslightbox-react, Material UI</li>
</ul>

---

> Here are some user stories I wrote, about each of the pages.

> Pomorie-info index(main) page.

1. When I type www.Pomorie-info.com I want to visit, the main page of this informational website to find many interesting information about the city of Pomorie.
2. On the top of the website I want to see a header with a logo inside and button for registration and a ‘menu’ button.
3. Given, there is a ‘menu’ button, and when I click on it, I want to see the site menu appearing, with all site sections inside.
4. When I click on each of the given sections, I want to see the section itself, to explore more information about the particular section.
5. I want to see sections for:
   👉 ‘Parkings(Free or paid)’ to know where to leave my vehicle
   👉 ‘Beaches’ to know where are the nearest beaches to my accommodation place, whether are they paid or free, is there a lifeguard on them, and so on.
   👉 ‘Attractions’ to know where I can have fun with my kids
   👉 ‘Landmarks’ and museums to explore and learn more about the city and its history and culture
   👉 ‘Playgrounds and kids’ places’ where my kids can play and have fun
   👉 ‘Sport’ to know where I can run, play football, tennis, beach volley, take a morning run, jog, ride bicycle and so on
6. I want the header to be fixed, so when I scroll down the page to see the menu button all the time.
7. When I scroll down a little bit, I want to see the ‘back to top’ button appearing, in order to easily get back to the top of the page.
8. Also, on the main Page I want to see the most important information about the season 2023, in order to be prepared with the latest news.
9. As a visitor I want to see some news section and a section with pictures of the most interesting places to visit.
10. As a visitor I want to see FAQ section, with the most important information according all frequently asked questions.

Museums section:

<hr>

1. Given there is a ‘Museums’ section in the menu, and I click on It, I want to be redirected and see all the museums available in Pomorie.
2. When I`m on ‘Museums’ page, I want to have some breadcrumbs under the header, that inform me where on the site I am now, and an easy way to get back to the previous page if it is not the ‘homepage’ or button with link to the ‘homepage’.
3. When I`m on the ‘Museums’ page I want to see some card elements with one picture of the museum, a short description, phone number, working time, and address. I also want to see a button, and when I click on it to be redirected to the exact page of the selected museum to read more information.

Beaches section:

<hr>

1. Given there is a ‘Beaches’ section in the menu, and I click on It, I want to be redirected and see all the beaches available in Pomorie.
2. When I`m on ‘Beaches’ page, I want to have some breadcrumbs under the header, that inform me where on the site I am now, and an easy way to get back to the previous page if it is not the ‘homepage’ or button with link to the ‘homepage’.
3. When I`m on the ‘Beaches’ page I want to see some card elements with one picture of thebeach, a short description, whether is it free or paid or mixed, prices of the equipment that I can rent, and address. I also want to see a button, and when I click on it to be redirected to the exact page of the selected beach to read more information.

Parking section:

<hr>

1. Given there is a ‘Parking’ section in the menu, and I click on It, I want to be redirected and see all the beaches available in Pomorie.
2. When I`m on ‘Parking’ page, I want to have some breadcrumbs under the header, that inform me where on the site I am now, and an easy way to get back to the previous page if it is not the ‘homepage’ or button with link to the ‘homepage’.
3. When I`m on the ‘Parking’ page I want to see some card elements with one picture of the parking, a short description, whether is it free or paid, prices for an hour or a day, and address. I also want to see a button, and when I click on it to be redirected to the exact page of the selected parking to read more information.

Attractions section:

<hr>

1. Given there is an ‘Attractions’ section in the menu, and I click on It, I want to be redirected and see all the beaches available in Pomorie.
2. When I`m on the ‘Attractions’ page, I want to have some breadcrumbs under the header, that inform me where on the site I am now, and an easy way to get back to the previous page if it is not the ‘homepage’ or button with link to the ‘homepage’.
3. When I`m on the ‘Attractions’ page I want to see some card elements with one picture of the attraction, a short description, phone number, prices, and address. I also want to see a button, and when I click on it to be redirected to the exact page of the selected attraction to read more information.

Beach section:

<hr>

1. Given I have selected some beach, from the ‘Beaches’ section. After redirection I want to see the header section, breadcrumb section with buttons, one leading to the homepage and one leading to Beaches section.
2. Below I want to see a section with name of the beach and some description.
3. Below I want to see a list of all possible extras that I can find on this beach.
   ❓ Is it paid or free or mixed
   ❓ What is the daily price of the equipment
   ❓ Is there a public toilet or any other option
   ❓ is the beach guarded or non-guarded
   ❓ when the lifeguard comes and goes
   ❓ are there any showers
   ❓ are there any changing spots
   ❓ are there any restaurants or beach bars
4. Below, If there are any restaurants on or near this beach, I want to see their names and a picture of each. If I click on some of them, I want to be redirected to the page of the restaurant/beach bar in order to see more information about working time, prices, menus, description, ratings, and so on.

Footer section:

<hr>

1. As a visitor, on every section of the site I want to see a footer section, with important information, other interesting sites and resources, and also a possibility to subscribe to a mailing form because I want to receive latest news bulletin.

💩 '404 not found' custom page:

<hr>

1. As a visitor, if there is no page found I want to see a custom page, that shows me a message and a 'back' button, to have an option to reach the homepage again.
