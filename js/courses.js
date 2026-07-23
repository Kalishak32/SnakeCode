/* ==========================================
   SNAKE CODE 2.0
   COURSES DATABASE
========================================== */


const courses = [

    {
        id: "python",
        title: "Python",
        icon: "🐍",
        color: "#3776ab",

        description:
        "Naucz się programowania od podstaw. Twórz aplikacje, gry i automatyzacje.",

        difficulty: "Beginner",

        xp: 5000,

        modules:[

            {
                id:1,
                title:"Podstawy Pythona",
                lessons:[


                    {
                        id:1,
                        title:"Czym jest Python?",
                        xp:50,
                        completed:false,

                        content:`

                        <h2>🐍 Czym jest Python?</h2>

                        <p>
                        Python to jeden z najpopularniejszych
                        języków programowania na świecie.
                        </p>

                        <p>
                        Jest używany do tworzenia:
                        </p>

                        <ul>
                            <li>Aplikacji</li>
                            <li>Gier</li>
                            <li>Sztucznej inteligencji</li>
                            <li>Botów</li>
                            <li>Automatyzacji</li>
                        </ul>


                        <h3>Pierwszy kod:</h3>

                        <pre>
print("Hello World")
                        </pre>


                        `,


                        task:{

                            question:
                            "Wyświetl tekst Hello Snake",

                            answer:
                            'print("Hello Snake")'

                        }

                    },



                    {
                        id:2,
                        title:"Zmienne",
                        xp:50,
                        completed:false,


                        content:`

                        <h2>📦 Zmienne</h2>


                        <p>
                        Zmienna przechowuje dane,
                        które możemy później wykorzystać.
                        </p>


                        <pre>

nick = "Snake"
level = 1

                        </pre>


                        <p>
                        Python sam rozpoznaje typ danych.
                        </p>


                        `,


                        task:{

                            question:
                            "Stwórz zmienną name z wartością Snake",

                            answer:
                            'name = "Snake"'

                        }


                    },


                    {
                        id:3,
                        title:"Typy danych",
                        xp:75,
                        completed:false,


                        content:`

                        <h2>🔢 Typy danych</h2>


                        <p>
                        Najczęściej używane typy:
                        </p>


                        <pre>

string  = tekst

int     = liczba

float   = liczba zmiennoprzecinkowa

bool    = True / False

                        </pre>


                        `,


                        task:{

                            question:
                            "Utwórz zmienną age z liczbą 16",

                            answer:
                            "age = 16"

                        }

                    }


                ]

            },



            {
                id:2,
                title:"Logika programu",

                lessons:[


                    {
                        id:4,

                        title:"Instrukcje if",

                        xp:100,

                        completed:false,


                        content:`

                        <h2>🤔 Warunki if</h2>


                        <p>
                        Program może podejmować decyzje.
                        </p>


                        <pre>

age = 18


if age >= 18:
    print("Dorosły")

                        </pre>


                        `,


                        task:{

                            question:
                            "Stwórz warunek sprawdzający level >= 10",

                            answer:
                            "if level >= 10:"

                        }

                    }

                ]

            }

        ]

    },




    {
        id:"html-css",

        title:"HTML + CSS",

        icon:"🌐",

        description:
        "Twórz własne strony internetowe.",

        difficulty:"Beginner",

        xp:4000,


        modules:[]

    },



    {
        id:"javascript",

        title:"JavaScript",

        icon:"⚡",

        description:
        "Dodawaj interakcje i logikę do stron.",

        difficulty:"Intermediate",

        xp:6000,


        modules:[]

    },



    {
        id:"cpp",

        title:"C++",

        icon:"⚙️",

        description:
        "Programowanie aplikacji i gier.",

        difficulty:"Advanced",

        xp:8000,


        modules:[]

    },



    {
        id:"cyber",

        title:"Cyber Security",

        icon:"🔐",

        description:
        "Podstawy bezpieczeństwa i sieci.",

        difficulty:"Advanced",

        xp:10000,


        modules:[]

    }


];



console.log(
    "Snake Code Courses Loaded:",
    courses.length
);