# Timeless Beauty - Rara eCommerce Barntema

En skönhet och hudvårds hemsida utvecklad som ett barntema baserat på Rara eCommerce för mitt examensarbete. Innehåller inloggning med Google, betallösning med paypal och API-kommunikation med Postman.

## Installation

1. Ladda ner och installera projektet, https://github.com/Cassandrabook/examensarbete
2. Extrahera filerna till din WordPress 'themes'-mapp.
3. Aktivera temat från WordPress-adminpanelen.

## Beroenden och Krav

- WordPress version 5.0 eller senare.
- WooCommerce version 3.0 eller senare.
- PHP version 7.2 eller senare.
- Webbläsare: Chrome (senaste), Firefox (senaste), Safari (senaste).

## Inloggning med Google

För att använda Google-inloggning, skapa en [Google API-nyckel] "console.developers.google.com" och konfigurera den i WordPress-inställningarna.

## Postman API-kommunikation

För att testa och använda API-kommunikation med Postman, använd följande detaljer:

- **Sakpa nycklar** Skapa och hämta API-nycklar från WooCommerce.
- **Autentisering:** Lägga in nycklarna under OAuth 1.0 i Postman
- **Base URL:** [API-base-URL], exempel http://localhost/examensarbete/wordpress/wp-json/wc/v3/products/
- **WooCommerce API dokumentaion** https://woocommerce.github.io/woocommerce-rest-api-docs/?shell#

## Begränsningar

- Inloggning med Google kan vara inaktiverad om Google API-nyckeln inte är korrekt inställd.
- Postman API-testning är endast för utvecklingsändamål och bör inaktiveras i produktionsmiljön.

## Målplattformar

- WordPress 5.0 eller senare.
- WooCommerce 3.0 eller senare.
- PHP 7.2 eller senare.
- Webbläsare: Chrome (senaste), Firefox (senaste), Safari (senaste).

## Teknologier och Verktyg

- Byggt med HTML, CSS, PHP, Plugins.
- Använder Rara Ecommerce som huvudtema.
- Inloggning med Google genom [Google API].
- API-kommunikation med Postman.
