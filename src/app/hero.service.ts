import { Injectable } from '@angular/core';
import { Hero } from './model/hero.model';
import { HEROES } from './mock/heroes.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    return heroes;
  }
}
