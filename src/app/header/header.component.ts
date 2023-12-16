import { Component, OnInit} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorage: DataStorageService) {
  }

  ngOnInit() {}

  onSaveData() {
    this.dataStorage.storeRecipes();
  }
}
