import { Component, OnInit } from '@angular/core';
import { Bewertung, User } from '../interfaces';
import { PadacaService } from '../padaca.service';
import { BewertungComponent } from './bewertung/bewertung.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  bewertungen: Array<Bewertung>;
  bewertung: number;
  user: User;
  edit: Boolean;
  constructor(private padaService: PadacaService, private dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      alter: 15,
      beschreibung: 'Ich fahre gerne Auto... von hier nach da und manchmal auch wieder zurück. Es macht mir einfach Spaß. Aber den Spaß würde ich gerne mit anderen Leuten teilen, indem ich sie mitnehme. Ich habe mich hier bei Padaca registriert, weil Paderborn einfach die beste Stadt in Deutschland ist. asdahgfklasdklfjhasdklfjashdlkfhaskldjhfalskjdhflaksjdhflaksjdhflaksdhjfklajshdfklashjdklfhajsdklfhaslkdhjfaskldhfklasdhjfklashdjfklasjhdflkashdfklasjhdfklhasdklfjhaskldfjhaslkdhjfalskdjhfalskdhjfaskldhfasjkldhflaksjdhflaksjdhflaksjdhfslajkfhldkjhfsakhljfdhjlkasfdhjlfhjkfhjklfhjklfdhjklasdfhjfasdhjklfdasasdfhjfhjklfhjklasdfasdahgfklasdklfjhasdklfjashdlkfhaskldjhfalskjdhflaksjdhflaksjdhflaksdhjfklajshdfklashjdklfhajsdklfhaslkdhjfaskldhfklasdhjfklashdjfklasjhdflkashdfklasjhdfklhasdklfjhaskldfjhaslkdhjfalskdjhfalskdhjfaskldhfasjkldhflaksjdhflaksjdhflaksjdhfslajkfhldkjhfsakhljfdhjlkasfdhjlfhjkfhjklfhjklfdhjklasdfhjfasdhjklfdasasdfhjfhjklfhjklasdfasdahgfklasdklfjhasdklfjashdlkfhaskldjhfalskjdhflaksjdhflaksjdhflaksdhjfklajshdfklashjdklfhajsdklfhaslkdhjfaskldhfklasdhjfklashdjfklasjhdflkashdfklasjhdfklhasdklfjhaskldfjhaslkdhjfalskdjhfalskdhjfaskldhfasjkldhflaksjdhflaksjdhflaksjdhfslajkfhldkjhfsakhljfdhjlkasfdhjlfhjkfhjklfhjklfdhjklasdfhjfasdhjklfdasasdfhjfhjklfhjklasdf',
      userID: 1,
      vorname: 'Jeder',
      nachname: 'Bayer',
      username: 'Immer',
      pkw: 'Trabbi'
    };
    this.bewertung = 0;
    this.bewertungen = [];
    this.bewertungen.push({
      rating: 3,
      reiseID: 1,
      mitfahrer: {
        vorname: 'Jochen'
      },
      ratingText: 'Das Auto hatte keine Massagesitze...',
    });
    this.bewertungen.push({
      rating: 5,
      reiseID: 2,
      mitfahrer: {
        vorname: 'Hans'
      },
      ratingText: 'Geilstes Auto aller Zeiten!!!'
    });
    this.bewertungen.push({
      rating: 5,
      reiseID: 3,
      mitfahrer: {
        vorname: 'Betsi'
      },
      ratingText: 'Super Fahrt!'
    });
    this.bewertungen.push({
      rating: 4,
      reiseID: 4,
      mitfahrer: {
        vorname: 'Löli'
      },
      ratingText: 'Sehr angenehme Fahrt, nur das Auto war etwas zu laut.'
    });
    this.bewertungen.push({
      rating: 2,
      reiseID: 5,
      mitfahrer: {
        vorname: 'Bill'
      },
      ratingText: 'Er ist nicht schneller als 60 gefahren, was für ein Weichei... Deswegen habe ich das Brunchen mit meiner Oma verpasst...'
    });
    this.bewertungen.push({
      rating: 1,
      reiseID: 1,
      mitfahrer: {
        vorname: 'Angela'
      },
      ratingText: 'Ständig musste er eine Pinkelpause machen. Dann ist noch ein Reifen geplatzt und eine Tür ist abgefallen...'
    });
    for (let bew of this.bewertungen) {
      this.bewertung += bew.rating;
    }
    this.bewertung = this.bewertung / this.bewertungen.length;
    this.edit = false;


    /*
        let uid = this.route.snapshot.params['userID'];
    if (!uid) {
      uid = this.padaService.getSession().userID;
    }
    this.padaService.getUser(uid).subscribe(userres => {
      this.padaService.getBewertungen(userres.data).subscribe(bewertungres => {
        this.bewertungen = bewertungres.data;
        for (let bew of this.bewertungen) {
          this.bewertung += bew.rating;
        }
        this.bewertung = this.bewertung / this.bewertungen.length;
      });
    }, error => {
      this.bewertungen = [];
      this.bewertungen.push({
        rating: 10,
        reiseID: 1
      });
    });*/
  }

  private isOwnProfile(): boolean {
    return true;
  }

  private editProfile() {
    this.edit = true;
    console.log('Edit Profile');
  }
  private sendMessage() {
    console.log('Send Message');
  }

  private showReviews() {
    let dialogRef = this.dialog.open(BewertungComponent, {
      data: { user: this.user, bewertungen: this.bewertungen },
      width: '100%',
    });
  }
}
