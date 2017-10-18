import { Component, OnInit } from '@angular/core';

import { Movie } from './resources/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  movieList: Array<Movie>;
  welcomeMsg: string;

  constructor(){}

  ngOnInit(){
    this.welcomeMsg = 'Welcome to our Movie List!'
    this.movieList = [
      {
        title: 'Napolean Dynamite',
        genre: 'Comedy',
        description: "Idaho's most curious resident, Napoleon Dynamite, lives with his grandma and his 32-year-old brother (who cruises chat rooms for ladies) and works to help his best friend, Pedro, snatch the Student Body President title from mean teen Summer Wheatley",
        trailer: 'http://www.imdb.com/title/tt0374900/videoplayer/vi2190999833?ref_=tt_pv_vi_aiv_1'
      },
      {
        title: 'The Goonies',
        genre: 'Comedy',
        description: "In order to save their home from foreclosure, a group of misfits set out to find a pirate's ancient valuable treasure.",
        trailer: 'http://www.imdb.com/title/tt0089218/videoplayer/vi2118099993?ref_=tt_pv_vi_aiv_1'
      },
      {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        genre: 'Adventure, Drama, Fantasy',
        description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.",
        trailer: 'http://www.imdb.com/title/tt0120737/videoplayer/vi2073101337?ref_=tt_pv_vi_aiv_1'
      },
      {
        title: 'Nacho Libre',
        genre: 'Comedy',
        description: "Berated all his life by those around him, a monk follows his dream and dons a mask to moonlight as a Luchador (Mexican wrestler).",
        trailer: 'http://www.imdb.com/title/tt0457510/videoplayer/vi4205642009?ref_=tt_pv_vi_aiv_1'
      }
    ];
  }
}
