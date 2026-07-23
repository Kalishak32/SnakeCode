/* ==========================================
   SNAKE CODE 2.0
   USER SYSTEM
========================================== */


// ==========================================
// WCZYTYWANIE GRACZA
// ==========================================


let userData = JSON.parse(
    localStorage.getItem("snakeUser")
);



// jeżeli gracz nie istnieje - tworzymy

if(!userData){

    userData = {

    nickname:"Code Rookie",

    level:1,

    xp:0,

    maxXp:100,


    completedLessons:[],


    completedTasks:[],

    



    coursesProgress:{


        python:{

            completed:0,

            total:50

        },


        html:{

            completed:0,

            total:40

        },


        cpp:{

            completed:0,

            total:60

        }


    },



    stats:{

        lessonsCompleted:0,

        tasksCompleted:0,

        totalXpEarned:0

    },



    achievements:[]

};

    saveUser();

}



// ==========================================
// ZAPIS GRACZA
// ==========================================


function saveUser(){

    localStorage.setItem(
        "snakeUser",
        JSON.stringify(userData)
    );

}



// ==========================================
// SYSTEM XP
// ==========================================


function addXP(amount){


    userData.xp += amount;


    userData.stats.totalXpEarned += amount;



    // sprawdzanie poziomu

    if(userData.xp >= userData.maxXp){


        userData.level++;


        userData.xp = userData.xp - userData.maxXp;


        userData.maxXp += 100;



        alert(
            "Awans! Osiągnięto poziom "
            + userData.level
        );


    }



    saveUser();

}



// ==========================================
// SYSTEM ZADAŃ
// ==========================================

const tasks = [


{
id:"task1",
name:"Hello World",
description:"Napisz program, który wyświetli Hello World.",
xp:50,
required:null,
lesson:"lesson1"
},


{
id:"task2",
name:"Twoje imię",
description:"Stwórz program, który wyświetli Twoje imię.",
xp:50,
required:"task1",
lesson:"lesson2"
},


{
id:"task3",
name:"Pierwsza zmienna",
description:"Utwórz zmienną name i wyświetl jej wartość.",
xp:75,
required:"task2",
lesson:"lesson3"
},


{
id:"task4",
name:"Twój wiek",
description:"Stwórz zmienną age i wyświetl swój wiek.",
xp:75,
required:"task3",
lesson:"lesson4"
},


{
id:"task5",
name:"Dodawanie liczb",
description:"Napisz program, który doda dwie liczby i pokaże wynik.",
xp:100,
required:"task4",
lesson:"lesson5"
},


{
id:"task6",
name:"Odejmowanie",
description:"Napisz program, który odejmie dwie liczby.",
xp:100,
required:"task5",
lesson:"lesson6"
},


{
id:"task7",
name:"Instrukcja IF",
description:"Sprawdź czy liczba jest większa od 10.",
xp:125,
required:"task6",
lesson:"lesson7"
},


{
id:"task8",
name:"Pętla FOR",
description:"Wyświetl liczby od 1 do 5 używając pętli.",
xp:150,
required:"task7",
lesson:"lesson8"
},


{
id:"task9",
name:"Lista danych",
description:"Stwórz listę i wyświetl jej elementy.",
xp:150,
required:"task8",
lesson:"lesson9"
},


{
id:"task10",
name:"Pierwsza funkcja",
description:"Stwórz funkcję, która wyświetli wiadomość.",
xp:200,
required:"task9",
lesson:"lesson10"
}


];

