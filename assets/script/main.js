$(document).ready(function () {
    var startDiv = $("<div>").addClass("start");

    var paragraphElement = $("<p>");
    var textNode1 = document.createTextNode("Welcome");
    var brElement1 = $("<br>");
    var textNode2 = document.createTextNode("Starting server...");
    var brElement2 = $("<br>");
    var textNode3 = document.createTextNode("Type ");
    var spanElement = $("<span>").addClass("lightBlue").text('"help"');
    var textNode4 = document.createTextNode(" to see the available commands. All Commands are case sensitive.");
    var brElement3 = $("<br>");
    paragraphElement.append(textNode1, brElement1, textNode2, brElement2, textNode3, spanElement, textNode4, brElement3);
    startDiv.append(paragraphElement);
    $("#app").append(startDiv);




    var inputDiv = $("<div>").addClass("input");
    var paragraphElement = $("<p>");
    var spanRed = $("<span>").addClass("red").text("root");
    var spanYellow = $("<span>").addClass("yellow").text("@tehekarimovmurad $");
    paragraphElement.append(spanRed, spanYellow, "&nbsp;");
    var inputElement = $("<input>").attr("type", "text").attr("id", "textInput");
    var resultCommand= $("<p>").attr("class", "resultCommand");
    inputDiv.append(paragraphElement, inputElement,resultCommand);
    $("#app").append(inputDiv);

    








    var outputDiv = $("<div>").addClass("output");
    var arrowSymbol = document.createTextNode("\u27A4"); // Unicode for right arrow
    var clsSpan = $("<span>").addClass("lightBlue").text('"cls"');
    var exitSpan = $("<span>").addClass("lightBlue").text('"exit"');
    var textNode = document.createTextNode(" Available commands listed below. Type ");
    var ulElement = $("<ul>").addClass("green arrowRight");
    var liAbout = $("<li>").text("About");
    var liSkills = $("<li>").text("Skills");
    var liContact = $("<li>").text("Contact");
    ulElement.append(liAbout, liSkills, liContact);
    outputDiv.append(arrowSymbol, textNode, clsSpan, " to clear & ", exitSpan, " to close terminal. ", ulElement);
    $("#app").append(outputDiv);




    var outputDiv = $("<div>").addClass("output");
    var paragraphElement = $("<p>").html("Hello! I'm Murad Karimov, a dedicated C# and .NET developer driven by a profound passion for coding. I excel in crafting high-quality solutions that seamlessly blend user requirements with technical standards, leveraging my expertise in C# and .NET development alongside front-end skills.<br><span class='yellow'>My Expertise:</span>");
    var ulElement = $("<ul>");
    var li1 = $("<li>").text("Proficient in C# and .NET development.");
    var li2 = $("<li>").text("Skilled in front-end development.");
    var li3 = $("<li>").text("Passionate about crafting robust solutions.");
    ulElement.append(li1, li2, li3);
    var interestSpan = $("<span>").addClass("yellow").text("Areas of Interest: ");
    var interestParagraph = $("<p>").html("Apart from my core strengths in C# and .NET, I'm deeply intrigued by embedded systems, artificial intelligence, and C/C++ programming. Exploring these realms not only broadens my skill set but also equips me to tackle diverse challenges head-on.");
    paragraphElement.append(ulElement, interestSpan, "<br>", interestParagraph);
    outputDiv.append(paragraphElement);
    $("#app").append(outputDiv);



    var outputDiv = $("<div>").addClass("output");
    var paragraphElement = $("<p>").html("In case you need me, drop a message via <a href='mailto:thekarimovmurad@gmail.com'>thekarimovmurad@gmail.com</a>. I assure you to get back to you as soon as I can. Below are both clickable links and usable commands.");
    var ulElement = $("<ul>").addClass("green arrow");
    var liLinkedIn = $("<li>").html("<a href='https://www.linkedin.com/in/murad-karimov-686a73233' target='_blank'>LinkedIn</a>");
    var liMail = $("<li>").html("<a href='mailto:thekarimovmurad@gmail.com'>Mail</a>");
    var liMedium = $("<li>").html("<a href='https://medium.com/@thekarimovmurad' target='_blank'>Medium</a>");
    var liGitHub = $("<li>").html("<a href='https://github.com/thekarimovmurad' target='_blank'>GitHub</a>");
    var liStackoverflow = $("<li>").html("<a href='https://stackoverflow.com/users/16714418/thekarimovmurad' target='_blank'>Stackoverflow</a>");
    var liInstagram = $("<li>").html("<a href='https://instagram.com/thekarimovmurad' target='_blank'>Instagram</a>");
    var liUpwork = $("<li>").html("<a href='https://www.upwork.com/freelancers/~0153a590c035ba88d6' target='_blank'>Upwork</a>");
    var liFacebook = $("<li>").html("<a href='https://facebook.com/thekarimovmurad' target='_blank'>Facebook</a>");
    var liTwitter = $("<li>").html("<a href='https://twitter.com/thekarimovmurad' target='_blank'>Twitter</a>");
    ulElement.append(liLinkedIn, liMail, liMedium, liGitHub, liStackoverflow, liInstagram, liUpwork, liFacebook, liTwitter);
    var infoParagraph = $("<p>").text("Just type those social media names in terminal as commands and it'll take you to the respective page.");
    outputDiv.append(paragraphElement, ulElement, infoParagraph);
    $("#app").append(outputDiv);







    inputElement.on('keypress', function(event) {
        if (event.which === 13) { // 13 is the keycode for Enter key
            var inputText = $(this).val(); // Retrieve the text from the input field
            resultCommand.append(inputText); // Append the text to the result paragraph
            $(this).remove(); // Clear the input field
        }
    });
    
});
