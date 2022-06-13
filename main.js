function eventFunc(e) {
    console.log(e);
}

//string: '', ``

function insertBox(e){
    var eventId = e.target.id;
    var body = document.body;
    var box = `
    <div class="insertBox">
        <p class="insertBox-text">${eventId}</p>
    </div>`;
    body.insertAdjacentHTML('beforeend', box);
}




// globale Variablen um das Leben zu erleichtern 
var body = document.body;
var popupOpen = true; //zeigt an ob Popup About offen ist 
var aboutPopupOpen = false; //zeigt an ob Popup About geschlossen ist 
var counter = 10;
var lastButton = undefined;

// fügt html Element ein für Error Popup
function errorPopup(){
    var errorBox = `
    <div class="boxrahmen">
            <div class="rahmenMittig">
                <div class="textError">
                    <p>{error 404}//<br>cannot be found</p>
                </div>
                <div class="buttonbox">
                    <div class="generalbutton" >not ok</div>
                    <div class="generalbutton">not ok</div>
                </div>
            </div>
        </div>
    `
    popupOpen = true;

    body.insertAdjacentHTML('beforeend', errorBox);
}

// fügt html Element ein für Cookies Popup
function cookiesPopup() {
    var cookiesBox = `
    <div class="boxrahmen2">
            <div class="rahmenMittig2">
                <div class="textCookies">
                    <p>We use cookies! Fun!<br>
    Algospeak will track and collect your online behavior to overwhelm you even more with personalized content and ads. Therefore we will share information about your use of our site with google analytics, social media and advertisement companies — no worries they already know you as part of the family! We are always curious to get to know you a bit better! #qualitytimeonline</p>
                </div>
                <div class="buttonbox">
                    <div class="generalbutton">agree!</div>
                    <div class="generalbutton">sure!</div>
                </div>
            </div>
        </div>
    `
    popupOpen = true;
    
    body.insertAdjacentHTML('beforeend', cookiesBox);
}


// fügt html Element ein für Censor Popup
function censorPopup(){
    var censorBox = `<div class="boxCensor"></div>`

    popupOpen = true;
    
    body.insertAdjacentHTML('beforeend', censorBox);
}

// fügt html Element ein für Vibrator Popup
function vibratorPopup() {
    var vibratorBox = `
    <div class="adsrahmen">
    <img src="vib1.png">
    <div class="ellipse">
        <div class="preis" id="120">120,-</div>
    </div>
    <div class="vordergrundBox"></div>
    
</div>

<div class="adsrahmen2">
    <img src="vib2.png">
    <div class="ellipse">
        <div class="preis" id="120">80,-</div>
    </div>
    <div class="vordergrundBox"></div>
</div>

<div class="adsrahmen3">
    <img src="vib3.png">
    <div class="ellipse">
        <div class="preis" id="120">20,-</div>
    </div>
    <div class="vordergrundBox"></div>
</div>

<div class="adsrahmen4">
    <img src="vib4.png">
    <div class="ellipse">
        <div class="preis" id="120">40,-</div>
    </div>
    <div class="vordergrundBox"></div>
</div>

<div class="adsrahmen5">
    <img src="vib5.png">
    <div class="ellipse">
        <div class="preis" id="120">210,-</div>
    </div>
    <div class="vordergrundBox"></div>
</div>

<div class="adsrahmen6">
    <img src="vib6.png">
    <div class="ellipse">
        <div class="preis" id="120">160,-</div>
    </div>
    <div class="vordergrundBox"></div>
</div>

<div class="adsrahmen7">
    <img src="vib7.png">
    <div class="ellipse">
        <div class="preis" id="120">80,-</div>
    </div>
    <div class="vordergrundBox"></div>
</div>

<div class="adsrahmen8">
    <img src="vib8.png">
    <div class="ellipse">
        <div class="preis" id="120">50,-</div>
    </div>
    <div class="vordergrundBox"></div>
</div>

<div class="adsrahmen9">
    <img src="vib9.png">
    <div class="ellipse">
        <div class="preis" id="120">290,-</div>
    </div>
    <div class="vordergrundBox"></div>
</div>

<div class="adsrahmen10">
    <img src="vib10.png">
    <div class="ellipse">
        <div class="preis" id="120">100,-</div>
    </div>
    <div class="vordergrundBox"></div>
</div> 

`
    popupOpen = true;
    
    body.insertAdjacentHTML('beforeend', vibratorBox);
}

