import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  doors: Door[] = [];
  start = 'Ich liebe Dich, weil Du';
  end = 'bist!';
  mid: string[] = [
    '  clever', '  geduldig', '  liebevoll', '  zärtlich',
    '  großartig', '  mutig', '  witzig', '  tolerant',
    '  begehrenswert', '  gutmütig', '  mitreißend', '  ehrlich',
    '  treu', '  herzlich', '  verständnisvoll', '  immer für mich da',
    '  tollpatschig', '  so süß', '  perfekt für mich', '  fantasievoll',
    '  wunderbar', '  Harmonie liebend', '  ein guter Mensch', '  humorvoll',
  ];


  ngOnInit(): void {
    this.createCards();
  }

  createCards(): void {
    for (let i = 1; i <= this.mid.length; i++) {
      this.doors.push(
        {
          number: i,
          isOpen: true,
        }
      );
    }
  }

  checkDate(card: Door): boolean {
    if (new Date() >= new Date(2020, 11, card.number)) {
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
}
