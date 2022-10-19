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
    "stedref": "polygon, gps-koordinat, adresse eller matrikkel data"
 }