// fügt html Links ein für Link Popup + Wort-Link-Zuordnung
function linkPopup(word){
    var links = {
        lgbtq: "https://www.washingtonpost.com/technology/2022/04/08/algospeak-tiktok-le-dollar-bean/",
        sexist: "https://www.google.com/search?q=ceo&tbm=isch&ved=2ahUKEwinnLOVjpv4AhXM8IUKHWGeA9QQ2-cCegQIABAA&oq=ceo&gs_lcp=CgNpbWcQAzIECCMQJzIECCMQJzIFCAAQgAQyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CAgAEIAEELEDOgsIABCABBCxAxCDAToICAAQsQMQgwFQkQhYvwlgsgxoAHAAeACAAV2IAeQCkgEBNJgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=jCWfYqemBczhlwThvI6gDQ",
        queer: "https://www.dw.com/en/tiktok-censoring-lgbtq-nazi-terms-in-germany-report/a-61237610#:~:text=However%2C%20words%20such%20as%20%22gay,(Nazism)%20were%20also%20blocked.",
        accessibility: "https://www.newyorker.com/culture/cultural-comment/the-chatbot-problem",
        homosexual: "https://vimeo.com/425137575",
        unfair: "https://www.technologyreview.com/2021/07/13/1028401/tiktok-censorship-mistakes-glitches-apologies-endless-cycle/",
        healing: "https://www.battleforthenet.com/#net-neutrality",
        consequences: "https://www.youtube.com/watch?v=OL3DowBM9uc",
        prison: "https://theintercept.com/2022/04/04/amazon-union-living-wage-restrooms-chat-app/",
        censored: "https://onezero.medium.com/why-were-creating-language-to-hide-from-tech-s-censorship-systems-ad024f083c89",
        injustice: "https://www.ajl.org/connect/host-a-workshop",
        diversity: "http://gendershades.org/overview.html",
        violence: "https://yourdatamirror.com/?lang=en",
        disabled: "https://theglassroom.org/en/misinformation-edition/exhibits/google-society/",
        dead: "https://theglassroom.org/en/misinformation-edition/exhibits/google-society/",
        terrorism: "https://myactivity.google.com/activitycontrols?utm_source=google-account&utm_medium=web",
        vagina: "https://www.google.com/search?q=girl&tbm=isch&ved=2ahUKEwjXn7iTjpv4AhUEtBoKHalIDv8Q2-cCegQIABAA&oq=girl&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMgUIABCABDIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzILCAAQgAQQsQMQgwEyBQgAEIAEMggIABCABBCxAzoECCMQJzoECAAQQzoICAAQsQMQgwFQ7QdY7Qtgkw9oAHAAeACAAV6IAboDkgEBNZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=hyWfYpfAO4ToaqmRufgP",
        "asian woman": "https://www.google.com/search?q=asian+girls&tbm=isch&ved=2ahUKEwiX3e39lJv4AhUzm_0HHeF-ARgQ2-cCegQIABAA&oq=asian+girls&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQgAQyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIECAAQHjoGCAAQHhAFOgYIABAeEAhQsAhYtilgoC1oCXAAeACAAbQBiAHGBpIBAzguMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=sSyfYtfALrO29u8P4f2FwAE",
        vulva: "https://www.google.com/search?q=grafikdesignerin+berlin&hl=de&sxsrf=ALiCzsY8Yd-cc962vyxWItknNOuqXc5kqA%3A1654615112761&ei=SGyfYq3_LcGRxc8PkqOZ4Aw&oq=grafik&gs_lcp=Cgdnd3Mtd2l6EAEYADIECCMQJzIECAAQQzIECAAQQzIECAAQQzIECAAQQzIICAAQgAQQsQMyCggAELEDEIMBEEMyCAgAEIAEELEDMg0IABCABBCHAhCxAxAUMggIABCABBCxAzoRCC4QgAQQsQMQgwEQxwEQ0QM6CwgAEIAEELEDEIMBOgoILhDHARCvARBDOhAILhCABBCHAhDHARCvARAUOgUIABCABDoOCC4QgAQQsQMQgwEQ1AI6CwguEIAEELEDEIMBOgcILhCxAxBDOgUILhCABDoRCC4QgAQQsQMQgwEQxwEQrwE6EQguEIAEELEDEIMBEMcBEKMCOgcIABCxAxBDOgcIABDJAxBDSgQIQRgASgQIRhgAUABYhQdg-7kBaABwAXgAgAF4iAHyBJIBAzIuNJgBAKABAcABAQ&sclient=gws-wiz",
        penis: "https://www.google.com/search?q=professor&hl=de&sxsrf=ALiCzsZ9GGjYz2MF0OHuFxWUb_FPYIYq0Q:1654615301518&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjFoqWq0pv4AhX6S_EDHTIvBx8Q_AUoAXoECAIQAw&biw=1512&bih=757&dpr=2",
        abusing: "https://adssettings.google.com/authenticated?hl=de",
        mastrubate: "https://www.google.com/search?q=vibrator&sa=X&bih=757&biw=1512&rlz=1C5CHFA_enDE934DE934&hl=de&tbm=shop&sxsrf=ALiCzsblaEpdPxYfTXYpJF9Uml8w_YxpmA%3A1654615424499&ei=gG2fYvbOHe2Uxc8Pv7OTwAE&ved=0ahUKEwj2jvfk0pv4AhVtSvEDHb_ZBBgQ4dUDCAY&uact=5&oq=vibrator&gs_lcp=Cgtwcm9kdWN0cy1jYxADMgQIIxAnOgUIABCABDoLCAAQgAQQsQMQgwFKBAhBGABQAFiXC2C_DGgAcAB4AIABV4gBgAWSAQE4mAEAoAEBwAEB&sclient=products-cc"
    }

    var linksString = links[word]
    window.open(linksString,"_blank")

}

