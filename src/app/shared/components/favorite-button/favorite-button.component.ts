import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteButtonComponent implements OnInit, OnChanges {
  @Input() isFavorite: boolean = false;

  public iconLabel!: string;

  constructor() {}

  public ngOnInit(): void {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.isFavorite) {
      this.iconLabel = changes.isFavorite.currentValue ? 'star' : 'star_outline';
    }
  }
}
