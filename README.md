# Procesverslag
**Auteur:** Emile Kost

**De opdrachten:** [opdracht 1](SpaceX_EmileKost/index.html) en [opdracht 2](opdracht2/index.html)


Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.
![IMG_6387](https://user-images.githubusercontent.com/70690100/234545384-ef953f54-4697-49bd-857a-f236e71de1df.jpg)



## Bronnenlijst
  1. -bron 1-
  2. -bron 2-
  3. -...-


# Opdracht 1
Mijn plan is om voor SpaceX het logo te animeren. Ik ben tot dit logo gekomen omdat ik eerder voor Front end Development 2 de website van SpaceX heb gemaakt. Het lijk mij dan ook leuk om hier mee verder te gaan en hiervoor het logo te animeren. Een andere reden voor mijn keuze is dat er veel mogelijkheden zijn met de identiteit van SpaceX om zo het logo te animeren

## Identiteit SpaceX
SpaceX heeft de laatste jaren groote stappen gemaakt op het gebied van efficient ruimtevaart. Het is voor mij dan ook belangrijk dat het logo overkomt als een modern, fris en snel bedrijf. Een heel gedetailleerd voorbeeld van het bedrijf SpaceX is dat zij de eerste zijn geweest in het ontwikkelen van herbruikbare booster raketten, dit kan in de toekomst zorgen een stuk goedkopere ruimtevaart. Het is dan ook de bedoeling om dit te verwerken in mijn animatie.

## Animatie idee
Het idee is om de drie verschillende fases van een raketlancering van SpaceX na te bootsen met de letter 'a' van het logo. De eerste fase is de lancering van de lancering die vrij langzaam verloopt. Daarna kort na de eerste fase versnelt de raket en verdwijnt in de horizon. De derde fase bestaat uit de identiteit van SpaceX, het terug laten keren van de herbruikbare raket.

## Animatie stap voor stap uitgelegd

### Fase 1 - Ontstekingsfase Lancering
De eerste fase bestaat uit de ontstekingsfase van de raket. Ik heb hiervoor twee animaties gebruikt. De eerste animatie is om de letters te laten trillen, dit om de kracht van de raket na te bootsen. De tweede animatie is waar de ontseking plaatsvindt en de gehele lucht rood, geel en oranje kleurt door de ontsteking.

#### Screen-shake animatie
````
    animation: screen-shake .2s linear;
    animation-iteration-count: 25;
    animation-delay: 2s;

````
Voor deze animatie heb ik slechts een rotate gebruikt die het h1 element van links naar rechts laat schudden. Door niet te veel code kwijt te zijn aan het meerdere keren heen en weer laten gaan heb ik gebruik gemaakt van een iteration count van 25 keer zodat de animatie zich meerdere keren snel herhaald.

#### Fire-launch animatie
````
@keyframes fire-launch {
    0% {
        opacity: 0;
    } 
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
````
Voor de launch animatie wilde ik de kracht van een raket nabootsen. Ik heb hiervoor een container en een radial gradient gebruikt die bij de animatie fel over het gehele scherm zichtbaar is. Met ease-out dooft het vuur langzaam aan het eind van de animatie.

### Fase 2 - Takeoff
````
    animation: 
        fly 7s cubic-bezier(.66,.16,.8,.28) 1 forwards, 
       
    @keyframes fly  {
    0% {
        transform: translate(0);
    }
    100% {
        transform: translate(300px, -800px) rotate(30deg) scale(.2);
    }
}
````
Bij fase twee moet de letter a daadwerkelijk als een raket opstijgen. Om dit zo realistisch mogelijk te maken heb ik gebruik gemaakt van cubic-bezier. Dit om zo een vertraging toe te voegen aan het begin van de animatie. Om de raket in de horizon te laten verdwijnen heb ik scale() gebruikt, die het laat lijken alsof de raket steeds meer in de verte verdwijnt.

### Fase 3 - Landing
````
  land 10s ease-out 1 forwards,
  
  @keyframes land {
    0% {
        transform: translate(350px, -700px) rotate(30deg) scale(.2);
    }
    100% {
        transform: translate(0, 0) rotate(0deg) scale(1);
    }
}
````
Bij de derde fase keert de raket weer terug naar de bais. Ik heb hiervoor een ease-out gebruikt zodat de raket op het laatste moment zachtjes landt. Daarnaast heb ik '1 forwards' gebruikt zodat na het eind van de animatie het object op de gewenste plaatst blijft gepositioneerd.

### Extra - Glinstering over letters
````
span {
    animation: twinkle .1s ease-in-out;
}

@keyframes twinkle {
    0% {
        opacity: 1;
    }
    50% {
        opacity: .3;
    }
    100% {
        opacity: 1;
    }
}
````
Als extra heb ik een glinstering aan de letters toegevoegd die na de laatste fase van de raketlancering nog afspeelt. Het is hierbij de bedoeling dat de nadruk moet worden gelegd op SpaceX en de snelle en moderne groei van dit bedrijf. Elke span kreeg dezelfde animatie. Om het verloop goed te laten worden heb ik op elke span een andere delay gezet zodat deze mooi in elkaar overlopen.

## Reflectie
Ik vind dat ik bij deze opdracht op een leuke manier veel heb kunnen experimenteren met de moderne  technieken van CSS. Ik dacht stiekem dat ik ondertussen wel bijna alles wist van CSS, en heb daarom bij andere projecten veel de focus gelegd bij Javascript. Dit was echter totaal niet het geval, deze opdracht heeft mij weer op een leuke manier aan het denken gezet over CSS. Ik ben dan nu ook weer een stuk gemotiveerder om te blijven doorleren over CSS. Want ik merk dat er steeds minder client-side Javascript nodig is om complexe animaties en interacties te laten plaatsvinden. Ik vind dat ik dit project tot een mooi concept ben gekomen en dat ik veel heb geleerd over complext CSS technieken. Wat ik het aller lastigst vond was de natuurlijke curve en rotation verwerken in de take-off animatie. Ik had graag nog iets meer tijd gehad om deze betere af te stellen.

### Wat heb ik geleerd en gedaan?
* Opfrisser linear en radial gradients
* Gebruik gemaakt van custom properties
* Voor het eerst met clamp() gewerkt voor een efficiente manier van responsive design
* Gewerkt met cubic-bezier om zo een natuurlijk proces na te bootsen
* Geëxperimenteerd met keyframes en meerde transform properties
* prefers-color-scheme gebruikt
* prefers-reduces-motion gebruikt

## Extra
Ik heb nog een extra feature toegevoegd die de huidige weerstomstandigheden laat zien bij de SpaceX launch site in Texas. Ik maak hier gebruik van een weather API.

## Wishlist
* ::before en ::after (kon geen passende interactie hierbij vinden)
* Meer tijd voor afstelling van de natuurlijke curve in take-off fase

## Opdracht 1 reflectie

<details>
  <summary>uitwerken bij afronden opdracht (voor week 4)</summary>


  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="bummer">
</details>



## Opdracht 2 plan

<details>
  <summary>uitwerken na schetsen idee (voor week 5)</summary>


  ### Je ontwerp:
  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="ontwerp opdracht 2">


  ### Je ambitie: 
  Aan deze technieken/punten wil ik werken:
  - punt 1
  - punt 2
  - nog een punt
  - ...
</details>



## Opdracht 2 test

<details>
  <summary>uitwerken na testen (week 7)</summary>

  Neem minimaal 5 bevindingen op:



  ### Bevinding 1:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).



  ### Bevinding 2:
  Omschrijving van wat er nog niet orde was (tekst en afbeeding(en)).

  #### oplossing:
  Beschrijving hoe je het hebt hebt opgelost of als het niet gelukt is hoe je het zou oplossen (tekst en afbeeding(en)).



  ### Bevinding 3:
  ...
</details>



## Opdracht 2 reflectie

<details>
  <summary>uitwerken bij afronden opdracht (voor week 8)</summary>

  ### Je uitkomst - karakteristiek screenshot(s):
  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="uitkomst opdracht 2">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatje(s)

  <img src="readme-images/dummy-plaatje.svg" width="375px" alt="bummer">
</details>
