# mattilsynet-app

## Available Scripts

In the project directory, you can run:

### `npm i`

Installs the required packages

### `npm start`

Builds and runs express server.

Open [http://localhost:3000](http://localhost:3000)  to view it in your browser.

### `npm run start:dev`

Runs the app in the development mode using both parcel and express.\
Open [http://localhost:1234](http://localhost:1234) (parcel) or [http://localhost:3000](http://localhost:3000) (express) to view it in your browser.

The parcel server will reload when you make changes.\


```
Objekttype tilsynsobjekt:
 {
    "idstring": "intern-id"
    "aktivitet": "dyrehold",
    "adresse": "lenke til adresse-objekt",
    "virksomhetsmappe": "lenke til virksomhetsmappe-objekt",
 }
Objekttype virksomhetsmappe:
 {
    "idstring": "intern-id",
    "eierref": "lenke til person eller foretaks -objekt",
    "adresse": "lenke til adresse-objekt"
 }
Objekttype oppholdshistorie:
 {
    "idstring": "intern-id",
    "tidligereopphold": [lenker til registrertForflytning-objekt]
 }
Objekttype registrertForflytning
 {
    "idstring": "intern-id",
    "dyrehold": "lenke til tilsyns-objekt",
    "individ": {
        "fra": "lenke til tilsyns -objekt"
        "til": "lenke til tilsyns -objekt"
    }
    "sted": "lenke til sted-objekt" 
 }
 Objekttype sted
 {
    "idstring": "intern-id",
    "stedref": "polygon, gps-koordinat, adresse eller matrikkel id"
 }
```