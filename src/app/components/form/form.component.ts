import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'item-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  item: Item = {
    quantity: 1,
    description: '',
    packed: false,
  };

  getRange(num: number): number[] {
    return Array.from({ length: num }, (_, i) => i + 1);
  }

  onSubmit(addForm: NgForm) {}
}
