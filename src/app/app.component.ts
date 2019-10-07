import { Component, OnInit } from '@angular/core';
import {MovieServiceService} from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  //title = 'movie-app';
  MyMovies: any = [];

  constructor(private movieService: MovieServiceService){
    this.movieService.GetMovieInformation().subscribe((data) => {
    this.MyMovies = data.Search;
    console.log(this.MyMovies);

  })

  }
}
