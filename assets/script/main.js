$(document).ready(function () {
    var script;
    start();

    $("#app").on('keypress', 'input', function (event) {
        if (event.which === 13) {
            var inputText = $("#textInput").val();
            $(".resultCommand:last").append(inputText);
            $("#textInput").remove();
            script = inputText.toLowerCase();
            switch (script) {
                case "help":
                    help();
                    break;
                case "contact":
                    contact();
                    break;
                case "skills":
                    skills();
                    break;
                case "about":
                    about();
                    break;
                case "cls":
                    cls();
                    break;
                    case "exit":
                        exit();
                        break;
                case "linkedin":
                    openLink("https://www.linkedin.com/in/murad-karimov-686a73233");
                    break;
                case "mail":
                    openLink("mailto:thekarimovmurad@gmail.com");
                    break;
                case "medium":
                    openLink("https://medium.com/@thekarimovmurad");
                    break;
                case "github":
                    openLink("https://github.com/thekarimovmurad");
                    break;
                case "stackoverflow":
                    openLink("https://stackoverflow.com/users/23206813/karimov-murad");
                    break;
                case "upwork":
                    openLink("https://upwork.com/thekarimovmurad");
                    break;
                case "facebook":
                    openLink("https://facebook.com/thekarimovmurad");
                    break;
                case "instagram":
                    openLink("https://instagram.com/thekarimovmurad");
                    break;
                case "twitter":
                    openLink("https://twitter.com/thekarimovmurad");
                    break;
                case "resume":
                    openLink("/assets/resume.pdf");
                    break;
                default:
                    comandError(script);
            }
        }
    });
    $('.dot.red-dot').click(function() {
        exit();
    });
});

function openLink(url) {
    window.open(url, "_blank");
    input();
}
function start() {
    var valStart = '<div class="start"><p>Welcome</p><p>Starting server...</p><p>Type <span class="lightBlue">"help"</span> to see the available commands. All Commands are case sensitive.</p></div>';
    $("#app").append(valStart);
    input();
}
function help() {
    var valHelp = '<div class="output">&RightArrowBar; Available commands listed below. Type <span class="lightBlue">"cls"</span> to clear & <span class="lightBlue">"exit"</span> to close terminal.<ul class="green arrowRight"><li>About</li><li>Skills</li><li>Contact</li></ul></div>';
    $("#app").append(valHelp);
    input();
}
function about() {
    var valAbout = '<div class="output"><p>Hello! I\'m Murad Karimov, a dedicated C# and .NET developer driven by a profound passion for coding. I excel in crafting high-quality solutions that seamlessly blend user requirements with technical standards, leveraging my expertise in C# and .NET development alongside front-end skills.<br><span class="yellow">My Expertise:</span><ul><li>Proficient in C# and .NET development.</li><li>Skilled in front-end development.</li><li>Passionate about crafting robust solutions.</li></ul><span class="yellow">Areas of Interest: </span><br>Apart from my core strengths in C# and .NET, I\'m deeply intrigued by embedded systems, artificial intelligence, and C/C++ programming. Exploring these realms not only broadens my skill set but also equips me to tackle diverse challenges head-on.</p></div>';
    $("#app").append(valAbout);
    input();
}
function contact() {
    var valContact = '<div class="output"><p>In case you need me, drop a message via <a href="mailto:thekarimovmurad@gmail.com">thekarimovmurad@gmail.com</a>. I assure you to get back to you as soon as I can. Below are both clickable links and usable commands.</p><ul class="green arrow"><li><a href="https://www.linkedin.com/in/murad-karimov-686a73233" target="_blank">LinkedIn</a></li><li><a href="mailto:thekarimovmurad@gmail.com">Mail</a></li><li><a href="https://medium.com/@thekarimovmurad" target="_blank">Medium</a></li><li><a href="https://github.com/thekarimovmurad" target="_blank">GitHub</a></li><li><a href="https://stackoverflow.com/users/23206813/karimov-murad" target="_blank">Stack Overflow</a></li><li><a href="https://instagram.com/thekarimovmurad" target="_blank">Instagram</a></li><li><a href="https://www.upwork.com/fl/muradkarimov" target="_blank">Upwork</a></li><li><a href="https://facebook.com/thekarimovmurad" target="_blank">Facebook</a></li><li><a href="https://twitter.com/thekarimovmurad" target="_blank">Twitter</a></li></ul><p>Just type those social media names in the terminal as commands, and it\'ll take you to the respective page.</p></div>';
    $("#app").append(valContact);
    input();
}
function skills() {
    var valSkills = '<div class="output"><p>I can build a program </p><ul class="star yellow"><li>.NET (Web & Desktop)</li><li>C#, JS, Python, C/C++, Java</li><li>MSSQL, MYSQL</li><li>RESTful API</li><li>Git, Github</li><li>HTML, CSS, Bootstrap, JQuery</li><li>React, VueJS</li></ul><p><span class="red">&#9873;</span> Available for freelance, remote, or contract-based opportunities. Type <span class="lightBlue">"Resume"</span> you can view my resume.</p></div>';
    $("#app").append(valSkills);
    input();
}
function comandError(comand) {
    var valComandError = `<div class="output"><p class="red">Command not found: ${comand}</p><p>Type <span class="lightBlue">"help"</span> or <span class="lightBlue">"cls"</span> for assistance.</p></div>`;
    $("#app").append(valComandError);
    input();
}
function cls() {
    $('#app').empty();
    input();
}
function input() {
    var valInput = '<div class="input"><p><span class="red">root<span class="yellow">@tehekarimovmurad $</span>&nbsp;</p><p class="resultCommand"></p><input type="text" id="textInput"></div>';
    $("#app").append(valInput);
    $("#textInput").focus();

}
function exit() {
    $('.container').empty();
    var valExit = '<div class="exit"><p>Coded by Murad Karimov</p></div>';
    $(".container").append(valExit);
}