// Unterscheidung in Kategorien der Wörter
function wordClick(category,word){
    console.log(category,word)

    if(category === "link") {
        linkPopup(word); 
    }

    if(category === "error") {
        errorPopup();
    }

    if(category === "censor") {
        censorPopup();
    }

    if(category === "vibrator") {
        vibratorPopup();
    }

    if(category === "cookies") {
        cookiesPopup();
    }

}

// fügt html Element ein für About Popup
function aboutPopup() {
    var about = `<div class="boxrahmenweiß">
    <div class="boxrahmenweißMittig">
        <div class="textAbout">
            <p class="aboutP">
            <strong>Who creates the chronological ranking in search engines and social media platforms? How does it replicate the world as it exists? Who has the power to use it on whom?
            — society’s loss of power related to machine learning algorithms</strong><br><br>
            
            Our data is being collected, analysed and processed. But what happens if the data used to train algorithms is biased? Biased results will be the outcome, which are then making other decisions. How does this circle impact society?<br><br> 
            
            We are moving within a pre-controlled world by search engine optimised and biased algorithms. We find sexism and racism not only in search engine algorithms but social media and facial recognition algorithms as well. Websites and stories with a specific wording like <em>BlackLivesMatter</em> or <em>Lesbian</em> are getting shadow banned or censored through the power of the algorithmic black box fed with biased data. The outreach is getting lost, but especially marginalised groups speaking about racial injustice and social inequity need online visibility.<br><br> 
            
            The technology replicates the world just as it exists when it comes to discussing issues of race, gender, class and sexuality within society. Humanity is escaping the consequences of a monopolised, powerful tech industry lead by mostly men by constructing a new coded languague called <em>Algospeak</em>. Transforming words like <em>lesbian</em> into <em>le$bian</em> or <em>le dollar bian</em> is the outcome of developing the ephemeral Algospeak which is changing in real time working around the moderation of a discriminative algorithm. The language generates terms that social media and search engines do not find. Not yet.<br><br>
            
            This interactive web platform collects a shadow banned word list which is built on shared word lists online creators believe the algorithm is classifying as problematic. Hide and provide visibility  within your online presence and avoid to get banned or shadow banned by using a translation.<br><br>
            
            Here you can explore the consequences behind our daily used social media and search engine algorithms.<br><br><br>
            
            <strong> How to translate into Algospeak?</strong><br><br>
            
            One method is to substitute with asterisk * by replacing letters especially vowels, but not the first or last letter of a word. Also common is using other typographical symbols or special characters like &%#$!? as well as numbers 0123.<br><br>
            
            Another development uses synonyms or closely related words which have the same meaning of the original word and can trick the algorithm and simultaneously work as a trigger warning for difficult topics which are just understood by the community. For example talking about suicide is transformed into <em>becoming unalive</em>. But also working with <em>opposite of…</em> is being spread online.<br><br>
            
            Working with abbreviations like <em>SA</em> for <em>sexual assault</em> is one other method for getting around the under raking moderation system.<br><br><br>
            
            <strong> Who has the power to use it on whom?</strong><br><br>
            
            Threatened and marginalised people are in need to use Algospeak when talking about different topics that must be seen — the ones who are not threatened need to fight against the expropriation of words.<br>
            It is a creative and collective way to find ways and words that work around the algorithm, but it is obvious that algorithms will also replace the replacement causing another made up phrase and the cycle continues.<br>
            Humanity is creating another community language but there is a bigger issue behind the endless cycle of censorship and mistakes — the contradiction that we believe to live in an open knowledge society in which knowledge is accessible without any barriers.<br><br>
            
            The concern does not lie in technology, it is about the biased data which is used to train algorithms, collected and prepared by just a few monopolised tech companies, lead and designed by mostly (white) men for white men.<br>
            We as society depending on those who have the power and tech elite institutions creating a underclass of people around the world while the practice of discrimination becomes opaque online. 
            Algorithmic justice is becoming one of the largest civil right concerns but it is not only about fairness within technology systems, it is about shifting power.<br><br>
            
            People need their individual power to learn about these issues and question the algorithm working behind search engines and social media platforms. There is a necessity of meaningful legislations from policymakers as well as bringing interdisciplinary and diversity into machine learning and (computer science) education. 
            </p>
        </div>
    </div>
</div>`
    popupOpen = true;
    aboutPopupOpen = true;
    body.insertAdjacentHTML('beforeend', about);
}

