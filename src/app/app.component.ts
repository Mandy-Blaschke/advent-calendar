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
    '  clever bist!',
    '  ein tapsigen Gang hast!',
    '  geduldig bist!',
    '  mich immer unterstützt!',
    '  liebevoll bist!',
    '  Du unglaublich süße Grübchen hast!',
    '  zärtlich bist!',
    '  Du mir meine Fehler verzeihst!',
    '  nicht nachtragend bist!',
    '  es Dir egal ist, was andere denken!',
    '  großartig bist!',
    '  Deine Berührungen wundervoll sind!',
    '  mutig bist!',
    '  Du so spontane, verrückte Ideen hast!',
    '  Du mir gut tust!',
    '  witzig bist!',
    '  ich immer Spaß mit Dir habe!',
    '  tolerant bist!',
    '  man mit Dir streiten kann!',
    '  Dein Lachen einfach ansteckend ist!',
    '  begehrenswert bist!',
    '  Du wunderschöne Augen hast!',
    '  gutmütig bist!',
    '  so gern kuscheln magst!',
    '  mitreißend bist!',
    '  so wunderbar duftest!',
    '  Du genau weißt, was Du willst!',
    '  ehrlich bist!',
    '  ich mich bei Dir geborgen fühle!',
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
    '  so flauschig bist!',
    '  ich bei Dir Ich sein kann!',
    '  ich Dich vermisse, wenn Du nicht da bist!',
    '  humorvoll bist!',
    '  wunderschön bist!',
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
    for (let i = 9; i <= this.end.length; i++) {
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
    if (this.checkDate(card)) {
      card.isOpen = !card.isOpen;
    }
  }
}

interface Door {
  number: number;
  isOpen: boolean;
  onceOpened: boolean;
}
