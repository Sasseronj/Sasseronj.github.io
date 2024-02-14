window.onload = function() {
    // Define the minimum desired width and height
    var minWidth = 500; // Minimum width
    var minHeight = 768; // Minimum height

    // Check the screen resolution
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    // If the resolution is smaller than the minimum dimensions, show the alert
    if (screenWidth < minWidth || screenHeight < minHeight) {
        alert("Please increase your screen resolution for a better experience.");
    }
};

let tagColors = {
    "Machine Learning": "#FFB6C1",  // Light Pink
    "Image processing": "#FFD700",  // Gold
    "Data Analysis": "#AFEEEE",  // Pale Turquoise
    "Python": "#98FB98",  // Pale Green
    "Data Representation": "#D8BFD8",  // Thistle
    "Classification Model": "#FFA07A",  // Light Salmon
    "Regression Model": "#FFDAB9",  // Peach Puff
    "SQL": "#87CEFA",  // Light Sky Blue
    "Datbase Modeling": "#FFA07A",  // Light Salmon
    "Query": "#FFDAB9",  // Peach Puff
    "FrontEnd": "#ADD8E6",  // Light Blue
    "BackEnd": "#FFC0CB",  // Pink
    "MongoDB": "#E6E6FA",  // Lavender
    "React": "#FFD700",  // Gold
    "JavaScript": "#FFB6C1",  // Light Pink
    "Unity": "#FFDAB9",  // Peach Puff
    "C#": "#98FB98",  // Pale Green
    "Game Development": "#E6E6FA",  // Lavender
    "Agile Methods": "#AFEEEE",  // Pale Turquoise
    "Data Base": "#FFDEAD",  // Navajo White
    "Numpy": "#FFDAB9",  // Peach Puff
    "Pandas": "#ADD8E6"  // Light Blue
};

let projects = [
    {
        subject: "Scientific Research",
        title: "Curriculum Learning and other training strategies for image denoising",
        shortDescription: "Design a robust Denoising Autoencoder architecture, optimize hyperparameters, and assess the impact of Curriculum Learning on performance for noise removal in machine learning models.",
        tags: ["Machine Learning", "Image Processing", "Data Analysis", "Python"],
        domain: "Github",
        link: "https://github.com/Sasseronj/IC"
    },
    {
        subject: "Data Science",
        title: "Diabetes Prediction",
        shortDescription: "This project employs Data Science and Machine Learning to analyze the 'Diabetes Prediction Dataset' from Kaggle, aiming to predict and make informed decisions about the diabetic condition of individuals based on predictor letiables.",
        tags: ["Machine Learning", "Data Analysis", "Data Representation", "Classification Model", "Python"],
        domain: "Google Colab",
        link: "https://colab.research.google.com/github/Sasseronj/Kaggle/blob/main/Diabetes/Diabetes_Prediction.ipynb"
    },
    {
        subject: "Artificial Intelligence",
        title: "Transfer Market Prediction",
        shortDescription: "Exploring the data pipeline, this project leveraged artificial intelligence to revolutionize player value prediction in European football during the 2017/18, 2018/19, and 2019/20 seasons.",
        tags: ["Machine Learning", "Data Analysis", "Data Representation", "Regression Model", "Python"],
        domain: "Google Colab",
        link: "https://colab.research.google.com/github/Sasseronj/Kaggle/blob/main/TransferMarket/Transder_Market_Prediction.ipynb"
    },
    {
        subject: "Data Base",
        title: "Minumum Accessibility Resources Company",
        shortDescription: "Commencing with company modeling, this project progressed to establish a robust database, culminating in a practical application showcasing effective data implementation for tangible business solutions.",
        tags: ["Data Base", "SQL", "Datbase Modeling", "Query"],
        domain: "Github",
        link: "https://github.com/Sasseronj/Project-DataBase"
    },
    {
        subject: "Web Development ",
        title: "HortaUrbana",
        shortDescription: "Creating an e-commerce platform for natural products, this project supports small vendors, fostering accessibility and community engagement.",
        tags: ["JavaScript", "FrontEnd", "BackEnd", "MongoDB", "React"],
        domain: "Github",
        link: "https://github.com/ethoshomo/Projeto-HortaUrbana"
    },
    {
        subject: "Software Engeneer",
        title: "Tree Project",
        shortDescription: "Development of a catalog of trees at USP São Carlos campus using agile methodology.",
        tags: ["JavaScript", "FrontEnd", "Agile Methods", "React"],
        domain: "Github",
        link: "https://github.com/Sasseronj/SoftEng-Arbo"
    },
    {
        subject: "Fellowship of the Game",
        title: "No More Undead",
        shortDescription: "An unknown virus has infected every human on Earth, leaving only one survivor intact, a prototype of a terminator robot with the aim of ridding the Earth of all living dead!",
        tags: ["Unity", "C#", "Game Development"],
        domain: "itch.io",
        link: "https://fog-icmc.itch.io/no-more-undead"
    },
    {
        subject: "OOP",
        title: "SHOW DE BOLA!!!",
        shortDescription: "The project aims to simulate both the group stage and knockout phase of the 2022 FIFA World Cup.",
        tags: ["Numpy", "Pandas", "Python"],
        domain: "Github",
        link: "https://github.com/ethoshomo/Copa2022"
    },
];

function addProjectToTable(project) {
    let table = document.getElementById("proj-table");
    let newRow = table.insertRow(-1);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    cell1.className = "proj-td";
    cell1.innerHTML = '<p class="text">' + project.subject + '</p>';

    cell2.className = "proj-td";
    cell2.innerHTML = '<p class="text">' + project.title + '</p>';

    cell3.className = "proj-td";
    cell3.innerHTML = '<p class="text">' + project.shortDescription + '</p>';

    cell4.className = "proj-td";
    let tagsList = '<ol>';
    project.tags.forEach(function(tag) {
        tagsList += '<li><p class="text" style="background-color:' + tagColors[tag] + '; border-radius: 1vh; margin: 0.5vh">' + tag + '</p></li>';
    });
    tagsList += '</ol>';
    cell4.innerHTML = tagsList;

    cell5.className = "proj-td";
    cell5.innerHTML = '<a href="' + project.link + '" style="text-decoration: none; color: #67b4f2" target="_blank">' + project.domain + '</a>';
}

projects.forEach(function(project) {
    addProjectToTable(project);
});