//löscht das letzte Element 

function closePopup() {
    if(aboutPopupOpen){
        aboutPopupOpen = false;
    }
    const bodyLength = body.children.length
    const element = body.children[bodyLength - 1];
    element.remove();
    popupOpen = false;
}

//löscht das parentelement des Vibrator Popups

function closeSingleVibs(element) {
    element.remove();
    counter--;

    if(counter === 0){
        popupOpen = false;
        counter = 10
    }
}

// Funktion dass Button schwarz wird 
function turnButtonBlack(button) {
    button.classList.add('blackButton');
    lastButton = button;
}

// Funktion die Button wieder wei0 werden lässt 
function turnButtonWhite(button) {
    button.classList.remove('blackButton');
}

// Funktion dass Button Inhalt austauscht
function changeButtonContent(button){
    var liste = {
        queer: "TikTok",
        lgbtq: "TikTok, Youtube",
        accessibility: "Amazon",
        homosexual: "TikTok",
        transgender: "TikTok",
        "pay raise": "Amazon",
        bullying: "Amazon, Youtube",
        harassment: "Amazon",
        unfair: "Amazon",
        "#metoo": "Youtube",
        healing: "Youtube",
        consequences: "Youtube",
        prison: "Amazon",
        censored: "Youtube",
        injustice: "Amazon",
        diversity: "Amazon",
        violence: "Youtube",
        disabled: "TikTok",
        dead: "TikTok",
        abusing: "Youtube",
        terrorism: "Youtube",
        porn: "TikTok, Youtube, Google",
        hate: "TikTok",
        dumb: "Amazon",
        homophobe: "TikTok",
        sexist: "Youtube",
        racist: "Youtube",
        vagina: "Youtube, Google",
        vulva: "Youtube, Google",
        penis: "Youtube, Google",
        "asian woman": "TikTok",
        mastrubate: "Google",
        gay: "TikTok",
        "living wage": "Amazon",
        clitoris: "Youtube, Google",
        "Peng Shui": "TikTok",
        petition: "Amazon",
        transsexual: "TikTok",
        asians: "Youtube",
        lesbians: "Youtube",
        invisible: "Youtube",
        sex: "Youtube, Google",
        "sexual health": "Youtube",
        sexuality: "Youtube",
        vibrator: "TikTok, Google",
        ethics: "Amazon",
        concerned: "Amazon",
        condom: "Youtube",
        "labor camp": "TikTok",
        "internment camp": "TikTok",
        "goverment in exil": "TikTok",
        Auschwitz: "TikTok",
        "national socialism": "TikTok",
        BlackLivesMatter: "TikTok",
        nipples: "Youtube",
        blacks: "Youtube",
        nazi: "Youtube, Google",
        jews: "Youtube",
        democratic: "Youtube",
        elections: "Youtube",
        breasts: "Youtube",
        "#acab": "TikTok",
        abusive: "Youtube",
        "anorexia nervosa": "Youtube",
        Wuhan: "Youtube",
        victim: "Youtube",
        favoritism: "Amazon",
        "I dont care": "Amazon",
        immoral: "Youtube",
        fairness: "Amazon",
        vaccine: "Amazon",
        slave: "Amazon, Youtube",
        "slave labor": "Amazon",
        abortion: "Youtube",
        assaulted: "Youtube",
        "breast cancer": "Youtube",
        cancer: "Youtube",
        "corona virus" : "Youtube",
        orgasm: "Youtube, Google",
        prostitution: "Youtube",
        "skin cancer": "Youtube",
        slaughtering: "Youtube",
        tumor: "Youtube",
        poor: "TikTok",
        rude: "Amazon",
        stupid: "Amazon",
        dumb: "Amazon",
        fetish: "Youtube",
        HIV: "Youtube",
        "sex worker": "Youtube",
        stripper: "Youtube",
        suicide: "Youtube",
        attacked: "Youtube",
        "bladder cancer": "Youtube",
        trigger: "Youtube"

    }

    var word = button.innerText;
    var newContent = "shadowbanned by " + liste[word];
    button.innerText = newContent;
}
// Funktion dass Button Inhalt wieder zum Ausgangsword (porn) werden lässt
function resetButtonContent(lastButton){
    var word = lastButton.id
    lastButton.innerText = word;
}

