import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  doors: Door[] = [];
  start = 'Ich liebe Dich, weil ';
  end: string[] = [
    '  Du mir zeigst, was wahre Liebe ist!',
    '  Du von Anfang an ein ganz besonderes Charisma hattest!',
    '  Du clever bist!',
    '  Du ein tapsigen Gang hast!',
    '  Du geduldig bist!',
    '  Du mich immer unterstützt!',
    '  meine Laune sich hebt, sobald ich Dich sehe!',
    '  Du liebevoll bist!',
    '  Du unglaublich süße Grübchen hast!',
    '  Du zärtlich bist!',
    '  Du mir meine Fehler verzeihst!',
    '  es Dir egal ist, was andere denken!',
    '  Du großartig bist!',
    '  Du nicht nachtragend bist!',
    '  Deine Berührungen wundervoll sind!',
    '  Du mutig bist!',
    '  Du anders bist, als jeder den ich kenne!',
    '  Du so spontane, verrückte Ideen hast!',
    '  Du mir gut tust!',
    '  Du witzig bist!',
    '  ich immer Spaß mit Dir habe!',
    '  Du tolerant bist!',
    '  man mit Dir streiten kann!',
    '  Dein Lachen einfach ansteckend ist!',
    '  Du begehrenswert bist!',
    '  Du wunderschöne Augen hast!',
    '  Dir einfach nichts peinlich ist!',
    '  Du gutmütig bist!',
    '  Du so gern kuscheln magst!',
    '  Du mitreißend bist!',
    '  Du mich auch mit mieser Laune erträgst!',
    '  Du so wunderbar duftest!',
    '  Du genau weißt, was Du willst!',
    '  Du ehrlich bist!',
    '  ich mich bei Dir geborgen fühle!',
    '  Du mich immer wieder überrascht!',
    '  Du treu bist!',
    '  Dein Lächeln bezaubern ist!',
    '  Du herzlich bist!',
    '  ich mich so wohl bei Dir fühle!',
    '  Du verständnisvoll bist!',
    '  Du Dir keine Songtexte merken kannst!',
    '  Du immer für mich da bist!',
    '  Du mich immer hinterfragst und herausforderst!',
    '  Du tollpatschig bist!',
    '  Du so eine positive Grundeinstellung hast!',
    '  Du nie zu eitel bist!',
    '  Du auch meine nervigen Seiten erträgst!',
    '  Du so süß bist!',
    '  Du perfekt für mich bist!',
    '  Du mir das Gefühl gibst, etwas Besonderes zu sein!',
    '  Du fantasievoll bist!',
    '  Du schlechte Wortwitze magst!',
    '  Du es zulässt, dass ich dich mit Zärtlichkeiten überschütte!',
    '  wir die gleiche Weltanschauung teilen!',
    '  Du wunderbar bist!',
    '  ich mich mit Dir niemals einsam fühle!',
    '  Du Harmonie liebend bist!',
    '  ich mit Dir so herrlich albern sein kann!',
    '  Du mein bester Freund bist!',
    '  Du mich nachts warm hältst!',
    '  Du ein guter Mensch bist!',
    '  ich mich auf Dich verlassen kann!',
    '  Du immer hinter mir stehst!',
    '  ich immer noch weiche Knie bekomme, wenn wir uns küssen!',
    '  Du so flauschig bist!',
    '  ich bei Dir Ich sein kann!',
    '  ich Dich vermisse, wenn Du nicht da bist!',
    '  Du humorvoll bist!',
    '  Du wunderschön bist!',
    '  Du mein Leben verändert hast!',
    '  Du mir so gut tust!',
    '  Du mich nie verändern willst!',
    '  Du mich liebst!',
    '  Du Dir immer Zeit für mich nimmst, wenn ich etwas nicht verstehe!',
    '  Du humorvoll bist!',
    '  Du smart bist!',
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
