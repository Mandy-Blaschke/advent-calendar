import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  doors: Door[] = [];
  start = 'Ich liebe Dich, weil Du';
  end: string[] = [
    '  Du mir zeigst, was wahre Liebe ist!',
    '  Du von Anfang an ein ganz besonderes Charisma hattest!',
    '  clever bist!',
    '  ein tapsigen Gang hast!',
    '  geduldig bist!',
    '  mich immer unterstützt!',
    '  meine Laune sich hebt, sobald ich Dich sehe!',
    '  liebevoll bist!',
    '  Du unglaublich süße Grübchen hast!',
    '  zärtlich bist!',
    '  Du mir meine Fehler verzeihst!',
    '  nicht nachtragend bist!',
    '  es Dir egal ist, was andere denken!',
    '  großartig bist!',
    '  Deine Berührungen wundervoll sind!',
    '  mutig bist!',
    '  Du anders bist, als jeder den ich kenne!',
    '  Du so spontane, verrückte Ideen hast!',
    '  Du mir gut tust!',
    '  witzig bist!',
    '  ich immer Spaß mit Dir habe!',
    '  tolerant bist!',
    '  man mit Dir streiten kann!',
    '  Dein Lachen einfach ansteckend ist!',
    '  begehrenswert bist!',
    '  Du wunderschöne Augen hast!',
    '  Dir einfach nichts peinlich ist!',
    '  gutmütig bist!',
    '  so gern kuscheln magst!',
    '  mitreißend bist!',
    '  Du mich auch mit mieser Laune erträgst!',
    '  so wunderbar duftest!',
    '  Du genau weißt, was Du willst!',
    '  ehrlich bist!',
    '  ich mich bei Dir geborgen fühle!',
    '  Du mich immer wieder überrascht!',
    '  treu bist!',
    '  Dein Lächeln bezaubern ist!',
    '  herzlich bist!',
    '  ich mich so wohl bei Dir fühle!',
    '  verständnisvoll bist!',
    '  Dir keine Songtexte merken kannst!',
    '  immer für mich da bist!',
    '  Du mich immer hinterfragst und herausforderst!',
    '  tollpatschig bist!',
    '  Du so eine positive Grundeinstellung hast!',
    '  Du nie zu eitel bist!',
    '  Du auch meine nervigen Seiten erträgst!',
    '  so süß bist!',
    '  perfekt für mich bist!',
    '  Du mir das Gefühl gibst, etwas Besonderes zu sein!',
    '  fantasievoll bist!',
    '  schlechte Wortwitze machst!',
    '  Du es zulässt, dass ich dich mit Zärtlichkeiten überschütte!',
    '  respektvoll bist!',
    '  wir die gleiche Weltanschauung teilen!',
    '  wunderbar bist!',
    '  ich mich mit dir niemals einsam fühle!',
    '  Harmonie liebend bist!',
    '  ich mit Dir so herrlich albern sein kann!',
    '  mein bester Freund bist!',
    '  mich nachts warm hältst!',
    '  ein guter Mensch bist!',
    '  ich mich auf Dich verlassen kann!',
    '  Du immer hinter mir stehst!',
    '  ich immer noch weiche Knie bekomme, wenn wir uns küssen!',
    '  so flauschig bist!',
    '  ich bei Dir Ich sein kann!',
    '  ich Dich vermisse, wenn Du nicht da bist!',
    '  humorvoll bist!',
    '  wunderschön bist!',
    '  mein Leben verändert hast!',
    '  mir so gut tust!',
    '  Du mich nie verändern willst!',
    '  mich liebst!',
    '  Du Dir immer Zeit für mich nimmst, wenn ich etwas nicht verstehe!',
    '  humorvoll bist!',
    '  smart bist!',
    '  Du einfach Du bist!',
  ];


  ngOnInit(): void {
    this.createCards();
  }

  createCards(): void {
    for (let i = 8; i <= this.end.length; i++) {
      this.doors.push(
        {
          number: i,
          isOpen: true,
          onceOpened: false,
        }
      );
    }
  }

  checkDate(card: Door): boolean {
    if (new Date() >= new Date(2020, 11, card.number)) {
      card.onceOpened = true;
      return true;
    }
  }


  toggle(card: Door): void {
    console.log(this.doors.length);
    if (this.checkDate(card)) {
      card.isOpen = !card.isOpen;
    }
  }

  getNumber(card: Door): number {
    if (card.number > 62) {
      return card.number - 62;
    } else if (card.number > 31) {
      return card.number - 31;
    } else {
      return card.number;
    }
  }
}

interface Door {
  number: number;
  isOpen: boolean;
  onceOpened: boolean;
}