//Event Listner 

var firstClick = true 

window.addEventListener('click', (event) => {
    // console.log(event)
    if(firstClick){
        firstClick = !firstClick;
        initMouse();
    }

        //Wort Buttons werden geklickt
    if(event.target.classList[0] === "button") {
        var category = event.target.classList[1]
        var word = event.target.innerText
        var button = event.target 

        if(popupOpen) {
            return
        }
        if(lastButton){
            turnButtonWhite(lastButton);
            resetButtonContent(lastButton);
        }
        
        turnButtonBlack(button);
        changeButtonContent(button);
        wordClick(category, word);
        return
    } 

    // schließt Popup Fenster
    if((popupOpen) && (event.target.classList[0] === "generalbutton"))  {
        closePopup();
    }

    // öffnet Popup About 
    if(event.target.id === "about") {
        if(popupOpen) {
            closePopup();
            return
        }
        aboutPopup();
        return
    }
    // schließt Popup About
    if((popupOpen && aboutPopupOpen) && (event.target.classList[0] !== 'aboutP')){
        closePopup();
        return
    }

    //schließt Censor Popup
    if((popupOpen) && (event.target.classList[0] === "boxCensor")) {
        closePopup();
        return
    }

    //klickt auf einen Vibrator 
    if((popupOpen) && (event.target.classList[0] === "vordergrundBox")) {
        var element = event.target.parentElement 
        closeSingleVibs(element);
    }

})