const lessons = [

{
id:"lesson1",
title:"Czym jest Python?",
content:
`
Python to prosty język programowania.

Pierwszy program:

print("Hello World")

Funkcja print wyświetla tekst.
`,
xp:20
},


{
id:"lesson2",
title:"Zmienne",
content:
`
Zmienne przechowują informacje.

Przykład:

name = "Kotek"

print(name)
`,
xp:20
},


{
id:"lesson3",
title:"Typy danych",
content:
`
Python posiada różne dane:

tekst:
"Hello"

liczba:
123
`,
xp:20
},


{
id:"lesson4",
title:"Operatory",
content:
`
Dodawanie:

5 + 5

wynik:

10
`,
xp:20
},


{
id:"lesson5",
title:"Instrukcje IF",
content:
`
Program może podejmować decyzje:

if liczba > 10:
    print("Duża")
`,
xp:20
},


{
id:"lesson6",
title:"Pętle",
content:
`
Pętla wykonuje kod wiele razy:

for i in range(5):
    print(i)
`,
xp:20
},


{
id:"lesson7",
title:"Listy",
content:
`
Lista przechowuje wiele wartości:

lista = ["kot","pies"]

print(lista)
`,
xp:20
}


];




// ukończenie zadania


function completeTask(taskId){


    console.log("Ukończono zadanie:", taskId);


    let task = tasks.find(
        t => t.id === taskId
    );



    if(!task){

        return;

    }



    // sprawdzamy czy już zrobione

    if (userData.completedTasks.includes(taskId)) {

        alert(
            "To zadanie jest już ukończone!"
        );

        return;

    }




    userData.completedTasks.push(taskId);



    userData.stats.tasksCompleted++;



    addXP(task.xp);



    alert(

        "Zadanie ukończone! +"

        + task.xp +

        " XP"

    );



    saveUser();


}



// ==========================================
// PROFIL GRACZA
// ==========================================


function loadProfile(){


let nickname =
document.getElementById("username");


let level =
document.getElementById("level");


let xp =
document.getElementById("xp");


let progress =
document.getElementById("xpProgress");


let rank =
document.getElementById("rank");


let lessons =
document.getElementById("lessons");


let tasks =
document.getElementById("tasks");


let totalXp =
document.getElementById("totalXp");


let achievements =
document.getElementById("achievements");





if(nickname){

nickname.innerHTML =
userData.nickname;

}



if(level){

level.innerHTML =
userData.level;

}




if(xp){

xp.innerHTML =
userData.xp 
+
" / "
+
userData.maxXp;

}




if(progress){


let percent =
(userData.xp / userData.maxXp) * 100;


progress.style.width =
percent + "%";


}





// rangi

if(rank){


let playerRank = "🥚 Code Egg";


if(userData.level >= 5)
playerRank="🐍 Python Rookie";


if(userData.level >= 10)
playerRank="⚡ Code Warrior";


if(userData.level >= 20)
playerRank="🔥 Python Master";


if(userData.level >= 30)
playerRank="👑 Code Legend";



rank.innerHTML =
playerRank;


}




if(lessons){

lessons.innerHTML =
userData.stats.lessonsCompleted;

}



if(tasks){

tasks.innerHTML =
userData.stats.tasksCompleted;

}



if(totalXp){

totalXp.innerHTML =
userData.stats.totalXpEarned;

}




if(achievements){


if(userData.achievements.length === 0){

achievements.innerHTML =
"Brak osiągnięć";

}

else{

achievements.innerHTML =
userData.achievements.join("<br>");

}


}



}



// ==========================================
// AKTUALIZACJA STARYCH ZAPISÓW
// ==========================================


if(!userData.completedTasks){

    userData.completedTasks=[];

}


if(!userData.completedLessons){

    userData.completedLessons=[];

}


if(!userData.stats){

    userData.stats={

        lessonsCompleted:0,

        tasksCompleted:0,

        totalXpEarned:0

    };

}


saveUser();

// ==========================================
// UKOŃCZENIE LEKCJI
// ==========================================


function completeLesson(course, lesson){


    let id = course + "_lesson" + lesson;



    if(
        userData.completedLessons.includes(id)
    ){

        alert(
            "Ta lekcja jest już ukończona!"
        );

        return;

    }



    userData.completedLessons.push(id);



    if(userData.coursesProgress[course]){

        userData.coursesProgress[course].completed++;

    }



    userData.stats.lessonsCompleted++;



    // UWAGA:
    // lekcje NIE dają XP


    saveUser();



    alert(
        "✅ Lekcja ukończona! Odblokowano następną."
    );


}