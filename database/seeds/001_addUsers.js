const bcrypt = require("bcryptjs");

const hash = bcrypt.hashSync("password", 10);

const usersData = [
  {
    username: "bsmith",
    email: "bob.smith@gmail.com",
    password: hash,
    first_name: "Bob",
    last_name: "Smith"
  },
  {
    username: "larry",
    email: "larryj@gmail.com",
    password: hash,
    first_name: "Larry",
    last_name: "Johnson"
  },
  {
    username: "suzieQ",
    email: "suzz87@gmail.com",
    password: hash,
    first_name: "Suzan",
    last_name: "Edmond"
  },
  {
    username: "jen_nifer",
    email: "jen.g.m@gmail.com",
    password: hash,
    first_name: "Jennifer",
    last_name: "Gewin"
  },
  {
    username: "jake-boy",
    email: "jake_swanson_91@gmail.com",
    password: hash,
    first_name: "Jake",
    last_name: "Swanson"
  },
  {
    username: "sam_say_what",
    email: "samanthasmith@gmail.com",
    password: hash,
    first_name: "Sam",
    last_name: "Smith"
  },
  {
    username: "hail_hailey",
    email: "haileyjohnson@gmail.com",
    password: hash,
    first_name: "Hailey",
    last_name: "Johnson"
  },
  {
    username: "tessalate",
    email: "tessasmiles@gmail.com",
    password: hash,
    first_name: "Tessa",
    last_name: "Peterson"
  },
  {
    username: "tytytheguy",
    email: "ty@gmail.com",
    password: hash,
    first_name: "Ty",
    last_name: "Rogers"
  },
  {
    username: "amber_ok",
    email: "amber.rogers@gmail.com",
    password: hash,
    first_name: "Amber",
    last_name: "Rogers"
  },
  {
    username: "Maurine42",
    email: "Maryse_Lubowitz49@gmail.com",
    password: hash,
    first_name: "Henderson",
    last_name: "Satterfield"
  },
  {
    username: "Willa_Jast48",
    email: "Giuseppe_Jacobs@gmail.com",
    password: hash,
    first_name: "Montana",
    last_name: "Hand"
  },
  {
    username: "Ian69",
    email: "Laurel.Rippin@yahoo.com",
    password: hash,
    first_name: "Idella",
    last_name: "Dare"
  },
  {
    username: "Aron_Lehner42",
    email: "Elian_Stanton@yahoo.com",
    password: hash,
    first_name: "Nakia",
    last_name: "Monahan"
  },
  {
    username: "Florencio.Reichert",
    email: "Francesca23@yahoo.com",
    password: hash,
    first_name: "Eldred",
    last_name: "Yundt"
  },
  {
    username: "London77",
    email: "Alene49@yahoo.com",
    password: hash,
    first_name: "Cara",
    last_name: "Kassulke"
  },
  {
    username: "Arely.Hahn75",
    email: "Matt_Welch@hotmail.com",
    password: hash,
    first_name: "Jamal",
    last_name: "Mueller"
  },
  {
    username: "Keon31",
    email: "Harvey_Parker25@yahoo.com",
    password: hash,
    first_name: "Bernardo",
    last_name: "Kshlerin"
  },
  {
    username: "Jerod51",
    email: "Lera48@yahoo.com",
    password: hash,
    first_name: "Reyes",
    last_name: "Schmeler"
  },
  {
    username: "Leda.Grady",
    email: "Adelia.Gutmann@yahoo.com",
    password: hash,
    first_name: "Marty",
    last_name: "Parisian"
  },
  {
    username: "Santino51",
    email: "Marcelle_Gleichner@yahoo.com",
    password: hash,
    first_name: "Linnie",
    last_name: "Glover"
  },
  {
    username: "Margret.Lehner8",
    email: "Norene18@gmail.com",
    password: hash,
    first_name: "Clemmie",
    last_name: "Kunde"
  },
  {
    username: "Kianna52",
    email: "Carolanne_Murazik99@hotmail.com",
    password: hash,
    first_name: "Aglae",
    last_name: "Kreiger"
  },
  {
    username: "Laurence_Hackett",
    email: "Earl_Cremin10@gmail.com",
    password: hash,
    first_name: "Emma",
    last_name: "Langosh"
  },
  {
    username: "Mathew.Vandervort",
    email: "Francisco_Walsh71@yahoo.com",
    password: hash,
    first_name: "Florence",
    last_name: "Huel"
  },
  {
    username: "Althea38",
    email: "Katharina_Purdy@yahoo.com",
    password: hash,
    first_name: "Abelardo",
    last_name: "Hermann"
  },
  {
    username: "Lowell59",
    email: "Mateo29@gmail.com",
    password: hash,
    first_name: "Grayce",
    last_name: "Ruecker"
  },
  {
    username: "Dayne_Hilll",
    email: "Aletha.OReilly@yahoo.com",
    password: hash,
    first_name: "Dayana",
    last_name: "Cole"
  },
  {
    username: "Shayna_Hammes",
    email: "Rose_Greenholt@gmail.com",
    password: hash,
    first_name: "Rubye",
    last_name: "Macejkovic"
  },
  {
    username: "Gerda80",
    email: "Santa_DAmore@yahoo.com",
    password: hash,
    first_name: "Andreanne",
    last_name: "Hauck"
  },
  {
    username: "Jaunita_Lubowitz",
    email: "Jovanny91@yahoo.com",
    password: hash,
    first_name: "Yadira",
    last_name: "O'Keefe"
  },
  {
    username: "Susana54",
    email: "Ismael90@gmail.com",
    password: hash,
    first_name: "Elena",
    last_name: "Wyman"
  },
  {
    username: "Kelvin_Gerhold51",
    email: "Felix_Huel@hotmail.com",
    password: hash,
    first_name: "Scarlett",
    last_name: "Crooks"
  },
  {
    username: "Catherine_Miller34",
    email: "Reyes42@hotmail.com",
    password: hash,
    first_name: "Abner",
    last_name: "Doyle"
  },
  {
    username: "Sherman_Kirlin19",
    email: "Alek_Grimes24@gmail.com",
    password: hash,
    first_name: "Keshaun",
    last_name: "Bednar"
  },
  {
    username: "Jacques.Bernhard74",
    email: "Amanda.Johns83@yahoo.com",
    password: hash,
    first_name: "Georgette",
    last_name: "Cummerata"
  },
  {
    username: "Raegan.Sauer68",
    email: "Zachery.OReilly@gmail.com",
    password: hash,
    first_name: "Clare",
    last_name: "O'Reilly"
  },
  {
    username: "Jeff_Torphy",
    email: "Ignacio.Davis@yahoo.com",
    password: hash,
    first_name: "Norwood",
    last_name: "Mitchell"
  },
  {
    username: "Kennedi88",
    email: "Krystel.Schultz@yahoo.com",
    password: hash,
    first_name: "Celestine",
    last_name: "Walter"
  },
  {
    username: "Anahi57",
    email: "Newell68@yahoo.com",
    password: hash,
    first_name: "Rylee",
    last_name: "DuBuque"
  },
  {
    username: "Reilly_Morissette12",
    email: "Arnaldo69@gmail.com",
    password: hash,
    first_name: "Grayson",
    last_name: "Bode"
  },
  {
    username: "Henry.Stroman",
    email: "Jermain_Douglas@gmail.com",
    password: hash,
    first_name: "Gabe",
    last_name: "Konopelski"
  },
  {
    username: "Theodora.Schoen65",
    email: "Jaleel_Waters@yahoo.com",
    password: hash,
    first_name: "Henriette",
    last_name: "DuBuque"
  },
  {
    username: "Edwardo37",
    email: "Marcelina59@hotmail.com",
    password: hash,
    first_name: "Lottie",
    last_name: "Konopelski"
  },
  {
    username: "Alexandrine.Pacocha47",
    email: "Bonita.Wintheiser@hotmail.com",
    password: hash,
    first_name: "Annabelle",
    last_name: "Beer"
  },
  {
    username: "Madaline_McGlynn76",
    email: "Kiera30@yahoo.com",
    password: hash,
    first_name: "Maximus",
    last_name: "Kulas"
  },
  {
    username: "Maia32",
    email: "Clarabelle42@hotmail.com",
    password: hash,
    first_name: "Evert",
    last_name: "Schaefer"
  },
  {
    username: "Marietta48",
    email: "Cheyenne65@hotmail.com",
    password: hash,
    first_name: "Rosanna",
    last_name: "Rogahn"
  },
  {
    username: "Cicero.Lesch",
    email: "Jerrell91@hotmail.com",
    password: hash,
    first_name: "Mark",
    last_name: "VonRueden"
  },
  {
    username: "Justen.Bosco",
    email: "Jimmie82@gmail.com",
    password: hash,
    first_name: "Alysha",
    last_name: "Cole"
  },
  {
    username: "Dean44",
    email: "Allan89@gmail.com",
    password: hash,
    first_name: "Haleigh",
    last_name: "Baumbach"
  },
  {
    username: "Gail_Gutkowski",
    email: "Kameron_Legros@hotmail.com",
    password: hash,
    first_name: "Abner",
    last_name: "Carroll"
  },
  {
    username: "Jazmyn.Sawayn37",
    email: "Avery_Deckow@gmail.com",
    password: hash,
    first_name: "Vincent",
    last_name: "Kris"
  },
  {
    username: "Evans.Hahn79",
    email: "Cordia_Franecki@yahoo.com",
    password: hash,
    first_name: "Micheal",
    last_name: "Gutmann"
  },
  {
    username: "Halle58",
    email: "Mertie_OConner94@hotmail.com",
    password: hash,
    first_name: "Albina",
    last_name: "Veum"
  },
  {
    username: "Dock.Bechtelar",
    email: "Ken23@gmail.com",
    password: hash,
    first_name: "Kimberly",
    last_name: "Hintz"
  },
  {
    username: "Enid.Eichmann57",
    email: "Lola_Gusikowski@gmail.com",
    password: hash,
    first_name: "Nathan",
    last_name: "Goyette"
  },
  {
    username: "Gregory.Hessel98",
    email: "Cathrine.Lesch@yahoo.com",
    password: hash,
    first_name: "Katelynn",
    last_name: "Metz"
  },
  {
    username: "Hubert63",
    email: "Alec_Smitham1@yahoo.com",
    password: hash,
    first_name: "Velma",
    last_name: "Champlin"
  },
  {
    username: "Jasen.Sanford79",
    email: "Dimitri_Witting82@hotmail.com",
    password: hash,
    first_name: "Melyssa",
    last_name: "Herman"
  },
  {
    username: "Verona_Wiza",
    email: "Maximo_Hermann@hotmail.com",
    password: hash,
    first_name: "Ansley",
    last_name: "Cormier"
  },
  {
    username: "Zoe_Weimann",
    email: "Roscoe83@gmail.com",
    password: hash,
    first_name: "Laury",
    last_name: "Gorczany"
  },
  {
    username: "Agnes.Lind0",
    email: "Arvel31@yahoo.com",
    password: hash,
    first_name: "Sean",
    last_name: "O'Hara"
  },
  {
    username: "Frank_Hermann",
    email: "Llewellyn_Fadel28@yahoo.com",
    password: hash,
    first_name: "Magnus",
    last_name: "Frami"
  },
  {
    username: "Eliane_Blick",
    email: "Alexzander_Waters@yahoo.com",
    password: hash,
    first_name: "Abagail",
    last_name: "White"
  },
  {
    username: "Sid_Luettgen",
    email: "Abe_Harber@yahoo.com",
    password: hash,
    first_name: "Timmothy",
    last_name: "Rempel"
  },
  {
    username: "Clovis70",
    email: "Shania_Hilpert@yahoo.com",
    password: hash,
    first_name: "Werner",
    last_name: "Balistreri"
  },
  {
    username: "Janet68",
    email: "Summer_Lebsack@yahoo.com",
    password: hash,
    first_name: "Randi",
    last_name: "Smith"
  },
  {
    username: "Etha_Heller",
    email: "Gregoria.Romaguera@yahoo.com",
    password: hash,
    first_name: "Greyson",
    last_name: "Fisher"
  },
  {
    username: "Beaulah_Wehner",
    email: "Fausto_Gulgowski@yahoo.com",
    password: hash,
    first_name: "Doris",
    last_name: "Kreiger"
  },
  {
    username: "Consuelo.Goyette",
    email: "Hassie_Tillman73@gmail.com",
    password: hash,
    first_name: "Melvina",
    last_name: "Kozey"
  },
  {
    username: "Vesta_Kutch",
    email: "Milo.Carroll@gmail.com",
    password: hash,
    first_name: "Natasha",
    last_name: "Considine"
  },
  {
    username: "Estevan_Bosco",
    email: "Franz_Bins@yahoo.com",
    password: hash,
    first_name: "Claude",
    last_name: "Reichel"
  },
  {
    username: "Mariane50",
    email: "Arnold_Robel@gmail.com",
    password: hash,
    first_name: "Logan",
    last_name: "Hartmann"
  },
  {
    username: "Kyler_Littel8",
    email: "Will23@hotmail.com",
    password: hash,
    first_name: "Bert",
    last_name: "Rodriguez"
  },
  {
    username: "Joaquin.Sanford",
    email: "Reggie_Johnston@gmail.com",
    password: hash,
    first_name: "Orval",
    last_name: "Roob"
  },
  {
    username: "David17",
    email: "Katlyn_OKon@hotmail.com",
    password: hash,
    first_name: "Hobart",
    last_name: "Pfeffer"
  },
  {
    username: "Forrest.Doyle",
    email: "Rahul.Barrows0@yahoo.com",
    password: hash,
    first_name: "Beverly",
    last_name: "Bogisich"
  },
  {
    username: "Llewellyn_Hegmann",
    email: "Jennyfer77@gmail.com",
    password: hash,
    first_name: "Forest",
    last_name: "Robel"
  },
  {
    username: "Cortez_Bernhard",
    email: "Emmanuelle.Sporer15@gmail.com",
    password: hash,
    first_name: "Dusty",
    last_name: "Doyle"
  },
  {
    username: "Torrance47",
    email: "Annamarie_Baumbach@hotmail.com",
    password: hash,
    first_name: "Ressie",
    last_name: "Kub"
  },
  {
    username: "Henderson.Kihn",
    email: "Alize46@hotmail.com",
    password: hash,
    first_name: "Ulices",
    last_name: "Schamberger"
  },
  {
    username: "Lia.Schneider",
    email: "Okey.DuBuque@yahoo.com",
    password: hash,
    first_name: "Tiana",
    last_name: "Hessel"
  },
  {
    username: "Erwin50",
    email: "Eleonore.Walsh81@yahoo.com",
    password: hash,
    first_name: "Marilou",
    last_name: "Hand"
  },
  {
    username: "Rachel_Witting8",
    email: "Mariah.OKeefe@yahoo.com",
    password: hash,
    first_name: "Macie",
    last_name: "Gaylord"
  },
  {
    username: "Anastasia.Boehm",
    email: "Donna_Collins@hotmail.com",
    password: hash,
    first_name: "Christine",
    last_name: "Bahringer"
  },
  {
    username: "Velma47",
    email: "Rosalind.Kiehn30@yahoo.com",
    password: hash,
    first_name: "Gaetano",
    last_name: "Wehner"
  },
  {
    username: "Santa9",
    email: "Autumn_VonRueden@gmail.com",
    password: hash,
    first_name: "Nikita",
    last_name: "Gorczany"
  },
  {
    username: "Broderick.Ledner",
    email: "Augustine.Turcotte41@hotmail.com",
    password: hash,
    first_name: "Jefferey",
    last_name: "Olson"
  },
  {
    username: "Lempi24",
    email: "Adonis15@gmail.com",
    password: hash,
    first_name: "Melvina",
    last_name: "Vandervort"
  },
  {
    username: "Thurman.Huels",
    email: "Leonardo_Littel48@yahoo.com",
    password: hash,
    first_name: "Mack",
    last_name: "Franecki"
  },
  {
    username: "Daron.Jacobs13",
    email: "Cassandra_Carter@hotmail.com",
    password: hash,
    first_name: "Davonte",
    last_name: "Gaylord"
  },
  {
    username: "Meagan_Huels",
    email: "Lelah.Zulauf95@gmail.com",
    password: hash,
    first_name: "Lulu",
    last_name: "Lubowitz"
  },
  {
    username: "Alisha_Hintz23",
    email: "Astrid.Bradtke@gmail.com",
    password: hash,
    first_name: "Moshe",
    last_name: "Volkman"
  },
  {
    username: "Maribel20",
    email: "Kenny.Kirlin24@gmail.com",
    password: hash,
    first_name: "Ramon",
    last_name: "Morar"
  },
  {
    username: "Brendan.Leannon",
    email: "Johanna22@hotmail.com",
    password: hash,
    first_name: "Christy",
    last_name: "Abbott"
  },
  {
    username: "Odie_Wuckert",
    email: "Tessie_Howell@gmail.com",
    password: hash,
    first_name: "Nathan",
    last_name: "Maggio"
  },
  {
    username: "Craig.Denesik",
    email: "Nadia_Champlin81@hotmail.com",
    password: hash,
    first_name: "Jerrell",
    last_name: "Yost"
  },
  {
    username: "Herminio78",
    email: "Shakira_Larson40@hotmail.com",
    password: hash,
    first_name: "Ruthe",
    last_name: "Gutmann"
  },
  {
    username: "Theodore84",
    email: "Orval.Mertz77@yahoo.com",
    password: hash,
    first_name: "Torrance",
    last_name: "Hackett"
  },
  {
    username: "Grady.Roberts",
    email: "Keegan99@yahoo.com",
    password: hash,
    first_name: "Nina",
    last_name: "Boyle"
  },
  {
    username: "Renee32",
    email: "Caleb91@yahoo.com",
    password: hash,
    first_name: "Orrin",
    last_name: "Ruecker"
  },
  {
    username: "Juana89",
    email: "Samantha.Morar90@hotmail.com",
    password: hash,
    first_name: "Maia",
    last_name: "Hintz"
  },
  {
    username: "Gaylord69",
    email: "Adonis67@yahoo.com",
    password: hash,
    first_name: "Americo",
    last_name: "Franecki"
  },
  {
    username: "Bertrand_Ledner89",
    email: "Vern_Herzog47@hotmail.com",
    password: hash,
    first_name: "Lizzie",
    last_name: "Waelchi"
  },
  {
    username: "Alisa_Doyle",
    email: "Christine.Mante@hotmail.com",
    password: hash,
    first_name: "Eloise",
    last_name: "Lang"
  },
  {
    username: "Royce.Roob",
    email: "Reanna35@gmail.com",
    password: hash,
    first_name: "Kade",
    last_name: "Hettinger"
  },
  {
    username: "Germaine20",
    email: "Tobin_Bashirian35@yahoo.com",
    password: hash,
    first_name: "Julianne",
    last_name: "Hammes"
  },
  {
    username: "Sedrick_Champlin",
    email: "Eden_Considine27@gmail.com",
    password: hash,
    first_name: "Jerad",
    last_name: "Lakin"
  },
  {
    username: "Ilene87",
    email: "Sonny.Wintheiser@gmail.com",
    password: hash,
    first_name: "Saul",
    last_name: "Torp"
  }
];

exports.seed = function(knex, Promise) {
  return knex("users").then(() => {
    return knex("users").insert(usersData);
  });
};