const initMouse = () => {
    window.addEventListener('mousemove', (e) => {
        let coordinateCenter = {x: 0, y: 0};
        let mouseCoordinates = {x: 0, y: 0};
        let rudiVector = {x: 0, y: 1}

        const getCoordinatesOfSecondMouse = (deg, radius) => {
            // let angleToDisplay = deg > 180 ? deg - 180 : deg + 180;
            let ankathete = Math.cos(deg * Math.PI / 180) * radius;
            let gegenkathete = Math.sin(deg * Math.PI / 180) * radius;
            if((deg >= 0 && deg < 45) || (deg > 180 && deg <= 225)){
                return {
                    x: mouseCoordinates.x - gegenkathete,
                    y: mouseCoordinates.y + ankathete
                }
            }
            if((deg >= 45 && deg < 90) || (deg > 270 && deg <= 315)){
                return {
                    x: mouseCoordinates.x - gegenkathete,
                    y: mouseCoordinates.y + ankathete
                }
            }
            if((deg >= 90 && deg < 135) || (deg > 225 && deg <= 270)){
                return {
                    x: mouseCoordinates.x - gegenkathete,
                    y: mouseCoordinates.y + ankathete
                }
            }
            if((deg >= 135 && deg < 180) || (deg > 315 && deg <= 360)){
                return {
                    x: mouseCoordinates.x - gegenkathete,
                    y: mouseCoordinates.y + ankathete
                }
            }
        }
        
        const coordinatesToDisplay = (a) => {
            const element = document.getElementById('pointer2');
            element.style.left = `${a.x}px`;
            element.style.top = `${a.y}px`
        }
        
        const getMouseCoordinates = (e) => {
            mouseCoordinates.x = e.clientX;
            mouseCoordinates.y = e.pageY;
            return {
                x: e.clientX - window.innerWidth / 2,
                y: window.innerHeight / 2 - e.clientY
            }
        }
        
        const getVectorFromTwoPoints2 = (a, b) => {
            return {
                x: b.x - a.x,
                y: b.y - a.y
            }
        }
        
        const getVectorAngle2 = (a, b) => {
            let scalar = getScalar2(a,b);
            let productOfAmounts = getVectorAmount2(a) * getVectorAmount2(b);
            let radAngle = Math.acos(scalar / productOfAmounts);
            let deg = radAngle * 180 / Math.PI;
            return deg;
        }
        
        const getScalar2 = (a, b) => {
            return a.x * b.x + a.y * b.y;
        }
        
        const getVectorAmount2 = (vector) => {
            return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
        }


        let mouseInCoord = getMouseCoordinates(e);
        let mouseVector = getVectorFromTwoPoints2(coordinateCenter, mouseInCoord);
        let angle = getVectorAngle2(rudiVector, mouseVector);
        if(mouseInCoord.x < 0){
            angle = 360 - angle;
        }  
        let mouse2Coord = getCoordinatesOfSecondMouse(angle, 40);
        coordinatesToDisplay(mouse2Coord);
    })
}

// window.addEventListener('load', initMouse);

// Mouse Moves 
// Eventlistener auf window object - höre auf event mousemove - im event finde ich 
// koordinaten des tatsächlichen cursers - platziere div mit png, poition is absolut und auf position x und y koordinate 100, 50 

// function 
// var cursor = 

//window.addEventListener('mousemove', (event) => {
//    console.log(event)
//
//})









