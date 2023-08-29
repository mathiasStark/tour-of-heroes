import { HeroService } from '../hero.service';
import { HEROES } from './../mock/heroes.mock';
import { Hero } from './../model/hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      data => {
        this.heroes = data;
      }
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
