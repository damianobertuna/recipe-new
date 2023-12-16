import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Observable } from 'rxjs';

@Injectable()
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorageService: DataStorageService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    return this.dataStorageService.fetchRecipes();
  }

}
